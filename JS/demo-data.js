(function () {
  const installs = [
    {id:'SNE-001',name:'Sítio Serra Azul',region:'Zona rural · demonstração',comm:'active',lastUpdate:'Hoje, 14:32:18',soc:78,power:430,volt:52.4,pv:1100,energy:6.8,inverter:'NeoWave X1 Hybrid 5 kW',battery:'VoltCore LFP 48 V · 200 Ah'},
    {id:'SNE-002',name:'Fazenda Horizonte',region:'Zona rural · demonstração',comm:'stale',lastUpdate:'Hoje, 11:05:42',soc:41,power:285,volt:49.8,pv:640,energy:3.1,inverter:'NeoWave X1 Hybrid 3 kW',battery:'VoltCore LFP 48 V · 100 Ah'},
    {id:'SNE-003',name:'Estação Vale Norte',region:'Área remota · demonstração',comm:'offline',lastUpdate:'Hoje, 11:20:07',soc:null,power:null,volt:null,pv:null,energy:null,inverter:'SunLine Inv-3000',battery:'Banco AGM 48 V · 150 Ah'},
    {id:'SNE-004',name:'Chácara Boa Vista',region:'Zona rural · demonstração',comm:'active',lastUpdate:'Hoje, 14:31:55',soc:23,power:312,volt:48.6,pv:380,energy:4.4,inverter:'NeoWave X1 Hybrid 3 kW',battery:'VoltCore LFP 48 V · 100 Ah'}
  ];
  const alerts = [
    {id:'a1',category:'Comunicação interrompida',severity:'critical',systemId:'SNE-003',time:'Hoje, 11:20',desc:'Nenhum pacote de dados recebido desde 11:20 (simulado).',note:'A perda de comunicação não confirma, por si só, uma falha física no equipamento. Em um cenário real, o ponto de partida seria o gateway, o enlace de rede e a alimentação local.',state:'Novo'},
    {id:'a2',category:'Dados desatualizados',severity:'warning',systemId:'SNE-002',time:'Hoje, 11:05',desc:'A última leitura está acima da janela esperada de atualização (30 min).',note:'Os valores exibidos para esta instalação são as últimas medições recebidas, e não leituras atuais.',state:'Em análise'},
    {id:'a3',category:'Carga baixa da bateria',severity:'warning',systemId:'SNE-004',time:'Hoje, 13:48',desc:'SOC fictício de 23%, abaixo da referência de 30% definida na demonstração.',note:'Alerta baseado em um limite configurável. O valor de SOC é fictício e serve apenas para ilustrar o comportamento.',state:'Novo'},
    {id:'a4',category:'Falha reportada pelo equipamento',severity:'critical',systemId:'SNE-001',time:'Ontem, 19:12',desc:'O inversor fictício reportou o código demonstrativo E-042 (sobretemperatura simulada).',note:'Código gerado para esta demonstração. Em uso real, a interpretação do código dependeria da documentação do fabricante.',state:'Resolvido'}
  ];
  const metrics = {Potência:{unit:'W',dec:0},'Geração FV':{unit:'W',dec:0},Tensão:{unit:'V',dec:1},Corrente:{unit:'A',dec:1},SOC:{unit:'%',dec:0}};
  const commLabel = {active:'Comunicação ativa',stale:'Sem atualização recente',offline:'Offline'};
  const fmt = (n,d=0) => Number(n).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});
  const clock = (seconds) => [Math.floor(seconds/3600)%24,Math.floor(seconds%3600/60),seconds%60].map(n=>String(n).padStart(2,'0')).join(':');
  function seriesFor(inst, metric, n) {
    let seed = (inst.id.charCodeAt(6)||1)*7 + metric.length*13 + n;
    const random = () => {seed=(seed*9301+49297)%233280;return seed/233280;};
    const out=[]; const power=inst.power||0, volt=inst.volt||0, soc=inst.soc||0;
    for(let i=0;i<n;i++){const t=i/Math.max(1,n-1);const day=Math.sin(t*Math.PI*2*Math.max(1,n/24)-1.2);const noise=random()-.5;
      if(metric==='Geração FV') out.push(Math.max(0,(inst.pv||0)*(.55+day*.5+noise*.15)));
      else if(metric==='Potência') out.push(Math.max(40,power*(1+day*.45+noise*.3)));
      else if(metric==='Tensão') out.push(volt+day*1.8+noise*.5);
      else if(metric==='Corrente') out.push(Math.max(.5,(power/(volt||1))*(1+day*.4+noise*.3)));
      else out.push(Math.min(100,Math.max(8,soc+day*14+noise*4)));
    } return out;
  }
  function hourlyPv(inst){const pv=inst.pv||0;return Array.from({length:24},(_,h)=>Math.round(Math.max(0,Math.sin(((h-6)/12)*Math.PI))*pv*1.18));}
  function hourlyLoad(inst){return seriesFor(inst,'Potência',24).map(Math.round);}
  function dailyFlow(inst){const load=inst.power||0;return Array.from({length:24},(_,h)=>{const solar=Math.max(0,Math.sin(((h-6)/12)*Math.PI))*(load*2.4);const base=load*(.55+.35*Math.sin(((h-17)/24)*Math.PI*2)**2);return Math.round(solar-base);});}
  function batteryAmps(inst){if(inst.pv===null||inst.power===null||!inst.volt)return null;return (inst.pv-inst.power)/inst.volt;}
  function equipmentFor(inst){const off=inst.comm==='offline';const [inv,...ir]=inst.inverter.split(' ');const [bat,...br]=inst.battery.split(' ');return [
    {name:'Inversor principal',type:'Inversor',maker:inv,model:ir.join(' '),serial:`INV-${inst.id.slice(-3)}-A`,data:off?'Sem dados':'Disponível',update:inst.lastUpdate},
    {name:'Banco de baterias',type:'Bateria',maker:bat,model:br.join(' '),serial:`BAT-${inst.id.slice(-3)}-B`,data:off?'Sem dados':inst.comm==='stale'?'Parcial':'Disponível',update:inst.lastUpdate},
    {name:'Gateway de coleta',type:'Gateway',maker:'Solarneo',model:'Edge · protótipo',serial:`GTW-${inst.id.slice(-3)}-C`,data:off?'Sem dados':'Parcial',update:inst.lastUpdate}
  ];}
  window.SolarneoData={installs,alerts,metrics,commLabel,fmt,clock,seriesFor,hourlyPv,hourlyLoad,dailyFlow,batteryAmps,equipmentFor};
})();
