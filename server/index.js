const path = require('path'); //引入 資料夾的位置
const express = require('express');

const app = express();
const port = 3000;

app.use('/', express.static(path.resolve(__dirname, '../'))); //路徑
app.use('/', express.static(path.resolve(__dirname, '../dist'))); //  ../表上一層 用來抓scss 將scss變成css
console.log(__dirname, path.resolve(__dirname, '../'))

app.use((req, res, next) => {
    console.log('abc', req.originalUrl);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html')); //放入檔案 res回應 req要求 
});

app.get('/add', (req, res) => {
    res.send('add'); 
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}.`); //監聽 port
    // console.log('Server is running at port ' + port + '.');
});