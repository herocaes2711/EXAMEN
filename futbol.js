class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.jugadores = [];
    }

    agregarJugador(jugador) {
        this.jugadores.push(jugador);
    }
}

class Jugador {
    constructor(nombre, equipo) {
        this.nombre = nombre;
        this.equipo = equipo;
    }

    obtenerInformacion() {
        return "jugador: "+ this.nombre +" equipo: "+ this.equipo.nombre;
    }
}

document.getElementById("mostrarDatos").addEventListener("click", function() {
    let nombreEquipo = document.getElementById("nombreEquipo").value;
    let nombreJugador = document.getElementById("nombreJugador").value;

    if (nombreEquipo && nombreJugador) {
        let equipo = new Equipo(nombreEquipo);
        let jugador = new Jugador(nombreJugador, equipo);
        equipo.agregarJugador(jugador);
        
        document.getElementById("detalles").innerHTML = jugador.obtenerInformacion();
    } else {
        alert("ingrese el nombre del equipo y del jugador");
    }
});
