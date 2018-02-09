var express = require('express');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'sitepoint'
});
con.connect((err) => {
    if (err) {
        console.log(err, 'err');
        return;
    }
    console.log('connection established')
})

// con.query('SELECT 1 +1 AS solution', function (err, rows, fields) {
//     if (err) {
//         console.log(err, 'queryErr');
//         return;
//     }
//     console.log('solution',rows[0].solution);
// })

// con.end((err)=>{
//     if(err) return;
//     console.log('connection succeed')
// })

var addVip = 'insert into testutf8(username,password) values(?,?)';
var param = ['用汉字试试4',4];
// con.query(addVip, param, function(error, result){
//     if(error)
//     {
//         console.log(error.message);
//     }else{
//         console.log('insert id: '+result.insertId);
//     }
// });

//删除一条数据
// con.query('delete from testutf8 where password = 3',(err,result)=>{
//     if(err){
//         console.log(err.message);

//     }else{
//         console.log(result.affectedRows);
//     }
// })
//修改一条数据
// var userSql = "update testutf8 set username = 'newUserName' where password = 2";

// con.query(userSql,(err,result)=>{
//     if(err){
//         console.log(err.message);

//     }else{
//         console.log(result.affectedRows);
//     }
// })

//查找数据
//var DATABASE = "node";
//connection.query('use '+DATABASE);
con.query('select * from testutf8',(error,results,fields)=>{
    if (error) {
        throw error;
    }
    if(results){
        for(var i = 0;i<results.length;i++){
            console.log(results[i].username);
            console.log(results[i].password)
        }
        // console.log(results,'result');
    }
})


















con.end();








