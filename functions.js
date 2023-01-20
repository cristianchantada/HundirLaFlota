export {creaArmada, posicionaArmada, rondaDeDisparo, creaJuego, dameNumeroAleatorioAmbosIncluidos};
import {FILAS, COLUMNAS, PORTAVIONES, ACORAZADOS, CRUCEROS, DESTRUCTORES, SUBMARINOS} from "./data.js";
import { Buque } from "./classBuque.js";


function dameNumeroAleatorioAmbosIncluidos(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function creaJuego(claseTablero, crearArmadas, posicionarArmadas, dibujaComienzoBatalla){

    let tablero1 = new claseTablero("Armada de los Estados Unidos 🎖️");
    tablero1.tableroFisico(FILAS, COLUMNAS);
    let tablero2 = new claseTablero("Armada Imperial Japonesa 🔴");
    tablero2.tableroFisico(FILAS, COLUMNAS);

    let armada = crearArmadas(PORTAVIONES, ACORAZADOS, CRUCEROS, DESTRUCTORES, SUBMARINOS);
    posicionarArmadas(armada, tablero1);
    posicionarArmadas(armada, tablero2);

    dibujaComienzoBatalla(tablero1, tablero2);

    return [tablero1, tablero2];
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
                let buque = new Buque("portaviones", "P" + (1 + x) , 5, "🛫");
                armada.portaviones.push(buque); 
            } else if (i === 1) {
                let buque = new Buque("acorazado", "A" + (1 + x), 4, "🚢" );
                armada.acorazados.push(buque);
            } else if (i === 2) {
                let buque = new Buque("crucero", "C" + (1 + x), 3, "🛥️" );
                armada.cruceros.push(buque); 
            } else if (i === 3){
                let buque = new Buque("destructor", "D" + (1 + x), 2, "🚤" );
                armada.destructores.push(buque);
            } else {
                let buque = new Buque("submarino", "S"+ (1 + x), 1, "🚀" );
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

function rondaDeDisparo(tableroPropio, tableroEnemigo, pintaRondas, dameNumeroAleatorioAmbosIncluidos, pintaDisparosYNavios, pintaImpacto, pintaHundimiento, pintaVictoriaTotal, pintaDisparoErrado, pintaFinMunicion){

    let victoria = false;

    if(tableroPropio.disparosJugador === 0) return victoria
    

    tableroPropio.rondasDisparo++;
    pintaRondas(tableroPropio);

    let vuelveADisparar = true;

    while(vuelveADisparar){
        let apuntadoHorizontal = dameNumeroAleatorioAmbosIncluidos(0, 9);
        let apuntadoVertical = dameNumeroAleatorioAmbosIncluidos(0, 9);

        if (tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] !== "🔥" && tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] !==  "🌊"){

            pintaDisparosYNavios(tableroPropio, tableroEnemigo);

            if(tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] !== " "){
                let codigoNavioDañado = tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical]; 
                tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] = "🔥";
                tableroPropio.disparosJugador--;
                tableroPropio.diparosAcertados++;

                pintaImpacto(apuntadoHorizontal, apuntadoVertical, codigoNavioDañado, tableroPropio, tableroEnemigo);
                
                let hundido = true;
                for(let i= 0; i < FILAS; i++ ) {                 
                    for(let x = 0; x < COLUMNAS; x++){
                        if(tableroEnemigo.escenario[i][x] === codigoNavioDañado){
                            hundido = false;
                        }
                    }
                }
                if(hundido === true){
                    tableroEnemigo.buquesFlota--;
                    tableroPropio.buquesEnemigosHundidos++;
                    pintaHundimiento(tableroEnemigo, codigoNavioDañado);

                    if(tableroEnemigo.buquesFlota === 0){
                        victoria = true;
                        pintaVictoriaTotal(tableroPropio, tableroEnemigo);
                        return victoria;
                    }
                }  
            } else {
                tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] = "🌊";
                vuelveADisparar = false;
                tableroPropio.disparosJugador--;
                tableroPropio.disparosErrados++;
                pintaDisparoErrado(apuntadoHorizontal, apuntadoVertical, tableroPropio, tableroEnemigo);
            }

            if(tableroPropio.disparosJugador === 0 && tableroEnemigo.disparosJugador === 0){
                pintaFinMunicion(tableroPropio, tableroEnemigo);
                victoria = true;
                return victoria;
            }
        } else {
            vuelveADisparar = true;
        }
    }
    return victoria;
}