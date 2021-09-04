var button = document.getElementById("button_click");
var inputLink = document.getElementById("link");
var buttonCopy = document.getElementById("copy_text");

button.addEventListener("click", function () {
  var names = document.getElementById("name").value;

  if (names.length > 1) {
    var sex_h = document.getElementById("sex_h").checked;
    var sex_m = document.getElementById("sex_m").checked;
    var sex_o = document.getElementById("sex_o").checked;
    var texta = document.getElementById("text_a").value;

    if (sex_h == true) {
      var sex = "h";
    } else if (sex_m == true) {
      var sex = "m";
    } else if (sex_o == true) {
      var sex = "o";
    } else {
      var sex = "";
    }
    linkNOTshort =
      "https://paulhuerta.dev/projects/YouWantToBeMy/?sex=" +
      sex +
      "&name=" +
      names +
      "&text=" +
      texta;

    function InputSetURL(url) {
      inputLink.value = url;
    }

    fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer HKgZSYSWogCS2s9hu5szKgQoaWQSj1faNIpr4hUcYBoFyGUg6IWUSv8tHW6J",
      },
      body: JSON.stringify({
        url: linkNOTshort,
        domain: "tiny.one",
      }),
    })
      .then((response) => response.json())
      .then((code) => {
        if (code.data !== undefined) {
          var AllData = code.data;
          InputSetURL(AllData.tiny_url);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Hubo un error al acortar el URL",
          });
        }
      });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Parece que no has ingresado un nombre.",
    });
  }
});
