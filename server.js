var express = require('express');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: '120.76.158.229',
    user: 'yenei',
    password: 'yenei18702',

});
con.connect((err) => {
    if (err) {
        console.log(err, 'err');
        return;
    }
    console.log('connection established')
})

//yenei
//yenei18702
//120.76.158.229











// db.query('取数据', (err,data) => {
//     if (err) {
//         console.log(err, 'err');
//     }
//     else {
//         console.log(data,'成功');
//     }

// });