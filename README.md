### Windows Map Embed with your location pinned
Copyright 2023 John McLendon

This is a collection of front-end javascript, css and html to display your current location.
The display is a Google Map. No google key is required. Tested on Windows 10 (Edge) but should run on Windows 11.
The app prompts for permission to access location as it request a high accuracy location.

The files are organized as follows:

1. index.html, index.js, index.css (Geolocation page)
Collect the necessary geolocation information using the navigator.geolocation.getCurrentPosition API.
No cookies or local storage is used - ever.

The user MUST enable Settings -> Privacy -> Location -> Allow desktop apps to access your location
or the position shown will be very wrong.


TODO 
- Get the PITA CSP policy stuff running.
- Add in an automatic refresh/update slider type timer. For now, refresh to update the map.
- Package as a windows store app (manifest file).
