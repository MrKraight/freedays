<template>
  <div class="text-light">
    <div v-if="page=='page1'">
          <div class="form-group row">
          <label class="ml-3 h4">Название отчета</label>
          <textarea class="form-control ml-3 mr-3" rows="2">Отчет о прохождении горного спортивного туристского маршрута некатегорированной сложности (с элементами третьей категории) в районе Катунского хребта</textarea>
        </div>
        <div class="form-group row">
            <label class="ml-3 h4">Информация о группе и проводящей организации</label>
            <textarea class="form-control ml-3 mr-3" rows="3">Творческая группа "Рассвет" (туристы Самары и Ульяновска)
Руководитель группы: Медовников А. Ю. Адрес: 443001, г. Самара,
ул. Ново-Вокзальная, д. № 199, кв. № 5,
Телефон: 8-927-657-26-93.</textarea>
        </div>
                <div class="form-group row">
            <label class="ml-3 h4">Сведения о МКК рассмотревшей отчет</label>
            <textarea class="form-control ml-3 mr-3" rows="1">Маршрутно-квалификационная комиссия Самарской областной федерации спортивного туризма рассмотрела отчёт и считает, что маршрут соответствует категории сложности и может быть зачтён
участникам и руководителю.</textarea>
        </div>
        <div class="form-group row">
          <label class="ml-3 h4">Состав группы</label>
            <table  class="table table-dark">
            <tr>
              <td style="font-weight:bold;">ФИО</td><td style="font-weight:bold;">Учебное заведение</td><td style="font-weight:bold;">Cтатус</td>
            </tr>
            <tr>
                <td ><input type="text" class="form-control" value="Иванов Иван Иванович"></td><td><input type="text" class="form-control" value="ТюмГУ"></td><td><input type="text" class="form-control" value="студент"></td>
            </tr>
            <tr>
                <td ><input type="text" class="form-control" value="Васильев Петр Петрович"></td><td><input type="text" class="form-control" value="ТИУ"></td><td><input type="text" class="form-control" value="студент"></td>
            </tr>
            <tr>
                <td ><input type="text" class="form-control" value="Петров Петр Васильев"></td><td><input type="text" class="form-control" value="ТюмГУ"></td><td><input type="text" class="form-control" value="студент"></td>
            </tr>
            <tr>
                <td ><input type="button" value="Добавить участника" class=" btn btn-primary"></td><td></td><td><input type="button" value="Удалить участника" class="btn btn-danger"></td>
            </tr>
          </table>
          </div>
    </div>
    <div v-if="page=='page3'">
        <div class="form-group row mt-2">
            <label class="ml-3 h4">Сведения о районе похода</label><div class="hint__circle" title="Tooltip on top">?</div>
            <textarea class="form-control ml-3 mr-3" rows="3">В районе Катунского хребта возможно проведение горных походов 1-6 категории сложности. Подробные характеристики уже неоднократно описаны в других отчетах. Хотелось бы обратить внимание на следующие аспекты:
В районе между Кучерлой и Мультой многие перевалы 1А-2А категории трудности, с подвижной осыпью по крайней мере с одной из сторон.
Катунский заповедник закрыт для проведения походов за некоторыми исключениями.
В текущем году оформление пропусков в приграничный район требуется только если планируется нахождение в 5-километровой зоне.</textarea>
        </div>
                <div class="form-group row">
            <label class="ml-3 h4">Общая идея маршрута</label><div class="hint__circle" title="Tooltip on top">?</div>
            <textarea class="form-control ml-3 mr-3" rows="3">Цели и задачи похода:
Осмотр красивых мест в горах Алтая.
Прохождение спортивного туристского маршрута 3 категории сложности.
Повышение технической подготовленности участников в ходе подготовки и прохождения маршрута, а также привлечение новых участников в спортивный туризм.
Повышение навыков командира, как руководителя спортивных групп.
Активный отдых участников в целях рекреации, а также развития морально-волевых и духовных качеств.</textarea>
        </div>
        <div class="form-group row">
          <table  class="table table-dark">
            <tr><td class="p-1" style="font-weight:bold;">День</td><td class="p-1" style="font-weight:bold;">Пройденные участки</td><td class="p-1" style="font-weight:bold;">Описание</td></tr>
            <tr>
              <td class="p-1">
                1
              </td>
              <td class="p-1">
              <select multiple class="form-select form-control form-select-sm" aria-label=".form-select-sm example">
                <option value="1" selected>Три березы (парковка) - ручей</option>
                <option value="2" selected>ручей - ночевка</option>
                <option value="3">ночевка - обед</option>
                <option value="4">обед - ночевка2</option>
                <option value="5">ночевка2 - База ЛенАльпТурс</option>
                <option value="6">База ЛенАльпТурс - Начало тропы</option>
                <option value="7">Перевал Ярлу-Боч - Ручей</option>
                <option value="8">Ручей - Перемычка при подъеме на перевал Кара-Айры Южный</option>
                <option value="9">Перевал Кара-Айры Южный - Перевал ОКА</option>
                <option value="10">Перевал ОКА - ручей3</option>
                <option value="11">ручей3 - Перевал Титова</option>
              </select>
              </td>
              <td class="p-1">
                <textarea type="text" class="form-control" rows="3">Первый день пути</textarea>
              </td>
            </tr>
            <tr>
              <td class="p-1">
                2
              </td>
              <td class="p-1">
              <select multiple class="form-select form-control form-select-sm" aria-label=".form-select-sm example">
                <option value="1">Три березы (парковка) - ручей</option>
                <option value="2">ручей - ночевка</option>
                <option value="3" selected>ночевка - обед</option>
                <option value="4" selected>обед - ночевка2</option>
                <option value="5">ночевка2 - База ЛенАльпТурс</option>
                <option value="6">Вода (озерцо) на подъеме на перевал Ярлу-Боч - Перевал Ярлу-Боч</option>
                <option value="7">Перевал Ярлу-Боч - Ручей</option>
                <option value="8">Ручей - Перемычка при подъеме на перевал Кара-Айры Южный</option>
                <option value="9">Перевал Кара-Айры Южный - Перевал ОКА</option>
                <option value="10">Перевал ОКА - ручей3</option>
                <option value="11">ручей3 - Перевал Титова</option>
              </select>
              </td>
              <td class="p-1">
                <textarea type="text" class="form-control" rows="3">Второй день пути</textarea>
              </td>
            </tr>
            <tr>
              <td class="p-1">
                3
              </td>
              <td class="p-1">
              <select multiple class="form-select form-control form-select-sm" aria-label=".form-select-sm example">
                <option value="1">Три березы (парковка) - ручей</option>
                <option value="2">ручей - ночевка</option>
                <option value="3">ночевка - обед</option>
                <option value="4">обед - ночевка2</option>
                <option value="5" selected>ночевка2 - База ЛенАльпТурс</option>
                <option value="6" selected>Вода (озерцо) на подъеме на перевал Ярлу-Боч - Перевал Ярлу-Боч</option>
                <option value="7">Перевал Ярлу-Боч - Ручей</option>
                <option value="8">Ручей - Перемычка при подъеме на перевал Кара-Айры Южный</option>
                <option value="9">Перевал Кара-Айры Южный - Перевал ОКА</option>
                <option value="10">Перевал ОКА - ручей3</option>
                <option value="11">ручей3 - Перевал Титова</option>
              </select>
              </td>
              <td class="p-1">
                <textarea type="text" class="form-control" rows="3">Третий день пути</textarea>
              </td>
            </tr>
          </table>
          <table class="ml-2">
            <tr>
                <td ><input type="button" value="Добавить день пути" class=" btn btn-primary"></td><td></td><td><input type="button" value="Удалить день пути" class="btn btn-danger"></td>
            </tr>
          </table>
        </div>
    </div>
    <div v-if="page=='page2'" class="col-md-10 float-right nopadding text-light" style="border-right: 2px solid #2c3237;">
        <div>
          <YaMapComponentVue ref="childComponent" @hook:mounted="mapInitialized"></YaMapComponentVue>
        </div>
        <div class="row">
          <div class="container col ml-4">
            <p class="error" v-if="error">{{ error }} </p>
              <h2 class="text">Этапы</h2>
              <label class="row mt-2" v-for="(item, index) in routes" :key="item.id">
                  <input :checked="index == 0" type="radio" class="form-check-input ml-0" name="rd" v-on:click="change_route(index);" v-bind:id="'rd_' + index">
                  <input type="text" class="ml-3 form-control" :value="item.name">
              </label>
              <div style="display: flex; justify-content: space-between;">
              <input type="button" value="Добавить этап" class=" btn btn-primary ">
              <input type="button" value="Удалить этап" class="btn btn-danger">
              </div>
          </div>
          <!-- <div class="cell cell-edit">
            <table id="points_table" style="width:100%; margin-top:10px;" class="routes-container">
              <tr>
                <td style="font-weight:bold;">Адрес</td><td style="font-weight:bold;">coordinateX</td><td style="font-weight:bold;">coordinateY</td>
              </tr>
              <tr>
                  <td ><input type="text" class="form-control add_text"></td><td><input type="text" class="add_text"></td><td><input type="text" class="add_text"></td>
              </tr>
              <tr>
                  <td ><input type="text" class="form-control add_text"></td><td><input type="text" class="add_text"></td><td><input type="text" class="add_text"></td>
              </tr>
              <tr>
                  <td ><input type="text" class="form-control add_text"></td><td><input type="text" class="add_text"></td><td><input type="text" class="add_text"></td>
              </tr>
              <tr>
                  <td ><input type="button" value="Добавить точку" id="add_point" class=" btn btn-primary add_text"></td><td><input type="button" id="delete_point" value="Удалить точку" class="add_text"></td><td><input type="button" id="add_route" v-on:click="createPost()" value="Добавить маршрут" class="add_text"></td>
              </tr>
            </table>
          </div> -->
          <div class="col">
            <h2 class="text">Точки</h2>
            <div style="overflow-y:scroll; max-height:270px;">
              <table style="width:100%;" class="table table-dark routes-container">
                <tr>
                  <td style="width:300px; font-weight:bold;" class="p-1">Адрес</td><td class="p-1" style="font-weight:bold;">coordinateX</td><td class="p-1" style="font-weight:bold;">coordinateY</td>
                </tr>
                <tr v-for="(item) in points" :key="item.address">
                    <td class="p-1" style="width:300px;"><input type="text" class="form-control" :value="item.address"></td><td class="p-1"><input type="text" class="form-control" :value="item.coordinateX"></td><td class="p-1"><input type="text" class="form-control" :value="item.coordinateY"></td>
                </tr>
              </table>
            </div>
              <div class="ml-4 mt-2 mr-4" style="display: flex; justify-content: space-between;">
                <input type="button" value="Добавить точку" class=" btn btn-primary ">
                <input type="button" value="Удалить точку" class="btn btn-danger">
              </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import RouteService from '../RouteService';
import YaMapComponentVue from './YaMapComponent.vue';
//import MapContainer from './MapContainer.vue'

  export default {
    name: 'RouteComponent',
    props: ['page'],
    components: {
     // MapContainer
    YaMapComponentVue
    },
    data() {
      return {
        routes: [],
        error: '',
        text: '',
        points: [],
        default_route_id: '1',
        parsed_points: [[11.222,22.222],[77.777,77.777]]
      }
    },
     created() {
      try {
        RouteService.getRoutes().then((x) => {
          this.routes = x.data;
          if(this.routes[0]!=null) 
            this.points=this.routes[0].points;
           //this.parsed_points = this.points.map(function(el) { return [el.coordinateX,el.coordinateY] });
           
        });       
      }catch(err){
        this.error = err.message;
      }
    },
    methods: {
      change_route: function (index) {
        if(index <= this.routes.length - 1)
        {
          this.points = this.routes[index].points;
          //var route_name = this.routes[index].name
          this.parsed_points = this.points.map(function(el) { return [el.coordinateX * 1,el.coordinateY * 1,el.address]})
          this.$refs.childComponent.changeRoute(this.routes[index].name);
          this.$refs.childComponent.changeCords(this.parsed_points);
        }
      },
      mapInitialized: function() {
        if(this.routes[0]!=null) 
          this.change_route(0);
      },
      createPost: function() {
        var table = document.getElementById("points_table");
        var address = document.getElementById("route_name").value;
        var points = [];
        for(var i=1; i< table.rows.length-1; i++)
          points.push({address: table.rows[i].cells[0].children[0].value, coordinateX: table.rows[i].cells[1].children[0].value, coordinateY: table.rows[i].cells[2].children[0].value})
        RouteService.insertRoute(address, points)
        RouteService.getRoutes().then((x) => {
          this.routes = x.data;
          if(this.routes[0]!=null) this.points=this.routes[0].points;
           this.change_route(0);
        });        
      }
    },
    mounted(){
      document.addEventListener('DOMContentLoaded', function(){
          //var radiobtn = document.getElementById("rd_0");
          //if(radiobtn != null)
            //radiobtn.checked = true;
       });
       document.getElementById("add_point")?.addEventListener('click', function(){
          var table = document.getElementById("points_table");
          var row=table.insertRow(table.rows.length-1);
          for(var i =0; i<3;i++){
            var cell = row.insertCell();
            cell.innerHTML = "<input type='text' class='add_text'>"
          }
       });

       document.getElementById("delete_point")?.addEventListener('click', function(){
          var table = document.getElementById("points_table");
          if(table.rows.length>5)
            table.deleteRow(table.rows.length-2);
       });
      
    }
  }
</script>

<style scoped>
</style>