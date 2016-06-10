var express = require("express");
var app = express();
app.listen(3000);
// var bodyParser = require("body-parser");
// app.use(bodyParser.json());

// app.configure(function() {
//     //默认情况下Express并不知道该如何处理该请求体，因此我们需要增加bodyParser中间件，用于分析
//     //application/x-www-form-urlencoded和application/json
//     //请求体，并把变量存入req.body。我们可以像下面的样子来“使用”中间件[这个保证POST能取到请求参数的值]：
//     app.use(express.bodyParser());
// });

//处理GET请求
app.get('/hello/*', function(req, res){
    console.log(req.query.name);
    console.log(req.query.email);
    res.send('Get Over');
});




//浏览器中输入
//http://127.0.0.1:3000/hello/?name=wujintao&email=cino.wu@gmail.com


//除了app.get、app.post这种形式外，还可以采用：app.all在这里all表示get,post等任何一种请求方式，当然也可以指定为某种特定的请求方式。



//app.get('/', function(req, res){
// res.render('index', {
//    title: 'Express'
//  });
//});
//上面的代码意思是，get请求根目录则调用views文件夹中的index模板，并且传入参数title为“Express”，这个title就可以在模板文件中直接使用。


