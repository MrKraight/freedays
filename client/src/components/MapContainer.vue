<template>
  <div ref="map-root"
       style="width: 100%; height: 100%">
  </div>
</template>

<script>
  import View from 'ol/View'
  import Map from 'ol/Map'
  import TileLayer from 'ol/layer/Tile'
  import OSM from 'ol/source/OSM'
  import GeoJSON from 'ol/format/GeoJSON'
  import VectorLayer from 'ol/layer/Vector'
  import VectorSource from 'ol/source/Vector'

  import 'ol/ol.css'

    const data = {
    type: 'Feature',
    properties: {},
    map : {},
    geometry: {
      type: 'MultiLineString',
      coordinates: [
        [
          [
            -27.0703125,
            43.58039085560784
          ],
          [
            -28.125,
            23.563987128451217
          ],
          [
            -10.8984375,
            32.84267363195431
          ],
          [
            -27.0703125,
            43.58039085560784
          ]
        ]
      ]
    }
  };

  export default {
    name: 'MapContainer',
    components: {},
    props: ['cords'],
    created() {
      //console.log(this.cords)
        data.geometry.coordinates = [this.cords];
    },
    mounted() {
        const feature = new GeoJSON().readFeature(data, {
        featureProjection: 'EPSG:3857'
      });

      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [feature],
        }),})

      this.map = new Map({
        target: this.$refs['map-root'],
        layers: [
          new TileLayer({
            source: new OSM()
          }),
          vectorLayer
        ],

        view: new View({
          zoom: 0,
          center: [0, 0],
          constrainResolution: true
        }),
      })
    },
    methods: {
      changeCords(coords) {
        this.parsed_points = coords;
      }
    }
  }
</script>