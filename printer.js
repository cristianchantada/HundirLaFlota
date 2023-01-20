export {dibujaBuque, dibujaAvionPicado, dibujaAvionEstadisticas, pintaRondas, pintaDisparosYNavios, pintaImpacto, pintaVictoriaTotal, pintaDisparoErrado, pintaEstadisticas, dibujaComienzoBatalla, pintaFinMunicion, pintaHundimiento};
import {dibujaBuque, dibujaAvionEstadisticas, dibujaAvionPicado} from "./pictures.js";

function dibujaComienzoBatalla(tablero1, tablero2){

    dibujaBuque();

    console.log(`    Tablero de la ${tablero1.nombreJugador} :\n `);
    console.table(tablero1.escenario);

    console.log(` \n \n    Tablero de la ${tablero2.nombreJugador} : \n `);

    console.table(tablero2.escenario);
    console.log(` ===============================================================================\n =                                                                             =\n =        En la mañana del 7 de mayo de 1942, un avión del portaviones         =\n =        norteamericano USS Yorktown informa del avistamiento de la flota     =\n =        japonesa y da comienzo la batalla naval del mar del Coral.           =\n =                                                                             =\n ===============================================================================`)
     
    dibujaAvionPicado();
}

function pintaRondas(tableroPropio) {

    let turnoDe = `================ Es el TURNO de la ${tableroPropio.nombreJugador.toUpperCase()}  ================`;
    let rellenar = "=".repeat(turnoDe.length);

    console.log(rellenar + "\n" + turnoDe + "\n" + rellenar + `\n\n \t\t\t\t RONDA Nº ${tableroPropio.rondasDisparo} \n \t\t\t\t ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺`);
}

function pintaDisparosYNavios(tableroPropio, tableroEnemigo) {
    console.log(`${"=".repeat(80)}\n\tOBUSES: ${tableroPropio.disparosJugador}\tNAVÍOS PROPIOS: ${tableroPropio.buquesFlota}\tNAVÍOS ENEMIGOS: ${tableroEnemigo.buquesFlota}\n${"=".repeat(80)}\n `);

}

function codigoYClaseNavio(codigoNavioDañado){

    let codigoYclase = null;
    if(codigoNavioDañado.substring(0,1) === "P"){
        codigoYclase = codigoNavioDañado + " Portaviones";
    } else if(codigoNavioDañado.substring(0,1) === "A"){
        codigoYclase = codigoNavioDañado + " Acorazado";
    } else if(codigoNavioDañado.substring(0,1) === "C"){
        codigoYclase = codigoNavioDañado + " Crucero";
    } else if(codigoNavioDañado.substring(0,1) === "D"){
        codigoYclase = codigoNavioDañado + " Destructor";
    } else {
        codigoYclase = codigoNavioDañado + " Submario";
    }

    return codigoYclase;
}

function pintaImpacto(apuntadoHorizontal, apuntadoVertical, codigoNavioDañado, tableroPropio, tableroEnemigo){
    
    let barcoDeGuerra = codigoYClaseNavio(codigoNavioDañado);
    console.log(` Apunten a coordenada (${apuntadoHorizontal},${apuntadoVertical}). FUEGOOOOOOOOOO 💣💣💣\n\n 💥💥💥 ¡IMPACTO! 💥💥💥\n Objetivo enemigo ${barcoDeGuerra} TOCADO en coordenada (${apuntadoHorizontal},${apuntadoVertical})\n \n========================================================================`);

    console.log(`\n Tablero enemigo ( ${tableroEnemigo.nombreJugador.toUpperCase()} ):`);
    console.table(tableroEnemigo.escenario);

    console.log(`\n Tablero propio ( ${tableroPropio.nombreJugador.toUpperCase()} ):`);
    console.table(tableroPropio.escenario);

}

function pintaHundimiento(tableroEnemigo, codigoNavioDañado){

    let barcoDeGuerra = codigoYClaseNavio(codigoNavioDañado);
    console.log(`\n ¡El navio enemigo ${barcoDeGuerra} de la ${tableroEnemigo.nombreJugador} ha sido hundido!\n ¡Hip, hip, hurraaaa!\n `);
    
}

function pintaFinMunicion(tableroPropio, tableroEnemigo) {
    console.log("   Ambas marinas de guerra se han quedado sin munición. La batalla ha finalizado.\n ");

    if(tableroEnemigo.buquesFlota > tableroPropio.buquesFlota){
        console.log(`   La ${tableroEnemigo.nombreJugador.toUpperCase()} ha ganado. Conserva ${tableroEnemigo.buquesFlota} navíos a flote\n   frente a los ${tableroPropio.buquesFlota} de la ${tableroPropio.nombreJugador.toUpperCase()}`);
    } else if (tableroEnemigo.buquesFlota < tableroPropio.buquesFlota){
        console.log(`   La ${tableroPropio.nombreJugador.toUpperCase()} ha ganado. Conserva ${tableroPropio.buquesFlota} navíos a flote\n   frente a los ${tableroEnemigo.buquesFlota} de la ${tableroEnemigo.nombreJugador.toUpperCase()}`);
    } else {
        console.log(`   Tanto la ${tableroEnemigo.nombreJugador.toUpperCase()} como la ${tableroPropio.nombreJugador.toUpperCase()}\n   conservan a flote ${tableroEnemigo.buquesFlota} navíos de guerra. El resultado ha sido EMPATE.`)
    }
}

function pintaVictoriaTotal(tableroPropio, tableroEnemigo){

    console.log(` 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊\n\n ¡La ${tableroPropio.nombreJugador} ha conseguido la VICTORIA TOTAL!\n\n La ${tableroEnemigo.nombreJugador} ha sido completamente destruida\n\n 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕`);
}

function pintaDisparoErrado(apuntadoHorizontal, apuntadoVertical, tableroPropio, tableroEnemigo){

    console.log(` Apunten a coordenada (${apuntadoHorizontal},${apuntadoVertical}). FUEGOOOOOOOOOO 💣💣💣\n\n ❌❌❌ ¡Objetivo intacto mi capitán! El proyectil ha caído en el 🌊\n `);
    
    console.log(` Tablero enemigo ( ${tableroEnemigo.nombreJugador.toUpperCase()} ):`)
    console.table(tableroEnemigo.escenario);
    
    console.log(`\n Tablero propio ( ${tableroPropio.nombreJugador.toUpperCase()} ):`)
    console.table(tableroPropio.escenario);
}


function pintaEstadisticas(partida, DISPAROS){

    let tablero1 = partida[0];
    let tablero2 = partida[1];

    console.log("\n LA PARTIDA HA FINALIZADO.\n ");

    dibujaAvionEstadisticas();

    console.log(`\n
    ===============================================================================\n
     Los resultados para la ${tablero1.nombreJugador.toUpperCase()} han sido:
                                                                                  
        Disparos efetuados: ${tablero1.diparosAcertados + tablero1.disparosErrados}
        Disparos acertados: ${tablero1.diparosAcertados}
        Disparos errados: ${tablero1.disparosErrados}
        Disparos restantes: ${DISPAROS - tablero1.diparosAcertados - tablero1.disparosErrados}
                                                                                  
        Buques enemigos hundidos: ${tablero1.buquesEnemigosHundidos}.
        Buques perdidos: ${tablero2.buquesEnemigosHundidos}
        Buques restantes: ${tablero1.numeroInicialBuques - tablero2.buquesEnemigosHundidos}
                                                                                  
        Rondas de disparo efectuadas: ${tablero1.rondasDisparo}
                                                                                  
    ===============================================================================
     Los resultados para la ${tablero2.nombreJugador.toUpperCase()} han sido:
                                                                                  
        Disparos efetuados: ${tablero2.diparosAcertados + tablero2.disparosErrados}
        Disparos acertados: ${tablero2.diparosAcertados}
        Disparos errados: ${tablero2.disparosErrados}
        Disparos restantes: ${DISPAROS - tablero2.diparosAcertados - tablero2.disparosErrados}
                                                                                  
        Buques enemigos hundidos: ${tablero2.buquesEnemigosHundidos}
        Buques perdidos: ${tablero1.buquesEnemigosHundidos}
        Buques restantes: ${tablero2.numeroInicialBuques - tablero1.buquesEnemigosHundidos}
                                                                                  
        Rondas de disparo efectuadas: ${tablero2.rondasDisparo}
         `);
                                                                                  
    console.log(` Tablero definitivo de la ( ${tablero1.nombreJugador.toUpperCase()} ):`);
    console.table(tablero1.escenario);
    console.log(` Tablero definitivo de la ( ${tablero2.nombreJugador.toUpperCase()} ):`); 
    console.table(tablero2.escenario);

}