// Copyright 2023 John McLendon
var pos = null;
var x = document.getElementById("body");

function showPosition(p)
{
    pos = p;
    console.log("Position:" + pos.coords.latitude + ',' + pos.coords.longitude);


    const contentStr = '<div class="mapouter"><div class="gmap_canvas"> ' +
      '<iframe class="gmap_iframe" referrerpolicy="no-referrer-when-downgrade" sandbox="allow-same-origin allow-presentation allow-scripts allow-popups allow-popups-to-escape-sandbox" ' +
      'src="https://maps.google.com/maps?api=1&hl=en&q=' + pos.coords.latitude + ',' + pos.coords.longitude +
      '&saddr=' + pos.coords.latitude + ',' + pos.coords.longitude +
      '&ie=UTF8&output=embed"></iframe></div></div>';
    console.log("contentStr:", contentStr);
    x.innerHTML = contentStr;
}

function errorPosition(e) 
{
    console.log("Position error:" + e);
    x.innerHTML = "Geolocation is not supported by this browser.";
}

async function getPosition()
{
    if (navigator.geolocation) {
        const w = await navigator.geolocation.getCurrentPosition(showPosition, errorPosition , { enableHighAccuracy: true });
    } else {
        console.log("Geolocation is not supported by this browser.");
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' });
}

getPosition();
