
async function loginFormHandler(event) {
  event.preventDefault();

  const emailVal = document.querySelector('#email-login').value.trim();
  const passwordVal = document.querySelector('#password-login').value.trim();

  if (emailVal && passwordVal) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email: emailVal,
        password: passwordVal
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const usernameVal = document.querySelector('#username-signup').value.trim();
  const emailVal = document.querySelector('#email-signup').value.trim();
  const passwordVal = document.querySelector('#password-signup').value.trim();

  if (usernameVal && emailVal && passwordVal) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username: usernameVal,
        email: emailVal,
        password: passwordVal
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
