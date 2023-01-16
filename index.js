const FILAS = 10;
const COLUMNAS = 10;
const PORTAVIONES = 1;
const ACORAZADOS = 1;
const CRUCEROS = 3;
const DESTRUCTORES = 2;
const SUBMARINOS = 2;
const DISPAROS = 100;

class Buque {
    constructor(tipo, codigo, numeroSecciones, jugador, simbolo){
        this.tipo = tipo;
        this.codigo = codigo;
        this.numeroSecciones = numeroSecciones;
        this.jugador = jugador;
        this.simbolo = simbolo;
    }
}

function creaArmada (portaviones, acorazados, cruceros, destructores, submarinos){

    let totalBuques = portaviones + acorazados + cruceros + destructores + submarinos;
    let listaBuques = [portaviones, acorazados, cruceros, destructores, submarinos];

    let armada = {
        portaviones: [],
        acorazados: [],
        cruceros: [],
        destructores: [],
        submarinos: [],
        listaBuques: listaBuques,
        totalBuques: totalBuques
    }

    for(i = 0; i <= 4; i++){
        for(x= 0; x <= listaBuques[i] - 1; x++){
            if(i === 0){
                let buque = new Buque("portaviones", "P" + (1 + x) , 5, "jugador1", "🛫");
                armada.portaviones.push(buque); 
            } else if (i === 1) {
                let buque = new Buque("acorazado", "A" + (1 + x), 4, "jugador1", "🚢" );
                armada.acorazados.push(buque);
            } else if (i === 2) {
                let buque = new Buque("crucero", "C" + (1 + x), 3, "jugador1", "🛥️" );
                armada.cruceros.push(buque); 
            } else if (i === 3){
                let buque = new Buque("destructor", "D" + (1 + x), 2, "jugador1", "🚤" );
                armada.destructores.push(buque);
            } else {
                let buque = new Buque("submarino", "S"+ (1 + x), 1, "jugador1", "🚀" );
                armada.submarinos.push(buque);
            }
        }
    }
    return armada;
}

class Tablero {
    constructor (numeroJugador){
        this.numeroJugador = numeroJugador;
        this.escenario = []
    }
    tableroFisico(FILAS, COLUMNAS) {
        for(let i = 0; i < FILAS; i++){
            this.escenario.push([]);
            for(let x = 0; x < COLUMNAS; x++){
                this.escenario[i].push(" ");
            }
        }
    }
}

function dameNumeroAleatorioAmbosIncluidos(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let tablero1 = new Tablero("jugador1");
tablero1.tableroFisico(FILAS, COLUMNAS);
let tablero2 = new Tablero("jugador2");
tablero2.tableroFisico(FILAS, COLUMNAS);
armada = creaArmada(1,1,2,3,3);

// colocaBarcosEnTablero1(tablero1);
// colocaBarcosEnTablero1(tablero2);

for(i = 0; i <= Object.values(armada).length - 2; i++) {
    let listaTipoDeBarco = Object.values(armada)[i];

    for(x = 0; x < listaTipoDeBarco.length; x++){
        codigoNavio = listaTipoDeBarco[x].codigo;
        posicionLimiteProa = listaTipoDeBarco[x].numeroSecciones - 1;
        orientacion = dameNumeroAleatorioAmbosIncluidos(0, 1);

        if(orientacion) orientacion = "horizontal"
        else orientacion = "vertical";

        if(orientacion === "horizontal"){


            seccionesComprobadas = 0;

            while(seccionesComprobadas <= listaTipoDeBarco[x].numeroSecciones){


                fila = dameNumeroAleatorioAmbosIncluidos(0, 9);
                celda = dameNumeroAleatorioAmbosIncluidos(0, posicionLimiteProa);

                for(y = celda; y < celda + listaTipoDeBarco[x].numeroSecciones; y++){
                    if(tablero1.escenario[fila][y] === " "){
                        seccionesComprobadas++;
                    } else {
                        seccionesComprobadas = 0;
                        break
                    }
                }
            }

            // Situar el barco;

            for(y = celda; y < listaTipoDeBarco[x].numeroSecciones + celda; y++){
                tablero1.escenario[fila][y] =  codigoNavio;
            }


        } else {

            seccionesComprobadas = 0;

            while(seccionesComprobadas <= listaTipoDeBarco[x].numeroSecciones){

                columna = dameNumeroAleatorioAmbosIncluidos(0, 9);
                celda = dameNumeroAleatorioAmbosIncluidos(0, posicionLimiteProa);

                for(y = celda; y < celda + listaTipoDeBarco[x].numeroSecciones; y++){
                    if(tablero1.escenario[y][columna] === " "){
                        seccionesComprobadas++;
                    } else {
                        seccionesComprobadas = 0;
                        break
                    }
                }
            }

            for(y = celda; y < listaTipoDeBarco[x].numeroSecciones + celda; y++){
                tablero1.escenario[y][columna] =  codigoNavio;
            }
        }
    }
}


console.table(tablero1.escenario);