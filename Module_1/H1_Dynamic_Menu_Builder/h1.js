'use strict';
 
const nav = document.getElementById('mainMenu');
const headings = {
    h1: document.getElementsByTagName('h1'),
    h2: document.getElementsByTagName('h2'),
};
 
// hoofdmenu maken
 
const ul = document.createElement('ul');
nav.appendChild(ul);
 
// bijhouden welke h1 we laatst hebben gezien
let currenH1Item;
 
//door alle h1 en h2's gaan in volgorde
document.querySelectorAll('h1, h2').forEach(heading => {
    if (heading.tagName === 'H1') {
        //hoofdstuk toevoegen
        const li = document.createElement('li');
        const a = document.createElement('a');
 
        //ID maken als die er nog niet is
        if (!heading.id) {
            heading.id = heading.textContent.toLowerCase().replace(/ /g, '-');
        }
 
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        li.appendChild(a);
 
        //Submenu container maken
        const subUl = document.createElement('ul');
        li.appendChild(subUl);
 
        ul.appendChild(li);
        currenH1Item = li;
    } else if (heading.tagName === 'H2' && currenH1Item) {
        //Submenu item toevoegen
        const subUl = currenH1Item.querySelector('ul');
        const li = document.createElement('li');
        const a = document.createElement('a');
 
        if (!heading.id) {
            heading.id = heading.textContent.toLowerCase().replace(/ /g, '-');
        }
 
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        li.appendChild(a);
        subUl.appendChild(li);
    }
});