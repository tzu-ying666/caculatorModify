// function Monitor(){
const monitor = document.createElement('div'); //創造monitor
monitor.id = 'monitor';

function install (info) {
    monitor.innerHTML = info;
    app.appendChild(monitor); //將monitor掛在app裡
    // return 1;
}

function render (info) { //顯示info在螢幕
    console.log('monitor render num: ', info);
    let appMonitor = document.getElementById('monitor'); //尋找monitor元件
    // console.log('target div: ', monitor, appMonitor);

    appMonitor.innerHTML = info;  //會覆蓋原本的內容
}

function input (text, info) {
    text = text.toString();
    if (text === '.') {
        if (info.includes('.') === false) {
            info = info + text;                
        } 
    } else if (info === '0') {
        info = text;
    } else { 
        info = info + text;
    }

    console.log('monitor input info:', info, text);
    render(info);
    return info;
}

// function clean () {
//     info = '0';
//     render();
// }

export default {
    install: install,
    input: input,
    // clean: clean,
    render: render,
};

// }

// export default Monitor; //輸出