
const estados=[0,0,0,0,0,0,0,0]//8 posibles estados	


function reflex_agent(location, state){
	if (state=="DIRTY") return "CLEAN";
	else if (location=="A") return "RIGHT";
	else if (location=="B") return "LEFT";
}

function registrar_estado(pos,EA, EB){
	console.log(estados.toString())
	if (EA == 'DIRTY' && EB == 'DIRTY' && pos == 'A'){
		console.log('Entrand a registrar 0')
		estados[0] = 1;
		return	
	} else if (EA == 'DIRTY' && EB == 'CLEAN' && pos == 'A'){
		console.log('Entrand a registrar 1')
		estados[1] = 1
		return
	} else if (EA == 'CLEAN' && EB == 'DIRTY' && pos == 'A'){
		console.log('Entrand a registrar 2')
		estados[2] = 1
		return
	} else if (EA == 'CLEAN' && EB == 'CLEAN' && pos == 'A'){
		console.log('Entrand a registrar 3')
		estados[3] = 1
		return
	} else if (EA == 'DIRTY' && EB == 'DIRTY' && pos == 'B'){
		console.log('Entrand a registrar 4')
		estados[4] = 1
		return
	} else if (EA == 'DIRTY' && EB == 'CLEAN' && pos == 'B'){
		console.log('Entrand a registrar 5')
		estados[5] = 1
		return
	} else if (EA == 'CLEAN' && EB == 'DIRTY' && pos == 'B'){
		console.log('Entrand a registrar 6')
		estados[6] = 1
		return
	} else if (EA == 'CLEAN' && EB == 'CLEAN' && pos == 'B'){
		console.log('Entrand a registrar 7')
		estados[7] = 1
		return
	}
}

function ensuciar_rand(states){
	console.log('ensuciar 1. ' + states[1] + ' 2. ' + states[2])
	var opciones = ['CLEAN', 'DIRTY']

    if (states[1] == 'CLEAN'){
		//console.log("entrando a if 1")
        states[1] = opciones[Math.floor(Math.random() * opciones.length)] 
	}
    if (states[2] == 'CLEAN'){
		//console.log("entrando a if 2")
        states[2] = opciones[Math.floor(Math.random() * opciones.length)]  
	}
}

function verif_estados(){
	var banderaCero;
	for (let i = 0; i < estados.length; i++) {
		if(estados[i] == 0){
			banderaCero = 1
		}
	}

	if (banderaCero == 1)
		return false
	else
		return true
}

function test(states){
	var location = states[0]
	var state = states[0] == "A" ? states[1] : states[2];
	var action = reflex_agent(location, state)

	registrar_estado(states[0],states[1],states[2])
	//console.log("Location: " + location + " | Action: " + action)
	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action);


	if (action == "CLEAN"){
		if (location == 'A') states[1] = "CLEAN"
		else if (location == 'B') states[2] = "CLEAN"
	}
	else if (action == "RIGHT") states[0]='B'
	else if (action == "LEFT") states[0]='A'   

	//console.log('states ' + states[0] + ', '+ states[1] + ', '+ states[2])

	ensuciar_rand(states)
	if (verif_estados()){
		return
	}
	setTimeout(function(){ test(states); }, 2000);
}

states = ["A","DIRTY","DIRTY"];
test(states);
 