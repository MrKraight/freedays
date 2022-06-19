<template>
  <div class="hello">
    <yandex-map 
    :settings="{
        apiKey: 'bc66e9c1-29d5-4f56-8cb5-16d1a40b52c5',
    }"
    :coords="coordinates"
    :zoom="10" 
    map-type="hybrid"
    style="width: 100%; max-width: 100%; display:block; height: 42vh;"
    @click="onClick">
    <ymap-marker v-for="(item, index) in markers_coordinates" :key="index"
      :coords="item" 
      marker-id="123" 
      :balloon="{header: route_name, body: item}"
    ></ymap-marker>
  </yandex-map>
  </div>
</template>

<script>
/* eslint-disable */
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
    name: "HelloWorld",
    components: { yandexMap, ymapMarker },
    //props: ['cords'],
    created() {
        //this.markers_coordinates = [];
    },
    data() {
        return {
        coordinates: [
        50.085818,86.456439
        ],
        markers_coordinates: [],
        route_name: "noRoute",
        };
    },
    computed: {
        hintTemplate(elem) {
        return `
            <h1 class="red">Маршрут: </h1>
            <p>Координаты: ${elem.coords}</p>
            ${this.header}
        `
        }
    },
    methods: {
        onClick(e) {
        //this.coordinates = e.get('coords');
        },
        changeCords(new_cords) {
            console.log(new_cords);
            this.markers_coordinates = new_cords;
        },
        changeRoute(route_name) {
            this.route_name = "Этап маршрута: " + route_name;
        }
    }
};
</script>

