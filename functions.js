export {creaArmada, posicionaArmada, rondaDeDisparo};
import { Buque } from "./classBuque.js";
import {FILAS, COLUMNAS} from "./data.js";

function dameNumeroAleatorioAmbosIncluidos(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function creaArmada (portaviones, acorazados, cruceros, destructores, submarinos){

    let listaBuques = [portaviones, acorazados, cruceros, destructores, submarinos];

    let armada = {
        portaviones: [],
        acorazados: [],
        cruceros: [],
        destructores: [],
        submarinos: [],
        listaBuques: listaBuques
    }

    for(let i = 0; i <= 4; i++){
        for(let x= 0; x <= listaBuques[i] - 1; x++){
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

function posicionaArmada(armada, tablero){

    for(let i = 0; i <= Object.values(armada).length - 2; i++) {
        let listaTipoDeBarco = Object.values(armada)[i];

        for(let x = 0; x < listaTipoDeBarco.length; x++){
            let codigoNavio = listaTipoDeBarco[x].codigo;
            let posicionLimiteProa = listaTipoDeBarco[x].numeroSecciones - 1;
            let celda = null;
            let filaOrColumna = null;

            let orientacion = dameNumeroAleatorioAmbosIncluidos(0, 1);

            if(orientacion){

                let seccionesComprobadas = 0;
                while(seccionesComprobadas <= listaTipoDeBarco[x].numeroSecciones){

                    filaOrColumna = dameNumeroAleatorioAmbosIncluidos(0, 9);
                    celda = dameNumeroAleatorioAmbosIncluidos(0, posicionLimiteProa);

                    for(let y = celda; y < celda + listaTipoDeBarco[x].numeroSecciones; y++){
                        if(tablero.escenario[filaOrColumna][y] === " "){
                            seccionesComprobadas++;
                        } else {
                            seccionesComprobadas = 0;
                            break;
                        }
                    }
                }

                for(let y = celda; y < listaTipoDeBarco[x].numeroSecciones + celda; y++){
                    tablero.escenario[filaOrColumna][y] =  codigoNavio;
                }

            } else {

                let seccionesComprobadas = 0;
                while(seccionesComprobadas <= listaTipoDeBarco[x].numeroSecciones){

                    filaOrColumna = dameNumeroAleatorioAmbosIncluidos(0, 9);
                    celda = dameNumeroAleatorioAmbosIncluidos(0, posicionLimiteProa);

                    for(let y = celda; y < celda + listaTipoDeBarco[x].numeroSecciones; y++){
                        if(tablero.escenario[y][filaOrColumna] === " "){
                            seccionesComprobadas++;
                        } else {
                            seccionesComprobadas = 0;
                            break;
                        }
                    }
                }

                for(let y = celda; y < listaTipoDeBarco[x].numeroSecciones + celda; y++){
                    tablero.escenario[y][filaOrColumna] =  codigoNavio;
                }
            }
        }
    }
    return tablero;
}

function rondaDeDisparo(tableroPropio, tableroEnemigo){

    console.log(`Es el TURNO de la ${tableroPropio.nombreJugador}`);

    let vuelveADisparar = true;

    while(vuelveADisparar){
        let apuntadoHorizontal = dameNumeroAleatorioAmbosIncluidos(0, 9);
        let apuntadoVertical = dameNumeroAleatorioAmbosIncluidos(0, 9);

        if (tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] !== "🔥" && tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] !==  "🌊"){
            if(tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] !== " "){

                let codigoNavioDañado = tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical]; 
                tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] = "🔥";
                console.log("FUEEE-GO 🎇💣");
                console.log("💥¡ IMPACTO, OBJETIVO TOCADO !");
                console.table(tableroEnemigo.escenario);
                tableroEnemigo.disparosJugador--;

                // Comprueba si el navio de que se trate ha sido hundido.

                let hundido = true;

                for(let i= 0; i < FILAS; i++ ) {                 
                    for(let x = 0; x < COLUMNAS; x++){
                        if(tableroEnemigo.escenario[i][x] === codigoNavioDañado){
                            hundido = false;
                        }
                    }
                }

                if(hundido === true){
                    var victoria = false
                    tableroEnemigo.buquesFlota--;
                    console.log("¡ El navio enemigo ha sido hundido ! ¡Hip, hip, hurraaaa! 🥳🥳🎉🎉");

                    if(tableroEnemigo.buquesFlota === 0){
                        victoria = true;
                        break;
                    }
                }
                    
            } else {
                tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] = "🌊";
                vuelveADisparar = false;
                console.log("❌ ¡ Objetivo intacto !");
                console.table(tableroEnemigo.escenario);
                console.log("Es el turno de la Armada enemiga 😥");
                tableroEnemigo.disparosJugador--;
            }
        } else {
            vuelveADisparar = true;
        }
    }

/*     let victoria = true;

    for(let i= 0; i < FILAS; i++ ) {
        for(let x = 0; x < COLUMNAS; x++){
            if(x !== " " || x !== "🔥" || x !== "🌊"){
                victoria = false;
            }
        }
    } */

    return victoria;
}