let express = require("express")
let app = express()
const pug = require("pug")

app.use(express.static(__dirname + "/public"))

let perros_array = [
	{raza:"Doberman", texto:"Perro de ataque", imagen:"doberman.jpg"},
	{raza:"Dachshund", texto:"Perro de caza", imagen:"dachshund.jpg"},
	{raza:"Pastor Alemán", texto:"Perro de pastoreo", imagen:"pastorAleman.jpg"},
	{raza:"Pug", texto:"Peroo de compañía", imagen:"pug.jpg"},
	{raza:"San Bernardo", texto:"Perro de rescate", imagen:"sanBernardo.jpg"}
]

app.get("/", (req, res) => {
	//res.send("index.html")
	res.render("index.pug", {
		titulo: "Perros del mundo",
		texto: "Selecciona un perro",
		imagen: "perros.jpg",
		perros: perros_array
	})
})

app.listen(3000, () => {
	console.log("Servidor en el puerto 3000")
})