let animation = lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "json/Mail-light.json",
});

document
  .querySelector('#darkmode-toggle')
  .addEventListener("change", function () {
    if (this.checked) {
      document.querySelector("body").style.backgroundColor = "gray";
      document.querySelector("main").style.backgroundColor = "#00003f";
      document.querySelector("li").style.color = "dodgerblue";
      document.querySelector("h1").style.color = "dodgerblue";
      document.querySelector("*").style.color = "rgba(128,128,128, 0.7)";

    } else {
      document.querySelector("body").style.backgroundColor = "lightgray";
      document.querySelector("main").style.backgroundColor = "white";
      document.querySelector("h1").style.color = "#AA0000";
      document.querySelector("*").style.color = "unset";
    }
  });

  // const darkmode = () =>  {
  //   document.querySelector("body").backgroundColor = "black";
  //   document.querySelector("h1").color = "dogerblue";
  //   document.querySelector("*").color = "lightgray";
  // }