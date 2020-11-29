// ======================== Изменяем фон изображения ========================
let selectBgId = 1;
changeBg(selectBgId);

export function changeBg(id){
    let bgWrapper = document.getElementsByClassName('background-item');
    //Создаем зеленую отметку
    let el = document.createElement("img");
    el.src = "../img/paper_templates/select-paper-icon.png";
    el.className = "select-background";
    //Очищает все зеленые отметки
    function removeAllCheck(){
        let allCheck = document.getElementsByClassName('select-background');
        allCheck[0].remove();
    }
    removeAllCheck(); //Срабатывает при каждом клике
    bgWrapper[id-1].appendChild(el);

    //TODO: state
    // state.paperSettings.background = id;
}

