'use strict';

let posts = [];

async function laadPosts() {
    const container = document.getElementById('posts-container');
    container.innerHTML = '<div class="laad-indicator">Posts laden...</div>';

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        posts = await res.json();
        toonPosts();
    } catch (err) {
        container.innerHTML = '<div class="error">Kan posts niet laden.</div>';
    }
}

function toonPosts() {
    const zoekterm = document.getElementById('zoekterm').value.toLowerCase();
    const sorteer = document.getElementById('sorteer').value;
    const limiet = parseInt(document.getElementById('limiet').value);
    const container = document.getElementById('posts-container');

    let gefilterd = posts.filter(post => post.title.toLowerCase().includes(zoekterm));

    switch (sorteer) {
        case 'titel-oplopend': gefilterd.sort((a, b) => a.title.localeCompare(b.title)); break;
        case 'titel-aflopend': gefilterd.sort((a, b) => b.title.localeCompare(a.title)); break;
        case 'id-oplopend': gefilterd.sort((a, b) => a.id - b.id); break;
        case 'id-aflopend': gefilterd.sort((a, b) => b.id - a.id); break;
    }

    gefilterd = gefilterd.slice(0, limiet);

    if (gefilterd.length === 0) {
        container.innerHTML = '<div class="geen-resultaten">Geen posts gevonden</div>';
        return;
    }

    container.innerHTML = "";
    gefilterd.forEach(post => {
        const div = document.createElement('div');
        div.className = "post";
        div.innerHTML = `
            <div class="post-titel">${post.title.toUpperCase()}</div>
            <div class="post-body">${post.body.slice(0, 100)}${post.body.length > 100 ? '...' : ''}</div>
            <div class="post-info"><span>ID: ${post.id}</span><span>User: ${post.userId}</span></div>
        `;
        container.appendChild(div);
    });
}

document.getElementById('toepassen').addEventListener('click', toonPosts);

laadPosts();