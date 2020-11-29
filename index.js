import * as Overlay from './js/overlay/overlay.js';
import * as Translate from './js/translate/translate.js';
import * as PaperType from './js/paperSettings/paperType.js';
import * as PaperFading from './js/paperSettings/paperFading.js';
import * as BackgroundType from './js/paperSettings/paperBackground.js';

const translateBut = document.querySelector('.translate-text-but'),
      fadingInp = document.querySelector('.fading-inp'),
      selectFontInp = document.querySelector('.select-font-inp');

//При скролле убираем фон с подсказкой
window.onscroll = ()=>Overlay.paperOverlay();

// Переводим текст
translateBut.onclick = () => Translate.trans.output();

//Изменяем шрифт
selectFontInp.oninput = () => Translate.trans.changeFont(selectFontInp.value);

//Переключаемся между типами бумаги
$('.paper-item').click(function(e){
    let selectPaperEl = e.currentTarget;
    let selectPaperId = selectPaperEl.getAttribute("paperId");
    
    PaperType.changePaper(selectPaperId);
});

// Изменяем степень выцветания бумаги
fadingInp.oninput = () => PaperFading.fading(fadingInp.value);

//Переключаемся между типами задних фонов
$('.background-item').click(function(e){
    let selectBgEl = e.currentTarget;
    let selectBgId = selectBgEl.getAttribute("backgroundId");
    
    BackgroundType.changeBg(selectBgId);
});