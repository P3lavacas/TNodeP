window.onload = init;

function init(){
  //boton para registro
  document.querySelector('.btn-secondary').addEventListener('click', function(){
    window.location.href = "signin.html"
  });
  //boton para Entrar
  document.querySelector('.btn-primary').addEventListener('click',login);
}
function login(){
  var mail = document.getElementById('input-mail').value;
  var pass = document.getElementById('input-password').value;
  //console.log(mail, pass);
  axios({
    method: 'post',
    url: 'http://localhost:3000/user/login',
    data:{
      user_mail: mail,
      user_password:pass
    }
  }).then(function(res){
    console.log(res);
  }).catch(function(err){
    console.log(err);
  })
}
