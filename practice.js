var express = require("express");
var app = express();
app.use(express.static('./')).listen(3000);
// app.get("/", function (req, res) {
//     var username = req.query.username;
//     if(username == '2b'){
//         res.send("恭喜你通过测试");
//     }
//     else{
//         res.redirect("/");
//     }
//
// });

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/search", function (req, res) {
    var userName = req.query.userName;
    var data;
    if (!userName) {
        data = {"success": false, "msg": "没有找到员工。"};
    }
    else {
        data = {"success": true, "msg": "找到员工。"};
    }
    res.json(data);
});

app.post("/create", function (req, res) {
    var name = req.body.name;
    var number = req.body.number;
    var sex = req.body.sex;
    var job = req.body.job;
    if (name && number && sex && job) {
        data = {"success": true, "msg": "找到员工。"};
    }
    else {
        data = {"success": false, "msg": "没有找到员工。"};
    }
    res.json(data);
    // res.end();
});


/* 总结
 1.res.send 和 res.json 可以互换使用
 2.res.send 和res.json 以及res.end() 后面的代码好会执行 , 所以他们不等于return
 3.监听端口号一定要这么写 app.use(express.static('./')).listen(3000)
   static里写的是html文件的路径:
           如果.html文件和该.js文件在同一目录下面,就像这样"./"(一定要加上".",不然出错)
           如果.html文件在当前目录下面的views(practice.html)文件夹下面,static里面就这样写("./views")即可;
   -->  然后在浏览器中输人localhost:3000/practice.html
4.用req.query.name来获取Ajax路由中定义的参数name的值

 */