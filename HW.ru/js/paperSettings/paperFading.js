// ======================== Изменяем степень выцветания бумаги ========================
const paperEl = document.querySelector('.paper-bg');
const fadingIndicator = document.querySelector('.paper-fading-indicator');

export function fading(value){
    paperEl.style.filter = "sepia("+value*0.06+")";
    fadingIndicator.textContent = value;

    //TODO: решить с State
    // state.paperSettings.fadig = fadingInp.value;
}

//Сбрасываем показатели "выцветания бумаги" при переключении "типа бумаги"
$('.paper-item').click(()=>{ fadingIndicator.textContent=0; });