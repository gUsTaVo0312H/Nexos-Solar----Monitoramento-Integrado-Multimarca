document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#login-form');
  if (!form) return;
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const emailError = document.querySelector('#email-error');
  const passwordError = document.querySelector('#password-error');
  const submit = document.querySelector('#submit-login');
  const toggle = document.querySelector('#toggle-password');
  let submitted = false;
  const showError = (el, message) => { el.textContent = message; el.hidden = !message; };
  const validate = () => {
    const trimmed = email.value.trim();
    const mailErr = !trimmed ? 'Informe seu e-mail.' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed) ? 'Informe um e-mail válido, como nome@exemplo.com.' : '';
    const passErr = password.value.length ? '' : 'Informe uma senha.';
    showError(emailError, mailErr); showError(passwordError, passErr);
    email.setAttribute('aria-invalid', String(Boolean(mailErr))); password.setAttribute('aria-invalid', String(Boolean(passErr)));
    return !mailErr && !passErr;
  };
  email.addEventListener('blur', () => { if (submitted || email.value) validate(); });
  password.addEventListener('blur', () => { if (submitted || password.value) validate(); });
  email.addEventListener('input', () => { if (submitted) validate(); });
  password.addEventListener('input', () => { if (submitted) validate(); });
  toggle.addEventListener('click', () => {
    const isVisible = password.type === 'text'; password.type = isVisible ? 'password' : 'text';
    toggle.setAttribute('aria-label', isVisible ? 'Mostrar senha' : 'Ocultar senha'); toggle.setAttribute('aria-pressed', String(!isVisible));
    toggle.innerHTML = window.Solarneo.icon(isVisible ? 'eye' : 'eyeOff');
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault(); submitted = true;
    if (!validate()) { (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()) ? email : password).focus(); return; }
    submit.disabled = true; submit.innerHTML = '<span class="spinner" aria-hidden="true"></span>Entrando…';
    window.setTimeout(() => { window.location.href = 'dashboard.html'; }, 550);
  });
});
