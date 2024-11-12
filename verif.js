let day = new Date().getDay(); //return current date
let hours = new Date().getHours(); //return current Hours

console.log(hours);

function verif1(req, res, next) {
	if (day > 0 && day < 6 && hours > 8 && hours < 18) next();
	else
		res.send(
			`<h1>Hello the server is closed actually, it is open from 8 to 18 everyday<h1/>`
		);
}

module.exports = verif1;