export const createHeader = () => {
 
  const header = document.createElement('div');
  header.id = 'header';

  const ul = document.createElement('ul');
  ul.id = 'menu-ul';

  const menuList = ['home', 'about', 'photo', 'wedding','undefined'];
  for (let i = 0; i < menuList.length; i++) {
    const li = document.createElement('li');
    li.id = menuList[i];
    li.textContent = menuList[i].toUpperCase();
    ul.appendChild(li);

    li.addEventListener("mouseover", function (event) {
      li.style.fontSize = "20px";
      li.style.transition = "0.6s";
      li.style.color = "#F13582";

    li.addEventListener("mouseout", function (event) {
      li.style.fontSize = "16px";
      li.style.transition = "0.7s";
      li.style.color = "white";

      })
    })


  }

  header.appendChild(ul);

  return header;
};