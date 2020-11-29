// ========== Переводим в рукописный текст ==========
const textEl = document.querySelector('.device-textarea'),
      lettersEl = document.querySelector('.letters');

export let trans = {
    HTML: '',

    textVal: textEl.value,
    fontName: "font-1",
    option: "",
    letterType: "",
    letter:"",

    clear(){ //Очищаем холст
        lettersEl.innerHTML ="";
    },
    getRandOption(){ //Генерируем случайный вариант написания буквы (от 1 до 2)
        return Math.round((Math.random(1))) + 1; 
    },
    changeFont(fontName){ //Изменяем шрифт
        this.fontName = fontName;
        this.output();
    },
    getSrc(){ //Формируем путь на основе указанных настроек и получаем его
        return  "img/fonts/" + this.fontName + '/option-' + this.option + '/' + this.letterType + '/' + this.letter + '.png';
    },

// Каждое слово оборачиваем блоком "word"
    begin_word(){ //Начало слова 
        this.HTML +='<div class="word">';
    },
    end_word(){ //Конец слова
        this.HTML +='</div>';
    },
    output(){
        this.clear();

        this.HTML = ''; //html-код введенных символов
        this.textVal = textEl.value;

        //Начинаем слово
        this.begin_word();

        for(let i=0; i < this.textVal.length; i++){    
            this.option = this.getRandOption();
            let textVal = this.textVal;

            //Создаем объект, который будем выводить на холст
            let letter = document.createElement('img');
            letter.className = "letter";
          
            //Узнаем каким типом является символ и заносим в letterType
            if( (textVal[i] >= 'а' && textVal[i] <='я' || textVal[i]=='ё') || (textVal[i]>='a' && textVal[i] <='z') ){
                this.letterType = "lowercase";
                letter.className += " lowercase";
            }else if((textVal[i] >= 'А' && textVal[i] <='Я' || textVal[i]=='Ё') || (textVal[i]>='A' && textVal[i] <='Z')){
                this.letterType = "uppercase";
                letter.className += " uppercase";
            }else if(textVal[i] >= '0' && textVal[i] <='9'){
                this.letterType = "numbers";
                letter.className += " numbers";
            }else if(textVal[i] == '\n'){
                
            }else{
                this.letterType = "symbols";
                letter.className += " symbols";
                letter.className += " lowercase";
            }

            //Т.к изображения нельзя называть именами (|\/?".*:), то даем им свои имена и по ним обращаемся к файлам
            switch(textVal[i]){        
                case '|': this.letter = 'lineM';
                break;

                case '/': this.letter = 'lineR';
                break;

                case '?': this.letter = 'question';
                break;

                case '"': this.letter = 'quotes';
                break;
                
                case ':': this.letter = 'colon';
                break;

                case '*': this.letter = 'star';
                break;

                case '.': this.letter = 'point';
                break;
                
                //Если встретили пробел , то заканчиваем слово и начинаем новое
                case ' ': this.letter = 'space';
                    this.end_word();
                    this.begin_word();
                break;

                //Если встретили переход на новую строку, то заканчиваем слово, переносим его и начинаем новое
                case '\n': this.letter = 'enter';
                    this.end_word();
                    this.HTML+='</br>';
                    this.begin_word();
                break;

                default: this.letter = textVal[i];
                break;
            }

            //Если символ не "перенос на новую строку", то выводим полученный символ
            if(this.letter!='enter'){
                letter.src = this.getSrc();
                this.HTML += letter.outerHTML;
            }
        }
        //Выводим содержимое переменной HTML(слова) на холст
        lettersEl.innerHTML+=this.HTML;
    }
}


