
export class Tablero {
    constructor (numeroJugador){
        this.numeroJugador = numeroJugador;
        this.escenario = []
    }
    tableroFisico(FILAS, COLUMNAS) {
        for(let i = 0; i < FILAS; i++){
            this.escenario.push([]);
            for(let x = 0; x < COLUMNAS; x++){
                this.escenario[i].push(" ");
            }
        }
    }
}