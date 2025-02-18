'use strict';

window.addEventListener('load', function() {
    document.getElementById('loadingMessage').textContent = 'Welkom!';
    
});


setTimeout(() => {
    document.getElementById('loadingMessage').style.display = 'none';
}, 2000);