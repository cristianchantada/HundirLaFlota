export {dibujaBuque, dibujaAvionPicado, dibujaAvionEstadisticas, pintaRondas, pintaDisparosYNaviosEnemigos, pintaImpacto, pintaVictoriaTotal, pintaDisparoErrado, pintaEstadisticas, dibujaComienzoBatalla, pintaFinMunicion, pintaHundimiento};

function dibujaComienzoBatalla(tablero1, tablero2){

    dibujaBuque();

    const dibujaIntro =


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

function dibujaBuque (){

    const pintadoInicial = `
                                                                                   
    ===============================================================================
    ===============================================================================
                                                                                   
                           BATALLA DEL MAR DE CORAL - 1942                         
                                                                                   
           Armada de los Estados Unidos    vs.    Armada Imperial de Japón         
                                                                                   
    ===============================================================================
    ===============================================================================
                                                                                   
                                                                                   
                              $o"                                                  
                              $  "                   .........                     
                             $$$      .oo..     'oooo'oooo'ooooooooo....           
                              $       $$$$$$$                                      
                          .ooooooo.   $$!!!!!                                      
                        .'.........'. $$!!!!!      o$$oo.   ...oo,oooo,oooo'ooo''  
          $          .o'  oooooo   '.$$!!!!!      $$!!!!!       'oo''oooo''        
        ..o$ooo...    $                '!!''!.     $$!!!!!                         
        $    ..  '''oo$$$$$$$$$$$$$.    '    'oo.  $$!!!!!                         
        !.......      '''..$$ $$ $$$   ..        '.$$!!''!                         
        !!$$$!!!!!!!!oooo......   '''  $$ $$ :o           'oo.                     
        !!$$$!!!$$!$$!!!!!!!!!!oo.....     ' ''  o$$o .      ''oo..                
        !!!$$!!!!!!!!!!!!!!!!!!!!!!!!!!!!ooooo..      'o  oo..    $                
         '!!$$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!oooooo..  ''   ,$                
          '!!$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!oooo..$$                
           !!$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$'                
           '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$!!!!!!!!!!!!!!!!!!,                
       .....$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$....            
                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                      o o                                          
                                      o ooo                                        
                                       o oo                                        
                                           o o      |   #)                         
                                            oo     _|_|_#_                         
                                              o   |       |                        
         __                    ___________________|       |_________________       
        |   -_______-----------                                              \\    
       >|    _____                                                   --->     )    
        |__ -     ---------_________________________________________________ /     
                                                                                   
                                                                                   
                                                                                   
                                                                                   
    ===============================================================================
    ===============================================================================
                                                                                   
    `;

    console.log(pintadoInicial);                                                    
}

function dibujaAvionPicado() {

    const avionPicado =`
                                                         
                               \\    |\\                 
                                \\   | \\                
                                ____| |__                
                                \\___ \\|__\\            
                                    \\  \\               
                                     |  \\               
                                     \\ * \\_            
                            \\         \\  \\ \\     \\  
                             \\        /\\  \\|\\ _   \\ 
                             ________/  X  ~~//_____     
                             \\_________/ \\  //|_____\\ 
                                     *    \\/o/  *       
                                      *   //     *       
                                         ~               
                                        *           *    
    `;

    console.log(avionPicado);
}

function pintaRondas(tableroPropio) {

    let rellenar = "=".repeat(tableroPropio.nombreJugador.length);

    console.log(`
     =================${rellenar}======================
     ========== Es el TURNO de la ${tableroPropio.nombreJugador.toUpperCase()}  ==========
     =================${rellenar}======================
    
                                   RONDA Nº ${tableroPropio.rondasDisparo}                        
                                   ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺`);
}

function pintaDisparosYNaviosEnemigos(tableroPropio, tableroEnemigo) {
    console.log(`     ========================================================================\n\t\t   OBUSES: ${tableroPropio.disparosJugador}   \t\t   NAVÍOS ENEMIGOS: ${tableroEnemigo.buquesFlota}\n     ========================================================================\n `);

}

function pintaImpacto(apuntadoHorizontal, apuntadoVertical, codigoNavioDañado, tableroPropio, tableroEnemigo){
    
    console.log(`     Apunten a ${apuntadoHorizontal}${apuntadoVertical}. FUEGOOOOOOOOOO 💣💣💣\n\n     💥💥💥 ¡ IMPACTO. Objetivo enemigo ${codigoNavioDañado} TOCADO en ${apuntadoHorizontal}${apuntadoVertical} ! 💥💥💥\n     ========================================================================\n `);

    console.log(`     Tablero enemigo ( ${tableroEnemigo.nombreJugador.toUpperCase()} ):`);
    console.table(tableroEnemigo.escenario);

    console.log(`\n     Tablero propio ( ${tableroPropio.nombreJugador.toUpperCase()} ):`);
    console.table(tableroPropio.escenario);

}

function pintaHundimiento(tableroEnemigo, codigoNavioDañado){
   
    console.log(`\n   ¡El navio enemigo ${codigoNavioDañado} de la ${tableroEnemigo.nombreJugador} ha sido hundido!¡Hip, hip, hurraaaa!\n `);
    
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

    console.log(`   🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊\n\n   ¡La ${tableroPropio.nombreJugador} ha conseguido la VICTORIA TOTAL!\n\n   La ${tableroEnemigo.nombreJugador} ha sido completamente destruida\n \n   😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕 😵 🤕`);
}

function pintaDisparoErrado(apuntadoHorizontal, apuntadoVertical, tableroPropio, tableroEnemigo){

    console.log(`     Apunten a ${apuntadoHorizontal}${apuntadoVertical}. FUEGOOOOOOOOOO 💣💣💣\n\n     ❌❌❌ ¡ Objetivo intacto mi capitán ! El proyectil ha caído en el 🌊\n `);
    
    console.log(`     Tablero enemigo ( ${tableroEnemigo.nombreJugador.toUpperCase()} ):`)
    console.table(tableroEnemigo.escenario);
    
    console.log(`\n     Tablero propio ( ${tableroPropio.nombreJugador.toUpperCase()} ):`)
    console.table(tableroPropio.escenario);
}


function pintaEstadisticas(tablero1, tablero2, DISPAROS){

    dibujaAvionEstadisticas();

    console.log(`
                                                                                  
    ===============================================================================
      Los resultados para la ${tablero1.nombreJugador.toUpperCase()} han sido:
                                                                                  
         Disparos efetuados: ${tablero1.diparosAcertados + tablero1.disparosErrados}
         Disparos acertados: ${tablero1.diparosAcertados}
         Disparos errados: ${tablero1.disparosErrados}
         Disparos restantes: ${DISPAROS - tablero1.diparosAcertados - tablero1.disparosErrados}
                                                                                  
         Buques enemigos hundidos: ${tablero1.buquesEnemigosHundidos}.
         Buques perdidos: ${tablero2.buquesEnemigosHundidos}
         Buques restantes: ${tablero1.buquesFlota - tablero2.buquesEnemigosHundidos}
                                                                                  
         Rondas de disparo efectuadas: ${tablero1.rondasDisparo}
                                                                                  
    ===============================================================================
      Los resultados para la ${tablero2.nombreJugador.toUpperCase()} han sido:
                                                                                  
         Disparos efetuados: ${tablero2.diparosAcertados + tablero2.disparosErrados}
         Disparos acertados: ${tablero2.diparosAcertados}
         Disparos errados: ${tablero2.disparosErrados}
         Disparos restantes: ${DISPAROS - tablero2.diparosAcertados - tablero2.disparosErrados}
                                                                                  
         Buques enemigos hundidos: ${tablero2.buquesEnemigosHundidos}
         Buques perdidos: ${tablero1.buquesEnemigosHundidos}
         Buques restantes: ${tablero1.buquesFlota - tablero1.buquesEnemigosHundidos}
                                                                                  
         Rondas de disparo efectuadas: ${tablero2.rondasDisparo}
         `);
                                                                                  
    console.log(`Tablero definitivo de la ( ${tablero1.nombreJugador.toUpperCase()} ):`);
    console.table(tablero1.escenario);
    console.log(`Tablero definitivo de la ( ${tablero2.nombreJugador.toUpperCase()} ):`); 
    console.table(tablero2.escenario);

}



function dibujaAvionEstadisticas(){

    const avionEstadisticas =`
          ____________________________                                   
          \\                           \\          ___        ______ |    
           \\  ESTADÍSTICAS             \\        /   \\___-=0´/|0´/__|   
            \\            DE LA          \\_______\\          / | /    )  
            /                  BATALLA  /        ´/-==__ _/__|/__=-|      
           /                           /         *             \\ | |     
          /___________________________/                        (o)        
    `;

console.log(avionEstadisticas);

}

