<template>
  <div id="app" class="bg-dark h-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-center" style="border-bottom: 2px solid #2c3237">
      <div class="container-fluid col-md-8 col-sm-12">
        <a class="navbar-brand" href="#"><strong style="color:#77d115">Free</strong><strong class="text-light">Days</strong></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#">Просмотр отчётов</a>
            <a class="nav-link active" aria-current="page" href="#">Добавить отчёт</a>
          </div>
        </div>
        <form class="form-inline float-left">
          <input class="form-control mr-sm-2" type="search" placeholder="Поиск отчетов" aria-label="Search">
          <button class="btn btn-success my-2 my-sm-0" type="submit">Найти</button>
        </form>
      </div>
    </nav>
    <div class="container-fluid col-md-8 col-sm-12 h-100 bg-dark">
      <nav class="navbar bg-dark col-md-2 h-100 float-left align-items-top" style="border-left: 2px solid #2c3237; border-right: 2px solid #2c3237;">
        <section class="accordion col">
          <input type="radio" checked v-on:change="swapComponent" value="route" class="collapse2" name="collapse2" id="handle3">
            <label for="handle3" class="btn btn-secondary btn-sm">Справочные сведения</label>
          <div class="accordion1 content">
            <input type="radio" v-on:change="swapPage" value="page1" checked class="collapse3" name="collapse3" id="child-handle1">
            <label for="child-handle1" class="btn-dark btn-sm">
              Информация о группе и проводящей организации
            </label>
            <input type="radio" v-on:change="swapPage" value="page2" class="collapse3" name="collapse3" id="child-handle2">
            <label for="child-handle2" class="btn-dark btn-sm">
              Нитка маршрута
            </label>
            <input type="radio" v-on:change="swapPage" value="page3" class="collapse3" name="collapse3" id="child-handle3">
            <label for="child-handle3" class="btn-dark btn-sm">
              План-график маршрута
            </label>
          </div>
        </section>
        <section class="accordion col">
          <input type="radio" v-on:change="swapComponent" value="diary" class="collapse2" name="collapse2" id="handle4">
            <label for="handle4" class="btn btn-secondary btn-sm">Дневник похода</label>
          <div class="accordion1 content">
            <input type="radio" v-on:change="swapPage" value="page1" class="collapse3" name="collapse3" id="child-handle4">
            <label for="child-handle4" class="btn-dark btn-sm">
              Изменения маршрута
            </label>
            <input type="radio" v-on:change="swapPage" value="page2" class="collapse3" name="collapse3" id="child-handle5">
            <label for="child-handle5" class="btn-dark btn-sm">
              Определяющие препятствия маршрута
            </label>
            <input type="radio" v-on:change="swapPage" value="page3" class="collapse3" name="collapse3" id="child-handle6">
            <label for="child-handle6" class="btn-dark btn-sm">
              Путевые заметки
            </label>
          </div>
        </section>
        <section class="accordion col">
          <input type="radio" v-on:change="swapComponent" value="results" class="collapse2" name="collapse2" id="handle5">
            <label for="handle5" class="btn btn-secondary btn-sm">Итоги похода</label>
          <div class="accordion1 content">
            <input type="radio" v-on:change="swapPage" value="page1" class="collapse3" name="collapse3" id="child-handle7">
            <label for="child-handle7" class="btn-dark btn-sm">
              Технические итоги
            </label>
            <input type="radio" v-on:change="swapPage" value="page2" class="collapse3" name="collapse3" id="child-handle8">
            <label for="child-handle8" class="btn-dark btn-sm">
              Организационные итоги
            </label>
          </div>
        </section>
        <section class="accordion col">
        <label class="btn btn-secondary btn-sm">Опубликовать</label>
        </section>
        <section class="accordion col">
        <label class="btn btn-secondary btn-sm">Экспорт в Word</label>
        </section>
        <section style="width:100%; height:100%;">          
        </section>
      </nav>
      <div>
        <nav class="navbar navbar-dark bg-secondary" style="border-bottom: 2px solid #2c3237; justify-content: left;">
          <button class="btn btn-dark btn-sm">Сохранить</button>
          <button class="btn btn-dark btn-sm" style="margin-left:15px;">Отмена</button>
          <!-- <div style="width:100%; height:100%;"></div> -->
        </nav>
      <component :is="dynamicComponent" :page="page"></component> 
      </div>
    </div>
  </div>
</template>

<script>
import RouteComponentVue from './RouteComponent.vue';
import HikeDiaryComponentVue from './HikeDiaryComponent.vue';
import HikeResultsComonentVue from './HikeResultsComonent.vue';

  export default {
    name: 'AddDocumentComponent',
    components: {
     RouteComponentVue,
     HikeDiaryComponentVue,
     HikeResultsComonentVue,
    },
    data() {
      return {
        status: 'route',
        page: 'page1',
      }
    },
    created() {
    },
    methods: {
      swapComponent: function(event) {
        var elem = event.target;
        elem.checked = true;
        var childRadio = elem.parentElement.querySelector(".collapse3");
        childRadio.checked = true;
        this.page =childRadio.value;
        this.status = elem.value;
      },
      swapPage: function(event) {
        var elem = event.target;
        this.page = elem.value;
      }
    },
    computed:{
      dynamicComponent() {
        if(this.status == 'diary')
          return 'HikeDiaryComponentVue';
        else if(this.status == 'results')
          return 'HikeResultsComonentVue';
        this.status == "route";
        return 'RouteComponentVue';
      }
    },
    mounted(){
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

<style>
  html, body {
    height: 100%;
    margin: 0;
  }

  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 100%;
    display: grid;
    grid-template-columns: 100vh;
    grid-auto-rows: 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    box-sizing: border-box; */
  }

.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}

.accordion > input[type="radio"], .accordion1 > input[type="radio"] {
  position: absolute;
  left: -100vw;
}

.accordion .content {
  overflow-y: hidden;
  height: 0;
  transition: height 0.3s ease;
}

.accordion > input[type="radio"]:checked ~ .content {
  height: auto;
  overflow: visible;
}

.accordion1 > input[type="radio"]:checked + label
{
  background-color: #23272b;
  border-color: #1d2124;
}

.accordion > input[type="radio"]:checked ~ label {
  background-color: #545b62;
  border-color: #545b62;
}

.accordion label {
  display: block;
}

</style>