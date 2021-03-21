const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const qs = require('querystring');

var template = fs.readFileSync(__dirname+"/index.ejs", 'utf-8');
var posts = [];

const server = http.createServer((req, res) => {
    if(req.method === "POST"){
        //表单提交
        req.data = '';
        req.on('readable', function(){
            var chr = req.read();
            if(chr){
                req.data += chr;
            }
        });
        req.on("end",function(){
            var query = qs.parse(req.data);
            posts.push(query.content);
            showForm(posts, res);

        });
    }else{
        showForm(posts, res);
    }
})

const hostname = "127.0.0.1";
const port_number = 8080;

server.listen(port_number, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port_number}/`);
})

function showForm(p_posts, res){
    var data = ejs.render(template, {
        title: "hello ejs",
        posts: p_posts
    });
    res.setHeader("Content-Type","text/html");
    res.statusCode = 200;
    res.end(data);
}