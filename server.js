// Etape 1
const express = require("express")
// Etape 5
const fs = require("fs")
// etape7
const v = require("./verif");

// Etape 2
const app = express();

// etape 3
const PORT = 2460;

// etape6  les routes
app.get("/", v, (req, res) => {
	fs.readFile("./home.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});

app.get("/home.html", v, (req, res) => {
	fs.readFile("./home.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});

app.get("/services.html", v, (req, res) => {
	fs.readFile("./services.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});

app.get("/contactus.html", v, (req, res) => {
	fs.readFile("./contactus.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});

// etape 4
app.listen(PORT, (req, res) => {
	console.log(`server running : port ${PORT}...`);
}); 

