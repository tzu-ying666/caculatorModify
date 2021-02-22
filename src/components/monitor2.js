var info = '';
const monitor = document.createElement('div');
monitor.id = 'monitor2';

function install (info) {
    monitor.innerHTML = info;
    app.appendChild(monitor);
    // return 1;
}

function render () {
    let appMonitor = document.getElementById('monitor2'); //尋找monitor元件
    // console.log('target div: ', monitor, appMonitor);

    appMonitor.innerHTML = info;  //會覆蓋原本的內容
}

function input (text) {
    info = text + '<br>' + info;
    // console.log(info);
    render();
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
