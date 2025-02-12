'use strict';

let headers = document.querySelectorAll("h1, h2");

headers.forEach(header => {
    let menuItem = document.createElement("a"); 
    menuItem.textContent = header.textContent; 
});


