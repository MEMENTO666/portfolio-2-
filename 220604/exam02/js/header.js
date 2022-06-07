export const createHeader = () => {
  const header = document.createElement('div');
  header.id = 'header';
  
  const ul = document.createElement('ul');
  ul.id = 'menu-ul';
  
  const menuList = ['home', 'about', 'photo', 'wedding'];
  for(let i=0; i<menuList.length; i++) {
    const li = document.createElement('li');
    li.id = menuList[i];
    li.textContent = menuList[i].toUpperCase();
    ul.appendChild(li);
  }

  header.appendChild(ul);

  return header;  
};
