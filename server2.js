var cheerio = require('cheerio');
var http = require('http');
var iconv = require('iconv-lite');
var index = 1; //页面数控制
var url = 'http://www.ygdy8.net/html/gndy/dyzz/list_23_';
var titles = []; //用于保存title

function getTitle(url, i) {
  console.log("正在获取第" + i + "页的内容"); 
  http.get(url + i + '.html', function(sres) {
    var chunks = [];
    sres.on('data', function(chunk) {
      chunks.push(chunk);
    });
    sres.on('end', function() {
      var html = iconv.decode(Buffer.concat(chunks), 'gb2312');
      var $ = cheerio.load(html, {decodeEntities: false});
      $('.co_content8 .ulink').each(function (idx, element) {
        var $element = $(element);
        titles.push({
          title: $element.attr('href')
        })
       
        //http://www.ygdy8.net/html/gndy/dyzz/20180/1.html

        //http://www.ygdy8.net/html/gndy/dyzz/20180228/56365.html

      })  
      if(i < 2) { //为了方便只爬了两页
        getTitle(url, ++index); //递归执行，页数+1
      } else {
        console.log(titles[0].title); 
        console.log("Title获取完毕！"); 
       // getBtLink(titles, 1)             
      }
    });
  });
}

function getBtLink(urls, n) { //urls里面包含着所有详情页的地址
    console.log("正在获取第" + n + "个url的内容");
    http.get('http://www.ygdy8.net' + urls[n].title, function(sres) {
      var chunks = [];
      sres.on('data', function(chunk) {
        chunks.push(chunk);
      });
      sres.on('end', function() {
        var html = iconv.decode(Buffer.concat(chunks), 'gb2312'); //进行转码
        var $ = cheerio.load(html, {decodeEntities: false});
        $('#Zoom td').children('a').each(function (idx, element) {
          var $element = $(element);
          btLink.push({
            bt: $element.attr('href')
          })
        })
        if(n < urls.length - 1) {
          getBtLink(urls, ++count); //递归
        } else {
          console.log("btlink获取完毕！");
          console.log(btLink);   
        }
      });
    });
  }









function main() {
    console.log("开始爬取");
    getTitle(url, index);
    
  }
  
  main(); //运行主函数











