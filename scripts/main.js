// document.querySelector("html").onclick = function(){
//     alert("Hey!!, deja de pincharme");
// };

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
  }
  

let miImage = document.querySelector("img");
miImage.onclick = function(){
    let miSrc = miImage.getAttribute("src");
    if(miSrc === './../images/firefox-icon.png'){
        miImage.setAttribute("src", "./../images/ChemssSad.jpg");
    }else{
        miImage.setAttribute("src", "./../images/firefox-icon.png");
    }
};

function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
    }
  }
  
  
  miBoton.onclick = function () {
    estableceNombreUsuario();
  };
  