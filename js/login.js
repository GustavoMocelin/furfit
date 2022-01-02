function Login() {
  var done = 0;
  var username = document.login.username.value;
  username = username.toLowerCase();
  var password = document.login.password.value;
  password = password.toLowerCase();
  if (username == "furfit" && password == "furfit") {
    window.location = "tabela_usuario.html";
    done = 1;
  }
  if (username == "academia" && password == "academia") {
    window.location = "tabela_montar.html";
    done = 1;
  }
  if (done == 0) {
    alert("Senha ou Usuário inválido.");
  }
}
