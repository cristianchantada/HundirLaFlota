export {dibujaBuque, dibujaAvionPicado, dibujaAvionEstadisticas, pintaRondas, pintaDisparosYNaviosEnemigos, pintaImpacto, pintaVictoriaTotal, pintaDisparoErrado, pintaEstadisticas, dibujaComienzoBatalla, pintaFinMunicion};

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
    let rellenar = "=".repeat(tableroPropio.nombreJugador.length)
    console.log();
    console.log(`====================${rellenar}=========================`);
    console.log(`============= Es el TURNO de la ${tableroPropio.nombreJugador.toUpperCase()}  =============`);
    console.log(`====================${rellenar}=========================`);
    console.log();
    console.log(`                                     RONDA Nº ${tableroPropio.rondasDisparo}                        `);
    console.log();
}

function pintaDisparosYNaviosEnemigos(tableroPropio, tableroEnemigo) {
    console.log("|⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺|");           
    console.log(`| OBUSES: ${tableroPropio.disparosJugador}       NAVÍOS ENEMIGOS: ${tableroEnemigo.buquesFlota}                                      |`);
    console.log("|____________________________________________________________________________|");
    console.log();

}

function pintaImpacto(apuntadoHorizontal, apuntadoVertical, codigoNavioDañado, tableroPropio, tableroEnemigo){
    console.log(`   Apunten a ${apuntadoHorizontal}${apuntadoVertical}. FUEGOOOOOOOOOO 💣💣💣`);
    console.log();
    console.log(`   💥💥💥 ¡ IMPACTO. Objetivo enemigo ${codigoNavioDañado} TOCADO en ${apuntadoHorizontal}${apuntadoVertical} ! 💥💥💥`);
    console.log();
    console.log(`   Tablero enemigo ( ${tableroEnemigo.nombreJugador.toUpperCase()} ):`)
    console.table(tableroEnemigo.escenario);
    console.log();
    console.log(`   Tablero propio ( ${tableroPropio.nombreJugador.toUpperCase()} ):`)
    console.table(tableroPropio.escenario);
}

function pintaFinMunicion(tableroPropio, tableroEnemigo) {
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
}

function pintaVictoriaTotal(tableroPropio, tableroEnemigo){

    console.log("   🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊 🎉 🎊")
    console.log(`   ¡La ${tableroPropio.nombreJugador} ha conseguido la VICTORIA TOTAL!`);
    console.log();
    console.log(`   La ${tableroEnemigo.nombreJugador} ha sido completamente destruida`);
    console.log("   😵💀😵‍💫🤕😵💀😵‍💫🤕😵💀😵‍💫🤕😵💀😵‍💫🤕😵💀😵‍💫🤕😵💀😵‍💫🤕😵💀😵‍💫🤕")
    console.log();
}

function pintaDisparoErrado(apuntadoHorizontal, apuntadoVertical, tableroPropio, tableroEnemigo){

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


function pintaEstadisticas(tablero1, tablero2, DISPAROS, PORTAVIONES, ACORAZADOS, CRUCEROS, DESTRUCTORES, SUBMARINOS){;

    dibujaAvionEstadisticas();

    let pintaTableroEscenarioDefinitivo = function (tableroAPintar){console.table(tableroAPintar)};

    console.log(`
                                                                                  
    ===============================================================================
      Los resultados para la ${tablero1.nombreJugador.toUpperCase()} han sido:
                                                                                  
         Disparos efetuados: ${tablero1.diparosAcertados + tablero1.disparosErrados}
         Disparos acertados: ${tablero1.diparosAcertados}
         Disparos errados: ${tablero1.disparosErrados}
         Disparos restantes: ${DISPAROS - tablero1.diparosAcertados - tablero1.disparosErrados}
                                                                                  
         Buques enemigos hundidos: ${tablero1.buquesEnemigosHundidos}.
         Buques perdidos: ${tablero2.buquesEnemigosHundidos}
         Buques restantes: ${PORTAVIONES + ACORAZADOS + CRUCEROS + DESTRUCTORES + SUBMARINOS - tablero2.buquesEnemigosHundidos}
                                                                                  
         Rondas de disparo efectuadas: ${tablero1.rondasDisparo}
                                                                                  
    ===============================================================================
      Los resultados para la ${tablero2.nombreJugador.toUpperCase()} han sido:
                                                                                  
         Disparos efetuados: ${tablero2.diparosAcertados + tablero2.disparosErrados}
         Disparos acertados: ${tablero2.diparosAcertados}
         Disparos errados: ${tablero2.disparosErrados}
         Disparos restantes: ${DISPAROS - tablero2.diparosAcertados - tablero2.disparosErrados}
                                                                                  
         Buques enemigos hundidos: ${tablero2.buquesEnemigosHundidos}
         Buques perdidos: ${tablero1.buquesEnemigosHundidos}
         Buques restantes: ${PORTAVIONES + ACORAZADOS + CRUCEROS + DESTRUCTORES + SUBMARINOS - tablero1.buquesEnemigosHundidos}
                                                                                  
         Rondas de disparo efectuadas: ${tablero2.rondasDisparo}
         `);
                                                                                  
    console.log(`
       Tablero definitivo de la ( ${tablero1.nombreJugador.toUpperCase()} ):
    ${pintaTableroEscenarioDefinitivo(tablero1.escenario)};
                                                                                   
       Tablero definitivo de la ( ${tablero2.nombreJugador.toUpperCase()} ):
    ${pintaTableroEscenarioDefinitivo(tablero1.escenario)}`);

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

