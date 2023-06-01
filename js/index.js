let animation;

function loadAnimation(path) {
  animation = lottie.loadAnimation({
    container: document.getElementById("lottie-animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: path,
  });
}

loadAnimation("json/Mail-light.json");

document
  .querySelector("#darkmode-toggle")
  .addEventListener("change", function () {
    if (animation) {
      animation.destroy();
    }

    if (this.checked) {
      loadAnimation("json/Mail-dark.json");
      document.querySelector("body").style.backgroundColor = "gray";
      document.querySelector("main").style.backgroundColor = "#00003f";
      for (let li of document.querySelectorAll("li")) {
        li.classList.add("darkmode");
      }
      for (let li of document.querySelectorAll("section")) {
        li.style.color = "rgba(128,128,128, 0.75)";
      }
      for (let li of document.querySelectorAll("h2")) {
        li.style.color = "rgba(128,128,128, 0.75)";
      }
      for(let logo of document.querySelectorAll(".logo")) {
        logo.classList.add("logo-dark");
        logo.classList.remove("logo");
      }
      document.querySelector("h1").style.color = "dodgerblue";
      document.querySelector("#mail-button").id = "mail-button-dark";
      document.querySelector("nav").style.backgroundColor = "black";
      document.querySelector("footer").style.backgroundColor = "black";
      document.querySelector("footer").style.color = "rgba(128,128,128, 0.75)";


    } else {
      loadAnimation("json/Mail-light.json");
      document.querySelector("body").style.backgroundColor = "lightgray";
      document.querySelector("main").style.backgroundColor = "white";
      for (let li of document.querySelectorAll("li")) {
        li.classList.remove("darkmode");
      }
      document.querySelector("h1").style.color = "#AA0000";
      for (let li of document.querySelectorAll("section")) {
        li.style.color = "unset";
      }
      for (let li of document.querySelectorAll("h2")) {
        li.style.color = "unset";
      }
      for(let logo of document.querySelectorAll(".logo-dark")) {
        logo.classList.add("logo");
        logo.classList.remove("logo-dark");
      }
      document.querySelector("nav").style.backgroundColor = "gray";
      document.querySelector("footer").style.backgroundColor = "gray";
      document.querySelector("#mail-button-dark").id = "mail-button";
      document.querySelector("footer").style.color = "unset";
    }
  });

// const darkmode = () =>  {
//   document.querySelector("body").backgroundColor = "black";
//   document.querySelector("h1").color = "dogerblue";
//   document.querySelector("*").color = "lightgray";
// } rgba(128,128,128, 0.75)
