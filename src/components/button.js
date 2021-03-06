import Monitor2 from './Monitor2';
import Monitor from './Monitor';

var onSecondInput = false;
var firstNumber = 0;
var operator = '';
var remember =  '';

function Button () {
    const operators = ['÷', 'x', '-', '+'];
    const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0','.']; 

    function isOperator (text) { // 符號判斷式
        return operators.includes(text);    //是符號就回傳ture
    }
    function isNumber (text) { // 數字判斷式
        return numbers.includes(text);
    }

    function getPow (number) { //解決js乘除問題
        var numberString = number.toString();
        if (numberString.includes('.') === false) {
            return 1;  //如果整數就就會傳1
        }
        var digitAfterDot = numberString.length - 1 - numberString.indexOf('.'); //找出小數點後面有幾位
        var pow = Math.pow(10, digitAfterDot); //pow變成10的次方
        console.log(pow, number);
        return  pow;     
    }

    function showResult (secondNumberString) { 
        var secondNumber = Number(secondNumberString);
        var result = 0;
        if (operator === '+') {
            result = firstNumber + secondNumber;
        } else if (operator === '-') {
            result = firstNumber - secondNumber;
        } else if (operator === 'x') {
            var pow1 = getPow(firstNumber); //宣告pow1替代getPow
            var pow2 = getPow(secondNumber);
            // var firstString = firstNumber.toString();
            // var digitAfterDot1 = firstString.length - 1 - firstString.indexOf('.');
            // var pow1 = Math.pow(10,digitAfterDot1);
            // var secondString = secondNumber.toString();
            // var digitAfterDot2 = secondString.length - 1 - secondString.indexOf('.');
            // var pow2 = Math.pow(10,digitAfterDot2);
            // console.log(digitAfterDot1, digitAfterDot2);
            firstNumber = firstNumber * pow1;
            secondNumber = secondNumber * pow2;
            //小數變整數
            result = firstNumber * secondNumber / pow1 / pow2;
        } else if (operator === '÷') {
            var pow1 = getPow(firstNumber);
            var pow2 = getPow(secondNumber);
            var powMax = Math.max(pow1, pow2);
            // var powMax = (pow1 > pow2) ? pow1 : pow2;
            firstNumber = firstNumber * powMax;
            secondNumber = secondNumber * powMax;    
            console.log(pow1, pow2, firstNumber, secondNumber);    
            result = firstNumber / secondNumber;
        }
        input(result);
        Monitor.render(result);
        // monitor.input(result); //monitor.input(result.toString());
        console.log(firstNumber, operator, secondNumber, '=', result);
        // 準備下一次運算環境
        onSecondInput = false;
    }

    function input (text, toReplace = true) {
        console.log('input content text: ', text);
        if (toReplace) {  //是否要被覆蓋
            remember = text;
        }
        else {
            if (text === '.') {
                if (remember.includes('.') === false) {
                    remember = remember + text;                
                } 
            } else if (remember === '0') {
                remember = text;
            } else { 
                remember = remember + text;
            }
        }
        console.log('input re:', remember);
    }

    function createButton (text, containers) {
        const button = document.createElement('button');
        var parent = undefined;

        // button.id = 'button_' + text; //創造HTML的id 
        button.classList.add('button');
        button.classList.add('button' + text);

        if (isNumber(text) || text === '.'){
            button.classList.add('gray');
            parent = containers.numberButtonContainer;
        } 
        if (isOperator(text) || text === '=') {
            button.classList.add('orange');
            parent = containers.operatorButtonContainer;
        }
        if (text === 'AC' || text === 'C' || text === '+/-') {
            button.classList.add('white');
            parent = containers.otherButtonContainer;
        }
        const inputText = () => {
            Monitor2.input('按下按鈕:' + text);
            console.log('按下按鈕' + text);

            if (text === 'AC') {
                input('0');
                operator = '';
                onSecondInput = false;
                firstNumber = 0;
                Monitor.render(remember);
                // monitor.clean();
            } else if (text === 'C') {
                input('0');
                Monitor.render(remember);
                // monitor.clean();
            } else if (text ==='+/-') {
                var infoNumber = Number(remember);
                var isPositive = infoNumber > 0;
                var newInfo = '';

                if (isPositive) {
                    newInfo = '-' + remember;
                } else {
                    console.log(remember);
                    newInfo = remember.slice(1); //第1個留下 開頭是0
                }

                input(newInfo);
                monitor.render(remember);
            } else if (text === '<-') {
                var newInfo = '';
                if (remember.length === 1) {
                    input('0');
                } else {
                    newInfo = remember.slice(0, remember.length - 1); //backspace 從第0個開始算到字串長度-1 都留下
                }
                input(newInfo);
                Monitor.render(remember);
            } else if (isOperator(text)) { //operator判斷
                if (operator !== '' && onSecondInput === true) {
                    // const secondNumberString = remember;
                    console.log(remember, '123');
                    showResult(remember);
                }
                operator = text; //text取代operator
            } else if (isNumber(text)) {  //num判斷
                if (operator !== '') {  // second input
                    if (onSecondInput === false) {
                        firstNumber = Number(remember);  //轉換成數字
                        // remember = monitor.input(text, remember);
                        remember = Monitor.input('', text); //????
                        input('0');
                        onSecondInput = true; 
                         //firstnum save
                    } 

                }

                // let remember = '10';
                // remember = input(text, false);
                input(text, false);
                console.log('remenber first num: ', remember);

                Monitor.render(remember);
            } else if (text === '=' && operator !== '' && onSecondInput === true) {  //&& all ture
               showResult(remember);
            //    monitor.render(remember);
            }

            const data = {
                operator,
                remember,
                onSecondInput,
                firstNumber,
            };
            const dataString = JSON.stringify(data); //數據轉字串
            // console.table(data);
            Monitor2.input(dataString);

            // if (text === 'Clean log') {
            //     Monitor2.clean();
            // }
        };
        
        button.innerHTML = text;
        button.onclick = inputText;
        parent.appendChild(button); //parent取代app

    }
    // create buttons
    function install (containers) {
        var arr = [
            ...numbers,
            ...operators,
            '=', 'AC', 'C','+/-',
            //'Clean log' 
            //'<-'
        ];
        console.log(arr);
            //為createButton
        arr.forEach((text) => {
            createButton(text, containers);
        });
        // return '123'
    }
    return {
        install: install,
        createButton,
        input,
        showResult,
    };
}

export default Button;