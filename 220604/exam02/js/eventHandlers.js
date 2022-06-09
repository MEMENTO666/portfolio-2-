export const registerEventHandlers = () => {
  
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const photo = document.getElementById("photo");
  const sideBtn = document.getElementById("sideBtn");
  const intro = document.getElementById("intro");
  const HS = document.getElementById("HS");
  const frogImg = document.getElementById("frogImg");
  const wed1 = document.getElementById("wed1");
  const wed2 = document.getElementById("wed2");
  const wedding = document.getElementById("wedding");
  const undefined = document.getElementById("undefined");
  const text3Box = document.getElementById("text3Box");

  home.addEventListener("click", function () {
    scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  about.addEventListener("click", function () {
    scrollTo({
      top: "900",
      behavior: "smooth"
    });
  });

  photo.addEventListener("click", function () {
    scrollTo({
      top: "1800",
      behavior: "smooth"
    });
  });

  wedding.addEventListener("click", function () {
    scrollTo({
      top: "2600",
      behavior: "smooth"
    });
  });
  undefined.addEventListener("click", function () {
    scrollTo({
      top: "3500",
      behavior: "smooth"
    });
  });


  intro.addEventListener("mouseover", function (event) {
    console.log(intro);
    intro.style.fontSize = "7.4vw";
    intro.style.transition = "1s";

    intro.addEventListener("mouseout", function (event) {
      intro.style.fontSize = "7vw";
      intro.style.transition = "0.8s";
    });
  });

  HS.addEventListener("mouseover", function (event) {
    HS.style.width = "350px";
    HS.style.height = "350px";
    HS.style.transition = "0.7s";

    HS.addEventListener("mouseout", function (event) {
      HS.style.width = "320px";
      HS.style.height = "320px";
      HS.style.transition = "0.5s";
    });
  });

  frogImg.addEventListener("mouseover", function (event) {
    frogImg.style.width = "380px";
    frogImg.style.height = "380px";
    frogImg.style.transition = "0.7s";

    frogImg.addEventListener("mouseout", function (event) {
      frogImg.style.width = "350px";
      frogImg.style.height = "350px";
      frogImg.style.transition = "0.5s";
    });
  });

  wed1.addEventListener("mouseover", function (event) {
    wed1.style.width = "450px";
    wed1.style.height = "650px";
    wed1.style.transition = "0.5s";

    wed1.addEventListener("mouseout", function (event) {
      wed1.style.width = "400px";
      wed1.style.height = "600px";
      wed1.style.transition = "0.5s";

    });
  });

  wed2.addEventListener("mouseover", function (event) {
    wed2.style.width = "450px";
    wed2.style.height = "650px";
    wed2.style.transition = "0.7s";

    wed2.addEventListener("mouseout", function (event) {
      wed2.style.width = "400px";
      wed2.style.height = "600px";
      wed2.style.transition = "0.5s";
    });
  });


};