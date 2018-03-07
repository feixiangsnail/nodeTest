/*
 * @Author: ZhangShuai 
 * @Date: 2018-03-07 09:05:39 
 * @Last Modified by: ZhangShuai
 * @Last Modified time: 2018-03-07 09:06:29
 */

//var handleSql = require('./demos/sql1')();
var express = require('express');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'i5.iidingyun.com',
    user: 'catering',
    password: 'iiding.v08',
    port: '3306',


});
con.connect((err) => {
    if (err) {
        console.log(err, 'err');
    }
    else {
        console.log('connected')
    }
})

con.query('show databases', function (err, res) {
    if (err) throw err;
    console.log(res, '数据库')
})

con.query('use catering');
con.query('show tables', function (err, res) {
    if (err) throw err;
    console.log(res, '表数据')
})

con.query('select * from shop_table', function (err, res) {
    if (err) throw err;
    console.log(res, '表数据')
})










