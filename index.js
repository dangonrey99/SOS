const express = require("express");
const cool = require("cool-ascii-faces");

var app = express();

app.get("/", (res, res)=>{
	res.send("<html><body> Hello World </body> </html>");
});

app.listen(80);



console.log("server ready");