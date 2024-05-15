'use strict';
// DOM
//Menu
const menuList = document.querySelector('ul#main-menu');
const title = document.querySelector('title');
//Link
const linkList = document.querySelector('ul#link-menu');
const menuItem = [
  {
    name: 'Menu',
    link: './index.html',
  },
  {
    name: '01. Scrollbar',
    link: './scrollbar.html',
  },
  {
    name: '02. Rozgałęzienia i cykle',
    link: '../html/02-rozgalezieniaCykle.html',
  },
  {
    name: '03. Tablice',
    link: '../html/03-tablice.html',
  },
  {
    name: '04. Funkcje',
    link: '../html/04-funkcje.html',
  },
];
const linkItem = [
  {
    name: 'Menu',
    link: '../index.html',
  },
  {
    name: '01. Zmienne i typy',
    link: '../html/01-zajeciaWprowadzajace.html',
  },
];
drawMenu();
drawLink();
function drawMenu() {
  menuItem.forEach(element => {
    const listItem = document.createElement('li');
    const linkItem = document.createElement('a');

    linkItem.href = element.link;
    linkItem.textContent = element.name;
    // linkItem.classList.add('link');
    if (title.textContent === element.name.slice(4)) {
      linkItem.classList.add('current-page');
      const footerTitle = document.querySelector('div#footer-title');
      if (footerTitle) {
        footerTitle.textContent = element.name;
      }
    }

    listItem.appendChild(linkItem);
    if (menuList) {
      menuList.appendChild(listItem);
    }
  });
}

function drawLink() {
  linkItem.forEach(element => {
    const listItem = document.createElement('li');
    const linkItem = document.createElement('a');

    linkItem.href = element.link;
    linkItem.textContent = element.name;

    listItem.appendChild(linkItem);
    if (linkList) {
      linkList.appendChild(listItem);
    }
  });
}
