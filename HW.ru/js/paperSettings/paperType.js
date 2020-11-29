//1.Тип бумаги----------------
const paperEl = document.querySelector('.paper-bg');
let selectPaperId = 1;

changePaper(selectPaperId);

export function changePaper(id){
    let paperWrapper = document.getElementsByClassName('paper-item-wrapper');
    //Создаем зеленую отметку
    let el = document.createElement("img");
    el.src = "../img/paper_templates/select-paper-icon.png";
    el.className = "select-paper";
    //Очищает все зеленые отметки
    function removeAllCheck(){
        let allCheck = document.getElementsByClassName('select-paper');
        allCheck[0].remove();
    }
    removeAllCheck(); //Срабатывает при каждом клике

    paperEl.style="background:url(../img/paper_templates/paper-"+id+".png) center center no-repeat";

    paperWrapper[id-1].appendChild(el);

    // TODO: разобраться со State
    // state.paperSettings.type=id;//Записываем в state выбранный тип бумаги
}

