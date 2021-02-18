function Monitor(){
    const monitor = document.createElement('div');
    monitor.id = 'monitor';

    function install (info) {
        monitor.innerHTML = info;
        app.appendChild(monitor);
        // return 1;
    }

    function render (info) { //顯示info在螢幕
        monitor.innerHTML = info;  //會覆蓋原本的內容
        console.log(info);
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
    
    return {
        install: install,
        input: input,
        // clean: clean,
        render: render,
    };

}

export default Monitor; //輸出