var http = require("http");
var fs = require("fs"); // node.js가 가지고 있는 수많은 기능을 그룹핑 해놓은것 module
var url = require("url"); // url 모듈을 url이라는 이름으로 사용할 것이다라는 것을 의미

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;

  if (pathname === "/") {
    if (title === undefined) {
      fs.readFile(`data/${title}`, "utf8", function (err, description) {
        var title = "Welcome";
        var description = "Hello Node.js";
        var template = `
    <!DOCTYPE html>
  <html>
  <head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8" />
  </head>
  <body>
  <h1><a href="/">WEB</a></h1>
  <ol>
  <li><a href="/?id=HTML">HTML</a></li>
  <li><a href="/?id=CSS">CSS</a></li>
  <li><a href="/?id=JAVASCRIPT">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p>
  ${description}
  </p>
  </body>
  </html>
  `;
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readFile(`data/${title}`, "utf8", function (err, description) {
        var template = `
    <!DOCTYPE html>
  <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8" />
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JAVASCRIPT">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>
        ${description}
      </p>
    </body>
  </html>
    `;
        response.writeHead(200);
        response.end(template);
      });
    }
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);
