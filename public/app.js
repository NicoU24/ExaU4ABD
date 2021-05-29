   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyDXMxnFS9fAcKCu1DEv8nkcCtBazm4FZoU",
    authDomain: "uni4-1f0ec.firebaseapp.com",
    projectId: "uni4-1f0ec",
    storageBucket: "uni4-1f0ec.appspot.com",
    messagingSenderId: "676492576575",
    appId: "1:676492576575:web:f2f6e4e6bf63a3e032b58a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  var txtUsuario = document.getElementById("Usuario");
  var txtMensaje = document.getElementById("Mensaje");
  var btnEnviar = document.getElementById("btnenviar");
  var chatlista = document.getElementById("chatlista");

  btnEnviar.addEventListener("click", function(){
      var usuario = txtUsuario.value;
      var mensaje = txtMensaje.value;
      var html = "<li>" + usuario + " dice: " + mensaje + "</li>";

      chatlista.innerHTML += html; 

      firebase.database().ref('chat').push({
          user: usuario,
          message: mensaje
      })
  });

  firebase.database().ref('chat').on('value', (snapshot) =>{
      var html1 = '';

      snapshot.forEach(function (e) {
          var elemento = e.val();
          var usuario1 = elemento.user;
          var mensaje1 = elemento.message;
          html1 += "<li>" + usuario1 + " dice: " + mensaje1 + "</li>";
      });

      chatlista.innerHTML = html1;
     
  })

