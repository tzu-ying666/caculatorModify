var info = '';
const monitor = document.createElement('div');
monitor.id = 'monitor2';

function install (info) {
    monitor.innerHTML = info;
    app.appendChild(monitor);
    // return 1;
}

function render () {
    monitor.innerHTML = info;
    // console.log(info);
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
