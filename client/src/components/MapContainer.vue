<template>
  <div>
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
            ref="map"
             data-projection="EPSG:4326"
             @click="onMapClick">
      <vl-view :zoom.sync="zoom" :center.sync="center"></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
      <template v-if="routeList">
          <vl-feature v-for="(route, index) in routeList" :key="'route' + index" :properties="{name:'clickablePoints', routeName: routeList[index].name}">          
              <vl-geom-multi-point :coordinates="parsePoints(route)"></vl-geom-multi-point>
              <vl-style >            
                <vl-style-circle :radius="7">
                  <vl-style-fill color="white"></vl-style-fill>
                  <vl-style-stroke color="black"></vl-style-stroke>
                </vl-style-circle>
            </vl-style>
          </vl-feature>
          <vl-feature v-for="(route, index) in routeList" :key="'line' + index">
              <vl-geom-line-string :coordinates="parsePoints(route)"></vl-geom-line-string>
              <vl-style>
              <vl-style-fill color="white"></vl-style-fill>
                <vl-style-stroke
                  v-if="index == currentRouteIndex"
                  color="red"
                  :width="3"
                  :line-dash="[3, 5, 30, 5]">
                </vl-style-stroke>
                <vl-style-stroke
                  v-if="index != currentRouteIndex"
                  color="black"
                  :width="3"
                  :line-dash="[3, 5, 30, 5]">
                </vl-style-stroke>
            </vl-style>
          </vl-feature>
      </template>
        <vl-overlay v-if="showOverlay" id="overlay" :position="overlayPosition">
          <template slot-scope="scope">
            <div class="overlay-content" style="color:black; background-color: white; border: 1px solid black;">
              Участок маршрута: <br>{{overlayRouteName}}<br>
              X: {{ scope.position[1] }}; Y: {{ scope.position[0] }}
            </div>
          </template>
      </vl-overlay>
    </vl-map>
  </div>
</template>

<script>
  export default {
    data () {
      return { 
        zoom: 10,
        center: [86.45, 50.08],
        rotation: 0,
        currentRouteIndex: null,
        routeList: null,
        showOverlay: false,
        overlayRouteName: "",
        overlayPosition: [86.45, 50.08],
        geolocPosition: undefined,
      }
    },
    created(){
      //console.log("asdas");
    },
    methods: {
      initRoutes(routes){
        this.routeList = routes;
      },
      changeCords(index){
        this.currentRouteIndex = index;
        var point = this.routeList[index].points[0];
        //console.log(this.routeList[index].points[0]);
        var parsePoint = [point.coordinateY * 1 ,point.coordinateX  *1];
        console.log(parsePoint);
        this.center = parsePoint;
      },
      parsePoints(route){
        return route.points.map(el => [el.coordinateY * 1, el.coordinateX * 1]);
      },
      parsePoint(point){
        return [point.coordinateY * 1, point.coordinateX * 1]
      },
      onMapClick (evt) {
        this.$refs.map.getFeaturesAtPixel(evt.pixel).then(data =>{
          if(data && data.length && data.length > 0){
            data.forEach(element => {
              if(element.get('name') == 'clickablePoints'){
                this.showOverlay = true;
                this.overlayPosition = evt.coordinate;
                this.overlayRouteName = element.get('routeName');
              }
            });
            //console.log(data);
          }
          else{
            this.showOverlay = false;
          }
        });
        //console.log(this.$refs.map.getFeaturesAtPixel(evt.pixel));
      }
    }
  }
</script>