const FILAS = 10;
const COLUMNAS = 10;

class Tablero {
    constructor (numeroJugador){
        this.numeroJugador = numeroJugador;
        this.escenario = []
        this.tableroFisico = function(FILAS, COLUMNAS){
            for(let i = 0; i <= FILAS; i++){
                this.escenario.push([]);
                for(let x = 0; x <= COLUMNAS; x++){
                    this.escenario[i][x] = "O"
                }
            }
            return this.escenario;
        }
    }
}

let tablero1 = new Tablero("Jugador1");
tablero1.tableroFisico(FILAS, COLUMNAS);
console.log(tablero1.escenario);