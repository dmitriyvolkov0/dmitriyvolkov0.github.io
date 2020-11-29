// На экранах телефонов показываем, что для полного отображения содержимого бумаги, нужно скролить ее

const paperEl = document.querySelector('.paper-bg'),
        lettersEl = document.querySelector('.letters'),
        paperOverlayEl = document.querySelector('.paper-overlay');
let showOverlay = false; //Определяет показывалась ли подсказка "переместите"


export function paperOverlay(){
    let winWidth = window.innerWidth,
        paperY = paperEl.getBoundingClientRect().top;//Сколько пикселей осталось до paperEl
        
    if((winWidth<=1220 && winWidth >991) || winWidth <= 667 && paperY <= 50 && showOverlay === false){
        function hide(){            
            paperOverlayEl.style.opacity = "0";
            showOverlay = true;

            function displayNone(){
                paperOverlayEl.style.display = "none";
            }
            setTimeout(displayNone, 400);
        }

        window.ontouchmove = () => hide();
        window.onmousedown = () => hide();
        window.ontouchstart = () => hide();

     
    }
}



