import {FILAS, COLUMNAS, PORTAVIONES, ACORAZADOS, CRUCEROS, DESTRUCTORES, SUBMARINOS} from "./data.js";
import {creaArmada, posicionaArmada, rondaDeDisparo, dibujaComienzoBatalla, estadisticas} from "./functions.js";
import { Tablero } from "./classTablero.js";


let tablero1 = new Tablero("Armada de los Estados Unidos 🎖️ ");
tablero1.tableroFisico(FILAS, COLUMNAS);
let tablero2 = new Tablero("Armada Imperial Japonesa 🔴");
tablero2.tableroFisico(FILAS, COLUMNAS);
let armada = creaArmada(PORTAVIONES, ACORAZADOS, CRUCEROS, DESTRUCTORES, SUBMARINOS);

posicionaArmada(armada, tablero1);
posicionaArmada(armada, tablero2);



dibujaComienzoBatalla(tablero1, tablero2);

let finPartida = false;
while(!finPartida){
    finPartida = rondaDeDisparo(tablero1, tablero2);
    finPartida = rondaDeDisparo(tablero2, tablero1);
}

console.log();
console.log("   LA PARTIDA HA FINALIZADO.");
console.log();
estadisticas(tablero1, tablero2);








