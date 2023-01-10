# Creación de los tableros de juego:

* Clase tablero.
* Creo los barcos.
* Situo aleatoriamente los barcos en los dos tableros.
* Pinto el tablero inicial.
* Comienza la batalla:
    Dispara el Jugador 1 hasta que disparo FALLE:
        Jugador 2 revisa calificacion de disparo:
            Si ha acertado en un buque:
                Pone en esa casilla la "X" de tocado (icono fuego más adelante)
                Si tiene todas las partes del buque tocadas:
                    Dice tocado y hundido
                En otro caso:
                    Dice tocado:
            En otro caso la ronda de disparo pasa al Jugador 2:
