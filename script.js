document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita la recarga de la página

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Datos de usuario y contraseña válidos
  const validUsername = "jhoel";
  const validPassword = "jhoel123";

  if (username === validUsername && password === validPassword) {
    alert('Inicio de sesión exitoso');
    window.location.href = "catalogo.html"; // Redirige a catalogo.html
  } else {
    alert('Usuario o contraseña incorrectos. Por favor, intenta de nuevo.');
  }
});

