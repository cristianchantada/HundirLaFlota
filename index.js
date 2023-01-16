import {FILAS, COLUMNAS, PORTAVIONES, ACORAZADOS, CRUCEROS, DESTRUCTORES, SUBMARINOS, DISPAROS} from "./data.js";
import {creaArmada, posicionaArmada} from "./functions.js";
import { Tablero } from "./classTablero.js";


let tablero1 = new Tablero("jugador1");
tablero1.tableroFisico(FILAS, COLUMNAS);
let tablero2 = new Tablero("jugador2");
tablero2.tableroFisico(FILAS, COLUMNAS);
let armada = creaArmada(PORTAVIONES, ACORAZADOS, CRUCEROS, DESTRUCTORES, SUBMARINOS);

posicionaArmada(armada, tablero1);
posicionaArmada(armada, tablero2);

console.table(tablero1.escenario);
console.table(tablero2.escenario);