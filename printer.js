export {dibujaBuque, dibujaAvionPicado, dibujaAvionEstadisticas, pintaRondas, pintaDisparosYNaviosEnemigos, pintaImpacto, pintaVictoriaTotal, pintaDisparoErrado, pintaEstadisticas, dibujaComienzoBatalla, pintaFinMunicion};

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

function dibujaBuque (){

    let a = '                          $o"                                                  '
    let b = '                          $  "                   .........                     '
    let c = "                         $$$      .oo..     'oooo'oooo'ooooooooo....           "
    let d = "                          $       $$$$$$$                                      "
    let e = "                      .ooooooo.   $$!!!!!                                      "
    let f = "                    .'.........'. $$!!!!!      o$$oo.   ...oo,oooo,oooo'ooo''  "
    let g = "      $          .o'  oooooo   '.$$!!!!!      $$!!!!!       'oo''oooo''        "
    let h = "    ..o$ooo...    $                '!!''!.     $$!!!!!                         "
    let i = "    $    ..  '''oo$$$$$$$$$$$$$.    '    'oo.  $$!!!!!                         "
    let j = "    !.......      '''..$$ $$ $$$   ..        '.$$!!''!                         "
    let k = "    !!$$$!!!!!!!!oooo......   '''  $$ $$ :o           'oo.                     "
    let l = "    !!$$$!!!$$!$$!!!!!!!!!!oo.....     ' ''  o$$o .      ''oo..                "
    let m = "    !!!$$!!!!!!!!!!!!!!!!!!!!!!!!!!!!ooooo..      'o  oo..    $                "
    let n = "     '!!$$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!oooooo..  ''   ,$                "
    let o = "      '!!$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!oooo..$$                "
    let p = "       !!$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$'                "
    let q = "       '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$!!!!!!!!!!!!!!!!!!,                "
    let r = "   .....$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$....            "

    let ab ="                                  o o                                          "
    let bb ="                                  o ooo                                        "
    let cb ="                                   o oo                                        "
    let db ="                                       o o      |   #)                         "
    let eb ="                                        oo     _|_|_#_                         "
    let fb ="                                          o   | USS   |                        "
    let gb ="     __                    ___________________|  NAVY |_________________       "
    let hb ="    |   -_______-----------                                              \\    "
    let ib ="   >|    _____                                                   --->     )    "
    let jb ="    |__ -     ---------_________________________________________________ /     "

    let w = "       Armada de los Estados Unidos    vs.    Armada Imperial de Japón         "
    let x = "                       BATALLA DEL MAR DE CORAL - 1942                         "
    let y = "                                                                               "
    let z = "==============================================================================="

    console.log(y);
    console.log(z);
    console.log(z);
    console.log(y);
    console.log(x);
    console.log(y);
    console.log(w);
    console.log(y);
    console.log(z);
    console.log(z);
    console.log(y);
    console.log(y);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);
    console.log(j);
    console.log(k);
    console.log(l);
    console.log(m);
    console.log(n);
    console.log(o);
    console.log(p);
    console.log(q);
    console.log(r);
    console.log(y);
    console.log(y);
    console.log(y);
    console.log(y);
    console.log(ab);
    console.log(bb);
    console.log(cb);
    console.log(db);
    console.log(eb);
    console.log(fb);
    console.log(gb);
    console.log(hb);
    console.log(ib);
    console.log(jb);
    console.log(y);
    console.log(y);
    console.log(y);
    console.log(y);
    console.log(z);
    console.log(z);
    console.log(y);
}

function dibujaAvionPicado() {

    console.log();
    console.log("                           \\    |\\");
    console.log("                            \\   | \\");
    console.log("                            ____| |__");
    console.log("                            \\___ \\|__\\");
    console.log("                                \\  \\");
    console.log("                                 |  \\");
    console.log("                                 \\ * \\_");
    console.log("                        \\         \\  \\ \\     \\");
    console.log("                         \\        /\\  \\|\\ _   \\");
    console.log("                         ________/  X  ~~//_____");
    console.log("                         \\_________/ \\  //|_____\\");
    console.log("                                 *    \\/o/  *");
    console.log("                                  *   //     *");
    console.log("                                     ~");
    console.log("                                    *           *")

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

    console.log();
    console.log("===============================================================================");
    console.log(`   Los resultados para la ${tablero1.nombreJugador.toUpperCase()} han sido:`);
    console.log();
    console.log(`      Disparos efetuados: ${tablero1.diparosAcertados + tablero1.disparosErrados}`);
    console.log(`      Disparos acertados: ${tablero1.diparosAcertados}`);
    console.log(`      Disparos errados: ${tablero1.disparosErrados}`);
    console.log(`      Disparos restantes: ${DISPAROS - tablero1.diparosAcertados - tablero1.disparosErrados}`);
    console.log();
    console.log(`      Buques enemigos hundidos: ${tablero1.buquesEnemigosHundidos}.`);
    console.log(`      Buques perdidos: ${tablero2.buquesEnemigosHundidos}`);
    console.log(`      Buques restantes: ${PORTAVIONES + ACORAZADOS + CRUCEROS + DESTRUCTORES + SUBMARINOS - tablero2.buquesEnemigosHundidos}`);
    console.log();
    console.log(`      Rondas de disparo efectuadas: ${tablero1.rondasDisparo}`);

    console.log();
    console.log("===============================================================================");
    console.log(`   Los resultados para la ${tablero2.nombreJugador.toUpperCase()} han sido:`);
    console.log();
    console.log(`      Disparos efetuados: ${tablero2.diparosAcertados + tablero2.disparosErrados}`);
    console.log(`      Disparos acertados: ${tablero2.diparosAcertados}`);
    console.log(`      Disparos errados: ${tablero2.disparosErrados}`);
    console.log(`      Disparos restantes: ${DISPAROS - tablero2.diparosAcertados - tablero2.disparosErrados}`);
    console.log();
    console.log(`      Buques enemigos hundidos: ${tablero2.buquesEnemigosHundidos}`);
    console.log(`      Buques perdidos: ${tablero1.buquesEnemigosHundidos}`);
    console.log(`      Buques restantes: ${PORTAVIONES + ACORAZADOS + CRUCEROS + DESTRUCTORES + SUBMARINOS - tablero1.buquesEnemigosHundidos}`);
    console.log();
    console.log(`      Rondas de disparo efectuadas: ${tablero2.rondasDisparo}`);
    console.log();
    console.log(`   Tablero definitivo de la ( ${tablero1.nombreJugador.toUpperCase()} ):`)
    console.table(tablero1.escenario);
    console.log();
    console.log(`   Tablero definitivo de la ( ${tablero2.nombreJugador.toUpperCase()} ):`)
    console.table(tablero2.escenario);

}



function dibujaAvionEstadisticas(){

    console.log("      ____________________________");
    console.log("      \\                           \\          ___        ______ |");
    console.log("       \\  ESTADÍSTICAS             \\        /   \\___-=0`/|0`/__|");
    console.log("        \\            DE LA          \\_______\\          / | /    )");
    console.log("        /                  BATALLA  /        `/-==__ _/__|/__=-|");
    console.log("       /                           /         *             \\ | |");
    console.log("      /___________________________/                        (o)");

}

