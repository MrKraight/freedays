<template>
<div class="text-light">
    <div v-if="page=='page1'">
    <table>
        <tr><td class="p-1" style="font-weight:bold;">Участок пути</td><td class="p-1" style="font-weight:bold;">Изменения</td><td class="p-1" style="font-weight:bold;">Разница пути (км)</td></tr>
        <tr>
            <td class="p-1">
            <select class="form-select form-control form-select-sm" aria-label=".form-select-sm example">
                <option value="1">Три березы (парковка) - ручей</option>
                <option value="2">ручей - ночевка</option>
                <option value="3">ночевка - обед</option>
                <option value="4">обед - ночевка2</option>
                <option value="5">ночевка2 - База ЛенАльпТурс</option>
                <option value="6" selected>Вода (озерцо) на подъеме на перевал Ярлу-Боч - Перевал Ярлу-Боч</option>
                <option value="7">Перевал Ярлу-Боч - Ручей</option>
                <option value="8">Ручей - Перемычка при подъеме на перевал Кара-Айры Южный</option>
                <option value="9">Перевал Кара-Айры Южный - Перевал ОКА</option>
                <option value="10">Перевал ОКА - ручей3</option>
                <option value="11">ручей3 - Перевал Титова</option>
            </select>
            </td>
            <td class="p-1">
                <textarea type="text" class="form-control" rows="3">труднопроходимая лесная просека, обошли через поляну</textarea>
            </td>
            <td class="p-1">
                <input type="number" class="form-control" rows="3" value="0.7">
            </td>
        </tr>
        <tr>
            <td class="p-1">
            <select class="form-select form-control form-select-sm" aria-label=".form-select-sm example">
                <option value="1">Три березы (парковка) - ручей</option>
                <option value="2">ручей - ночевка</option>
                <option value="3">ночевка - обед</option>
                <option value="4">обед - ночевка2</option>
                <option value="5">ночевка2 - База ЛенАльпТурс</option>
                <option value="6">Вода (озерцо) на подъеме на перевал Ярлу-Боч - Перевал Ярлу-Боч</option>
                <option value="7">Перевал Ярлу-Боч - Ручей</option>
                <option value="8" selected>Ручей - Перемычка при подъеме на перевал Кара-Айры Южный</option>
                <option value="9">Перевал Кара-Айры Южный - Перевал ОКА</option>
                <option value="10">Перевал ОКА - ручей3</option>
                <option value="11">ручей3 - Перевал Титова</option>
            </select>
            </td>
            <td class="p-1">
                <textarea type="text" class="form-control" rows="3">Широкий ручей, искали брод</textarea>
            </td>
            <td class="p-1">
                <input type="number" class="form-control" rows="3" value="0.5">
            </td>
        </tr>
    </table>
    <table>
        <tr>
            <td ><input type="button" value="Добавить изменение" class="ml-2 btn btn-primary"></td><td></td><td><input type="button" value="Удалить изменение" class="btn btn-danger"></td>
        </tr>
    </table>
    </div>
    <div v-if="page=='page2'">
    <table>
        <tr><td class="p-1" style="font-weight:bold;">Участок пути</td><td class="p-1" style="font-weight:bold;">Наименование</td><td class="p-1" style="font-weight:bold;">Вид препятствия</td><td class="p-1" style="font-weight:bold;">Характеристика</td></tr>
        <tr>
            <td class="p-1">
            <select class="form-select form-control form-select-sm" aria-label=".form-select-sm example">
                <option value="1">Три березы (парковка) - ручей</option>
                <option value="2">ручей - ночевка</option>
                <option value="3">ночевка - обед</option>
                <option value="4">обед - ночевка2</option>
                <option value="5">ночевка2 - База ЛенАльпТурс</option>
                <option value="6" selected>Вода (озерцо) на подъеме на перевал Ярлу-Боч - Перевал Ярлу-Боч</option>
                <option value="7">Перевал Ярлу-Боч - Ручей</option>
                <option value="8">Ручей - Перемычка при подъеме на перевал Кара-Айры Южный</option>
                <option value="9">Перевал Кара-Айры Южный - Перевал ОКА</option>
                <option value="10">Перевал ОКА - ручей3</option>
                <option value="11">ручей3 - Перевал Титова</option>
            </select>
            </td>
            <td class="p-1">
                <textarea type="text" class="form-control" rows="3">Нужный перевал</textarea>
            </td>
            <td class="p-1">
                <textarea type="text" class="form-control" rows="3">перевал</textarea>
            </td>
            <td class="p-1">
                <textarea type="text" class="form-control" rows="3">2А, 4050	ск-лд, подъём 250м, 40° – перила, спуск 300м, осыпь до 30°, п/п</textarea>
            </td>
        </tr>
        <tr>
            <td class="p-1">
            <select class="form-select form-control form-select-sm" aria-label=".form-select-sm example">
                <option value="1">Три березы (парковка) - ручей</option>
                <option value="2">ручей - ночевка</option>
                <option value="3">ночевка - обед</option>
                <option value="4">обед - ночевка2</option>
                <option value="5">ночевка2 - База ЛенАльпТурс</option>
                <option value="6">Вода (озерцо) на подъеме на перевал Ярлу-Боч - Перевал Ярлу-Боч</option>
                <option value="7">Перевал Ярлу-Боч - Ручей</option>
                <option value="8" selected>Ручей - Перемычка при подъеме на перевал Кара-Айры Южный</option>
                <option value="9">Перевал Кара-Айры Южный - Перевал ОКА</option>
                <option value="10">Перевал ОКА - ручей3</option>
                <option value="11">ручей3 - Перевал Титова</option>
            </select>
            </td>
            <td class="p-1">
                <textarea type="text" class="form-control" rows="3">порог Волчья яма</textarea>
            </td>
            <td class="p-1">
                <textarea type="text" class="form-control" rows="3">порог</textarea>
            </td>
            <td class="p-1">
                <textarea type="text" class="form-control" rows="3">4А	50м, валы до 3,0м, 3,5м/с, бочка до 2м</textarea>
            </td>
        </tr>
    </table>
    <table>
        <tr>
            <td ><input type="button" value="Добавить препятствие" class="ml-2 btn btn-primary"></td><td></td><td><input type="button" value="Удалить препятствие" class="btn btn-danger"></td>
        </tr>
    </table>
    </div>
    <div v-if="page=='page3'">
    <div class="form-group row">
          <table  class="table table-dark">
            <tr><td class="p-1" style="font-weight:bold;"> День</td><td class="p-1" style="font-weight:bold;">Заметка</td><td class="p-1" style="font-weight:bold;">Пройденное расстояние(км)</td></tr>
            <tr>
              <td class="p-1"> 1</td>
              <td class="p-1">
                <textarea type="text" style="width:800px;" class="form-control" rows="3">С утра переменная облачность, но к выходу становится ясно. В 10.00 стартуем. За первый переход (40 минут) доходим до ручья, на обоих берегах есть места под палатки. Второй переход - 50 минут. На первых двух переходах подъемы чередуются со спусками, набор высоты плавный, тропа достаточно разбитая и грязная. Ясно, солнечно, деревья дают тенистую прохладу. После третьего перехода начинаем думать об обеде. Устраиваем обед после четвертого перехода (14.25), когда дошли до следующего ручья.
С 17.10 до 19.05 проходим 2 перехода до начала прижимов и первый прижим. Небо начинает затягиваться облаками. Встаем на ночлег. Было небольшое опасение, что стоянка над водой возвышается всего на 1 м. Но решили, что рядом есть склон на который можно будет взобраться, а дальше на несколько переходов идут прижимы. Первый прижим обходится либо у воды, либо поверху (около 20-30 метров высоты), наверху тоже есть стоянка. Там, где мы остановились места ровно на одну палатку, а в пределах 50-200 метров есть еще несколько таких же небольших площадок.</textarea>
              </td>
              <td class="p-1">
                <input type="number" class="form-control" value="9.9">
              </td>
            </tr>
            <tr>
              <td class="p-1"> 2</td>
              <td class="p-1">
                <textarea type="text" style="width:800px;" class="form-control" rows="3">После первого ходового дня встали чуть позже плана (7.00). На улице тепло, быстро развели костер, снова компот.
Идем вдоль прижимов один переход (40 минут) (фото 1). Через 20 минут от начала движения группа стоянок, но еще ближе к воде. 2 и 3 переход тропа вновь идет по лесу, часто встречаются стоянки, но в основном на 4 местные палатки; шестиместная палатка вместилась бы только на 2 стоянках (одна из них точка СТБ1).
На четвертом переходе планировали обед, но за 20 минут от начала движения не было ни одного места для стоянки и вода только из реки Аккем, довольно мутная. В итоге остановились в лесу, вблизи реки (13.30).
Обедали неспешно — пережидали жару. В 16.15 пошли дальше. Стоянки не попадаются, но до реки не очень далеко, подойти к воде можно. На шестом переходе прошли одну стоянку. Привал был ввиду водопада Текелю, но тропа при этом не пересекает ручей из водопада (уходит под камни?). На седьмом переходе нашли место для стоянки, можно поставить большие палатки, неподалеку течет чистый ручей, в округе много сухих дров, до Аккемского озера около 3 км.</textarea>
              </td>
              <td class="p-1">
                <input type="number" class="form-control" value="9.7">
              </td>
            </tr>
            <tr>
              <td class="p-1"> 3</td>
              <td class="p-1">
                <textarea type="text" style="width:800px;" class="form-control" rows="3">Свежо, переменная облачность, по голубому небу равномерно размазаны мазки облаков, ко времени выхода уже тепло.
На первом переходе прошли место под большую стоянку, далее базу «ЛенАльпТурс». От большой стоянки появились лошадиные следы, а за ней ограда, чтобы лошади не уходили ниже по тропе. После второго перехода вышли к Аккемскому озеру. Отметились у пограничников. Оставили заброску (не на метеостанции — там неприветливо и хотят 3000 рублей за оставление заброски на 8 дней).
Решили, что озеро проще обойти по мосту, тем более, что сегодня уже поздно идти на перевал Ярлу-Боч. За третий переход дошли до моста на южной оконечности озера. Перейдя мост (фото 3), устроили обед. Здесь для костра только немного кустарника.</textarea>
              </td>
              <td class="p-1">
                <input type="number" class="form-control" value="10.9">
              </td>
            </tr>
          </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['page'],
    name: 'HikeDiaryComponent',
}
</script>