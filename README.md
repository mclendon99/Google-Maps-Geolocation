### Google Maps embed with your location pinned for PCs
Copyright 2023 John McLendon

This is a collection of front-end javascript, css, and html to display your current location in Google Maps.
Not a big deal on a phone but it apparently is somewhat of a big deal on a windows PC as the particular invocation
of maps.
If you connect a GPS to your PC, it will show a very accurate location when the GPS is properly configured.
The display is a no marker or directions map view. No google key is required. Tested on Windows 10 (Edge) 
but should run on Windows 11 or really anything. The app prompts for permission to access location as it 
requests a high accuracy location.

The files are organized as follows:

1. index.html, index.js, index.css (Geolocation page)
The index.html file contains a lot of CSP to allow access to the Google site.
The index.js file collects the necessary geolocation information using the navigator.geolocation.getCurrentPosition API
which rides on top of Windows Location service using the Sensors API. The javascript and css are 
separated out to conform to CSP standards.

See:
- https://support.microsoft.com/en-us/windows/windows-location-service-and-privacy-3a8eee0a-5b0b-dc07-eede-2a5ca1c49088
- https://learn.microsoft.com/en-us/windows/win32/sensorsapi/introduction-to-the-sensor-and-location-platform-in-windows
- https://learn.microsoft.com/en-us/samples/microsoft/windows-universal-samples/geolocation/

No cookies or local storage is used - ever. There's no trackers either.

The user MUST enable Settings -> Privacy -> Location -> Allow desktop apps to access your location
or the position shown will be considerably wrong.

TODO 
- Package as a windows store app (manifest file).
- Test in Chrome and FireFox.
