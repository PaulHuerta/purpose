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
} else if(sex == "m"){
    setSex.innerHTML = "novia";
} else {
    setSex.innerHTML = "novi@";
}

function changeSi(){
  no.innerHTML = "Si";
  si.innerHTML = "No";
}

function changeNo(){
  no.innerHTML = "No";
  si.innerHTML = "Si";
}

var siHover = si.addEventListener("mouseover", changeSi);
var noHover = no.addEventListener("mouseover", changeNo);




