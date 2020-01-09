var express = require('express');
var app = express();
const port = 3000

// router 설정
var indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + '/views');

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))