//var handleSql = require('./demos/sql1')();
var express = require('express');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    
});
con.connect((err)=>{
    if(err){
        console.log(err,'err');
    }
    else{
        console.log('connected')
    }
})

// con.query('create database nodeSql',function(err){
//     if(err){
//         console.log(err,'err');
//         return;
//     }
// })
//con.query('drop database nodeSql');
//使用指定数据库
    con.query('use sitepoint')
//显示数据库中的所有数据表
    // con.query('show tables',function(err,tables){
    //     if(err){
    //         console.log(err,'err')

    //     }else{
    //         console.log(tables);
    //     }
    // })
//为指定表增加字段
    // con.query('alter table testutf8 add id int(15)')
//为指定表更改字段名字段类型
    //con.query('alter table testutf8 change usernameusernameusernameusername2 username varchar(20)')
//为指定表删除字段
    //con.query('alter table testutf8 drop id')
//数据的增删改查
var testutf8 ={
    insert:'insert into testutf8(username,password) values(?,?)',
    delete:'delete from testutf8 where password = 3',
    update:"update testutf8 set username = 'newUserName' where password = 2",
    queryById:'select * from testutf8 where username=? and password = ?',
    queryAll:'select * from testutf8' //回调函数的第二个参数是所有行数组
}
con.query(testutf8.insert,['zhangxiaosan',666666],(err,result)=>{
    if(err){
        console.log(err,'err');
    }else{
        console.log(result,'result');
    }
})

con.query('alter table testutf8 add id int(10)')








































