import Monitor from './components/monitor';
import Monitor2 from './components/monitor2';
import Button from './components/button';
var app = document.querySelector('#app'); //是一個ID 只能被使用一次 JS API HTML
var info = '0'; //顯示


function createLayout () { //創一個class在monitior下
    const numberButtonContainer = document.createElement('div');
    const operatorButtonContainer = document.createElement('div');
    const otherButtonContainer = document.createElement('div');  //other創div 會保存原本的內容

    numberButtonContainer.classList.add('numberButtonContainer');
    operatorButtonContainer.classList.add('operatorButtonContainer');
    otherButtonContainer.classList.add('otherButtonContainer'); //other創class 可以被使用很多次

    app.appendChild(numberButtonContainer);
    app.appendChild(operatorButtonContainer);
    app.appendChild(otherButtonContainer); //將DOM放到app之下 文件物件管理

    return {
        numberButtonContainer,
        operatorButtonContainer,
        otherButtonContainer,
    }
}



var button = Button();
// var monitor = Monitor();
Monitor.install(info);
var containers = createLayout();
button.install(containers);
Monitor2.install(info);


// Rest API


