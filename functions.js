export {creaArmada, posicionaArmada, rondaDeDisparo, dibujaComienzoBatalla, estadisticas};

import { Buque } from "./classBuque.js";
import {FILAS, COLUMNAS, DISPAROS, PORTAVIONES, ACORAZADOS, CRUCEROS, DESTRUCTORES, SUBMARINOS} from "./data.js";
import { dibujaBuque, dibujaAvionPicado, dibujaAvionEstadisticas} from "./dibujos.js";

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

function rondaDeDisparo(tableroPropio, tableroEnemigo){

    let rellenar = "=".repeat(tableroPropio.nombreJugador.length)
    
    tableroPropio.rondasDisparo++;

    console.log();
    console.log(`====================${rellenar}=========================`);
    console.log(`============= Es el TURNO de la ${tableroPropio.nombreJugador.toUpperCase()}  =============`);
    console.log(`====================${rellenar}=========================`);
    console.log();
    console.log(`                                     RONDA Nº ${101 - tableroPropio.disparosJugador}                        `);
    console.log();

    let vuelveADisparar = true;

    while(vuelveADisparar){
        let apuntadoHorizontal = dameNumeroAleatorioAmbosIncluidos(0, 9);
        let apuntadoVertical = dameNumeroAleatorioAmbosIncluidos(0, 9);

        if (tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] !== "🔥" && tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] !==  "🌊"){

            console.log("|⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺|");           
            console.log(`| OBUSES: ${tableroPropio.disparosJugador}       NAVÍOS ENEMIGOS: ${tableroEnemigo.buquesFlota}                                      |`);
            console.log("|____________________________________________________________________________|");
            console.log();

            if(tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] !== " "){

                let codigoNavioDañado = tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical]; 
                tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] = "🔥";
                tableroPropio.disparosJugador--;
                tableroPropio.diparosAcertados++;

                console.log(`   Apunten a ${apuntadoHorizontal}${apuntadoVertical}. FUEGOOOOOOOOOO 💣💣💣`);
                console.log();
                console.log(`   💥💥💥 ¡ IMPACTO. Objetivo enemigo ${codigoNavioDañado} TOCADO en ${apuntadoHorizontal}${apuntadoVertical} ! 💥💥💥`);
                console.log();
                console.log(`   Tablero enemigo ( ${tableroEnemigo.nombreJugador.toUpperCase()} ):`)
                console.table(tableroEnemigo.escenario);
                console.log();
                console.log(`   Tablero propio ( ${tableroPropio.nombreJugador.toUpperCase()} ):`)
                console.table(tableroPropio.escenario);
                
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
                    tableroPropio.buquesEnemigosHundidos++;
                    console.log();
                    console.log(`   ¡El navio enemigo ${codigoNavioDañado} de la ${tableroEnemigo.nombreJugador} ha sido hundido!¡Hip, hip, hurraaaa! 🥳🥳🎉🎉`);
                    console.log();

                    if(tableroEnemigo.buquesFlota === 0){
                        victoria = true;
                        break;
                    }
                }
                    
            } else {
                tableroEnemigo.escenario[apuntadoHorizontal][apuntadoVertical] = "🌊";
                vuelveADisparar = false;
                tableroPropio.disparosJugador--;
                tableroPropio.disparosErrados++;

                console.log(`   Apunten a ${apuntadoHorizontal}${apuntadoVertical}. FUEGOOOOOOOOOO 💣💣💣`);
                console.log();
                console.log("   ❌❌❌ ¡ Objetivo intacto mi capitán ! El proyectil ha caído en el 🌊");
                console.log();
                console.log(`   Tablero enemigo ( ${tableroEnemigo.nombreJugador.toUpperCase()} ):`)
                console.table(tableroEnemigo.escenario);
                console.log();
                console.log(`   Tablero propio ( ${tableroPropio.nombreJugador.toUpperCase()} ):`)
                console.table(tableroPropio.escenario);
             

            }

            if(tableroPropio.disparosJugador + tableroEnemigo.disparosJugador <= 0){
                console.log();
                console.log("   Ambas marinas de guerra se han quedado sin munición. La batalla ha finalizado.");

                if(tableroEnemigo.buquesFlota > tableroPropio.buquesFlota){
                    console.log();
                    console.log(`   La ${tableroEnemigo.nombreJugador.toUpperCase()} ha ganado. Conserva ${tableroEnemigo.buquesFlota} navíos a flote`)
                    console.log(`   frente a los ${tableroPropio.buquesFlota} de la ${tableroPropio.nombreJugador.toUpperCase()}`);
                } else if (tableroEnemigo.buquesFlota < tableroPropio.buquesFlota){
                    console.log();
                    console.log(`   La ${tableroPropio.nombreJugador.toUpperCase()} ha ganado. Conserva ${tableroPropio.buquesFlota} navíos a flote`)
                    console.log(`   frente a los ${tableroEnemigo.buquesFlota} de la ${tableroEnemigo.nombreJugador.toUpperCase()}`);
                } else {
                    console.log();
                    console.log(`   Tanto la ${tableroEnemigo.nombreJugador.toUpperCase()} como la ${tableroPropio.nombreJugador.toUpperCase()}`);
                    console.log(`   conservan a flote ${tableroEnemigo.buquesFlota} navíos de guerra.`)
                    console.log();
                    console.log("   El resultado ha sido EMPATE.")
                }

                victoria = true;
                return victoria;

            }

        } else {
            vuelveADisparar = true;
        }
    }

    return victoria;
}

function estadisticas(tablero1, tablero2){
    dibujaAvionEstadisticas();

    console.log();
    console.log("===============================================================================");
    console.log(`   Los resultados para la ${tablero1.nombreJugador.toUpperCase()} han sido:`);
    console.log();
    console.log(`      Disparos efetuados: ${tablero1.diparosAcertados + tablero1.disparosErrados}.`);
    console.log(`      Disparos acertados: ${tablero1.diparosAcertados}.`);
    console.log(`      Disparos errados: ${tablero1.disparosErrados}.`);
    console.log(`      Disparos restantes: ${tablero1.diparosAcertados + tablero1.disparosErrados - DISPAROS}`);
    console.log();
    console.log(`      Buques enemigos hundidos: ${tablero1.buquesEnemigosHundidos}.`);
    console.log(`      Buques perdidos: ${tablero2.buquesEnemigosHundidos}`);
    console.log(`      Buques restantes: ${PORTAVIONES + ACORAZADOS + CRUCEROS + DESTRUCTORES + SUBMARINOS - tablero2.buquesEnemigosHundidos}`);
    console.log();
    console.log(`      Rondas de disparo efectuadas: ${tablero1.rondasDisparo}.`);
    
    console.log();
    console.log("===============================================================================");
    console.log(`   Los resultados para la ${tablero2.nombreJugador.toUpperCase()} han sido:`);
    console.log();
    console.log(`      Disparos efetuados: ${tablero2.diparosAcertados + tablero2.disparosErrados}.`);
    console.log(`      Disparos acertados: ${tablero2.diparosAcertados}.`);
    console.log(`      Disparos errados: ${tablero2.disparosErrados}.`);
    console.log(`      Disparos restantes: ${tablero2.diparosAcertados + tablero2.disparosErrados - DISPAROS}`);
    console.log();
    console.log(`      Buques enemigos hundidos: ${tablero2.buquesEnemigosHundidos}.`);
    console.log(`      Buques perdidos: ${tablero1.buquesEnemigosHundidos}`);
    console.log(`      Buques restantes: ${PORTAVIONES + ACORAZADOS + CRUCEROS + DESTRUCTORES + SUBMARINOS - tablero1.buquesEnemigosHundidos}`);
    console.log();
    console.log(`      Rondas de disparo efectuadas: ${tablero1.rondasDisparo}.`);
}

function dibujaComienzoBatalla(tablero1, tablero2){

    dibujaBuque();

    console.log(`Tablero de la ${tablero1.nombreJugador} :`);
    console.log();
    console.table(tablero1.escenario);
    console.log();
    console.log();
    console.log(`Tablero de la ${tablero2.nombreJugador} :`);
    console.log();
    console.table(tablero2.escenario);
    console.log();
    console.log("===============================================================================");
    console.log("=                                                                             =");
    console.log("=        En la mañana del 7 de mayo de 1942, un avión del portaviones         =");
    console.log("=        norteamericano USS Yorktown informa del avistamiento de la flota     =");
    console.log("=        japonesa y da comienzo la batalla naval del mar del Coral.           =");
    console.log("=                                                                             =");
    console.log("==============================================================================="); 
    dibujaAvionPicado();
}



