
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
  const photo1 = document.getElementById("photo1");
  const photo2 = document.getElementById("photo2");
  const photo3 = document.getElementById("photo3");
  const photo4 = document.getElementById("photo4");

  home.addEventListener("click", function () {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
  });

  about.addEventListener("click", function () {
    const text2 = document.getElementById('text2');
    //text2.focus();
    text2.scrollIntoView({
      behavior: 'smooth'
    });
    const photo1 = document.getElementById('photo1');
  });

  photo.addEventListener("click", function () {
    const text3 = document.getElementById('text3');
    text3.scrollIntoView({
      behavior: 'smooth'
    });
    console.log(photo1.getBoundingClientRect());
    setTimeout(() => {
      photo1.style.width = "350px";
      photo1.style.height = "350px";
      photo1.style.transition = "0.7s";
    }, 1000);

    setTimeout(() => {
      photo2.style.width = "350px";
      photo2.style.height = "350px";
      photo2.style.transition = "0.7s";
    }, 1500);

    setTimeout(() => {
      photo1.style.width = "300px";
      photo1.style.height = "300px";
      photo1.style.transition = "0.7s";
    }, 2000);

    setTimeout(() => {
      photo2.style.width = "300px";
      photo2.style.height = "300px";
      photo2.style.transition = "0.7s";
    }, 2500);

    setTimeout(() => {
      photo3.style.width = "350px";
      photo3.style.height = "350px";
      photo3.style.transition = "0.7s";
    }, 3000);

    setTimeout(() => {
      photo4.style.width = "350px";
      photo4.style.height = "350px";
      photo4.style.transition = "0.7s";
    }, 3500);

    setTimeout(() => {
      photo3.style.width = "300px";
      photo3.style.height = "300px";
      photo3.style.transition = "0.7s";
    }, 4000);

    setTimeout(() => {
      photo4.style.width = "300px";
      photo4.style.height = "300px";
      photo4.style.transition = "0.7s";
    }, 4500);
  });
      //! 너무 긴디?


  wedding.addEventListener("click", function () {
    const text4Box = document.getElementById("text4Box");
    text4Box.scrollIntoView({
      behavior: "smooth"
    });
  });
  undefined.addEventListener("click", function () {
    const text5 = document.getElementById("text5");
    text5.scrollIntoView({
      behavior: "smooth"
      
    });
    console.log("##########ddddf")
    console.log(photo1.getBoundingClientRect());

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