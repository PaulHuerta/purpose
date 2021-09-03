var button = document.getElementById("button_click");
var inputLink = document.getElementById("link");
var buttonCopy = document.getElementById("copy_text");

button.addEventListener("click", function () {
  var names = document.getElementById("name").value;
  var sex_h = document.getElementById("sex_h").checked;
  var sex_m = document.getElementById("sex_m").checked;

  if (sex_h == true) {
    var sex = "h";
  } else if (sex_m == true) {
    var sex = "m";
  } else {
    var sex = "";
  }

  inputLink.value = "https://paulhuerta.github.io/purpose/?sex=" + sex + "&name=" + names;
});

buttonCopy.addEventListener("click", function(){
  inputLink.select();
  document.execCommand("copy");
})  

fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
        'Authorization': '{o_6bohnrl32l}',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": window.location.href , "domain": "pauhuerta.dev"})
});