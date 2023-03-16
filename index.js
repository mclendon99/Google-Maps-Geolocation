// Copyright 2023 John McLendon
var pos = null;
var x = document.getElementById("body");

function showPosition(p) {
  pos = p;
  console.log("Position:" + pos.coords.latitude + ',' + pos.coords.longitude);
  
  const contentStr = 'https://www.google.com/maps/@' + pos.coords.latitude + ',' + pos.coords.longitude + ',z16?hl=en-US';
  console.log("contentStr:", contentStr);
  let x = window.open(contentStr,"_self" );
}

function errorPosition(e) {
  console.log("Position error:" + e);
  x.innerHTML = "Geolocation is not supported by this browser.";
}

async function getPosition() {
  if (navigator.geolocation) {
      const w = await navigator.geolocation.getCurrentPosition(showPosition, errorPosition, { enableHighAccuracy: true });
  } else {
      console.log("Geolocation is not supported by this browser.");
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', { scope: '/' });
}

getPosition();

