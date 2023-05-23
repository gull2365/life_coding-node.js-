var http = require("http");
var fs = require("fs"); // node.js가 가지고 있는 수많은 기능을 그룹핑 해놓은것 module
var url = require("url"); // url 모듈을 url이라는 이름으로 사용할 것이다라는 것을 의미

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  console.log(queryData.id);
  if (_url == "/") {
    _url = "/index.html";
  }
  if (_url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(queryData.id);
});
app.listen(3000);
