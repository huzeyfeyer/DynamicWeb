'use strict';

const formateerTweet = tekst => 
    tekst.lenght > 20 ? tekst.substring(0, 20) + '...' : tekst;

const formateerPost = tekst => `${tekst}#awesome`;

const formateerBericht = tekst => formateerTweet(formateerPost(tekst));

function formatText() {
    const text= document.getElementById('inputText').value;

    document.getElementById('tweetOutput').textContent = 
        formateerTweet(text);
    document.getElementById('postOutput').textContent = 
        formateerPost(text);
    document.getElementById('comboOutput').textContent = 
        formateerBericht(text);
}