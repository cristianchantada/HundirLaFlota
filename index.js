const FILAS = 10;
const COLUMNAS = 10;
const PORTAVIONES = 1;
const ACORAZADOS = 1;
const CRUCEROS = 3;
const DESTRUCTORES = 2;
const SUBMARINOS = 2;
const DISPAROS = 100;


function creaArmada (portaviones, acorazados, cruceros, destructores, submarinos){
    let totalBuques = portaviones + acorazados + cruceros + destructores + submarinos;
    let listaBuques = [portaviones, acorazados, cruceros, destructores, submarinos]

    for(i = 0; i <= 3; i++){
        for(x= 0; x <= listaBuques[i] - 1; x++){
            
        }



    }
}

class Tablero {
    constructor (numeroJugador){
        this.numeroJugador = numeroJugador;
        this.escenario = []
        this.tableroFisico = function(FILAS, COLUMNAS){
            for(let i = 0; i <= FILAS; i++){
                this.escenario.push([]);
                for(let x = 0; x <= COLUMNAS; x++){
                    this.escenario[i][x] = "O"
                }
            }
            return this.escenario;
        }
    }
}

class Buque {
    constructor(tipo, codigo, numeroSecciones, jugador, simbolo){
        this.tipo = tipo;
        this.codigo = codigo;
        this.numeroSecciones = numeroSecciones;
        this.jugador = jugador;
        this.simbolo = simbolo;
    }

    sitúaBarco (){

    }

}

function creaBuque(armada){
    let totalBuques = PORTAVIONES + ACORAZADOS + CRUCEROS + DESTRUCTORES + SUBMARINOS;

    for(let i; )
}


// Armada de los Estados Unidos.

let portavionesAmericano = new Buque("portaviones", "P", 5, "jugador1", "🛫");
let acorazadoAmericano = new Buque("acorazado", "A", 4, "jugador1", "🚢" );
let cruceroAmericano1 = new Buque("Crucero", "C", 3, "jugador1", "🛥️" );
let cruceroAmericano2 = new Buque("Crucero", "C", 3, "jugador1", "🛥️" );
let destructorAmericano1 = new Buque("Destructor", "D", 2, "jugador1", "🚤" );
let destructorAmericano2 = new Buque("Destructor", "D", 2, "jugador1", "🚤" );
let destructorAmericano3 = new Buque("Destructor", "D", 2, "jugador1", "🚤" );
let submarinoAmericano1 = new Buque("submarino", "S", 1, "jugaSor1", "🚀" );
let submarinoAmericano2 = new Buque("submarino", "S", 1, "jugaSor1", "🚀" );
let submarinoAmericano3 = new Buque("submarino", "S", 1, "jugaSor1", "🚀" );

// Armada Imperial Japonesa.

/* let portavionesJapones = new Buque("potaviones", "P", 5, "jugador2", "🛫");
let acorazadoJapones = new Buque("acorazado", "A", 4, "jugador2", "🚢" );
let cruceroJapones1 = new Buque("Crucero", "C", 3, "jugador2", "🛥️" );
let cruceroJapones2 = new Buque("Crucero", "C", 3, "jugador2", "🛥️" );
let destructorJapones1 = new Buque("Destructor", "D", 2, "jugador2", "🚤" );
let destructorJapones2 = new Buque("Destructor", "D", 2, "jugador2", "🚤" );
let destructorJapones3 = new Buque("Destructor", "D", 2, "jugador2", "🚤" );
let submarinoJapones1 = new Buque("submarino", "S", 1, "jugador2", "🚀" );
let submarinoJapones2 = new Buque("submarino", "S", 1, "jugador2", "🚀" );
let submarinoJapones3 = new Buque("submarino", "S", 1, "jugador2", "🚀" ); */



let tablero1 = new Tablero("jugador1");
tablero1.tableroFisico(FILAS, COLUMNAS);
let tablero2 = new Tablero("jugador2");
tablero1.tableroFisico(FILAS, COLUMNAS);
