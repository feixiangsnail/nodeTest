var fs = require('fs');
var h = require('./h');
var router = require('./router').func();
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('connect',function(){
    console.log('链接成功');
    eventEmitter.emit('sendData')
})
eventEmitter.on('sendData',function(){
    console.log('sendData')
})

eventEmitter.emit('connect')

fs.readFile('./input.txt',function(err,data){
    if(err){
        console.log(err,'err');
        return;
    }
    console.log(data,'data')
})
h.say();

console.log(this == global);















