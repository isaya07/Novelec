<template>
    <div id="map"></div>
</template>

<script>
export default {
    mounted() {
        let leafletScript = document.createElement('script')
        leafletScript.setAttribute('src', 'https://unpkg.com/leaflet@1.8.0/dist/leaflet.js')
        let leafletCss = document.createElement('link')
        leafletCss.setAttribute('rel', 'stylesheet')
        leafletCss.setAttribute('type', 'text/css')
        leafletCss.setAttribute('href', 'https://unpkg.com/leaflet@1.8.0/dist/leaflet.css')
        // leafletScript.setAttribute('integrity', 'sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ==')
        document.head.appendChild(leafletCss)
        leafletCss.onload = function () {
            document.head.appendChild(leafletScript)
            leafletScript.onload = function () {

                let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '© OpenStreetMap'
                })
                var marker = L.marker([45.14707, 3.95865]).bindPopup('Novelec')
                const map = L.map('map', {
                    center: [45.14707, 3.95865],
                    zoom: 10,
                    layers: [osm, marker]
                })
                var circle = L.circle([45.14707, 3.95865], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 20000
                })
                var overlayMaps = {
                    "Zone d'intervention": circle
                }
                var layerControl = L.control.layers(overlayMaps).addTo(map)

                // layerControl.addOverlay(circle, "Parks");
            }
        }
    }
}
</script>

<style scoped>
#map {
    width: 40vw;
    height: 40vh;
}
</style>
