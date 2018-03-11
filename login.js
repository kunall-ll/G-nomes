function login() {
var username = document.getElementById("UserName").value;
var userpass = document.getElementById("UserPass").value;

let name = 'DrGnome';
let password = 'Genome';

if (username===name && userpass===password) {
  document.getElementById('logstatus').innerHTML = 'Logging in...';
  window.location.assign("database.html")
} else {
  document.getElementById('logstatus').innerHTML = 'Incorrect username or password.';
}
}
