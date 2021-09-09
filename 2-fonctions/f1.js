
// Déclaration de la fonction maFonction
// monParametreBoolean est un paramètre de type boolean
// pas de valeur de retour
const maFonction = (monParametreBoolean) => {
	if (monParametreBoolean) {
		alert('monParametreBoolean == true')
	} else {
		alert('monParametreBoolean == false')
	}
}
// appel de la function maFonction
// maFonction(true)

// définition de la fonciton
const calculeLeDouble = (n) => {
	return n * 2
}

// appel de la fonction
let leDoubleDe5 = calculeLeDouble(5)
let leDoubleDe15 = calculeLeDouble(15)


const faisUnTruc = (metUneAlerte, name, n) => {
	if (metUneAlerte) {
		alert(`tiens, ton alerte ${name} !`)
		//alert("tiens, ton alerte " + name + " !")
	}
}

faisUnTruc(true, "Angelika")


let prenom = "Pierre"
const n = 123
// n = 150
let cond = true
let o = {name: "alex"}
