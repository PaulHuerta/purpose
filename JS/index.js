function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var names = getParameterByName("name");
var sex = getParameterByName("sex");
var setName = document.getElementById("names");
var setSex = document.getElementById("sex");
var no = document.getElementById("no");
var si = document.getElementById("si");

setName.innerHTML = names;

if (sex == "h") {
  setSex.innerHTML = "novio";
} else if (sex == "m") {
  setSex.innerHTML = "novia";
} else {
  setSex.innerHTML = "novi@";
}

function changeSi() {
  no.innerHTML = "No";
  si.innerHTML = "SI";
}

function changeNo() {
  no.innerHTML = "SI";
  si.innerHTML = "No";
}

function clickButton() {
  Swal.fire({
    title: "Gracias x aceptar!",
    text: "Te hare muy feliz ♥",
    imageUrl: "https://github.com/PaulHuerta/LOL/blob/master/IMG/gif.gif?raw=true",
    imageWidth: 370,
    imageHeight: 300,
    imageAlt: "Gatitos dandose un besito",
    confirmButtonText: 'Entendido ♥',
  });
}

si.addEventListener("click", clickButton);
no.addEventListener("click", clickButton);
var siHover = si.addEventListener("mouseover", changeSi);
var noHover = no.addEventListener("mouseover", changeNo);
var siHover = si.addEventListener("touchstart", changeSi);
var noHover = no.addEventListener("touchstart", changeNo);
