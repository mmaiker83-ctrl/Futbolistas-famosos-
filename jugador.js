const nombre = document.getElementById("nombre");
const info = document.getElementById("info");

const jugador = localStorage.getItem("jugador");

const datos = {
    messi:{nombre:"Lionel Messi",info:"Campeón del mundo 2022, leyenda del fútbol."},
    cristiano:{nombre:"Cristiano Ronaldo",info:"Máximo goleador histórico."},
    neymar:{nombre:"Neymar Jr",info:"Talento y magia brasileña."},
    mbappe:{nombre:"Mbappé",info:"Velocidad brutal y campeón mundial."},
    haaland:{nombre:"Haaland",info:"Delantero imparable."},
    ronaldinho:{nombre:"Ronaldinho",info:"Magia pura en el fútbol."},
    pele:{nombre:"Pelé",info:"Rey del fútbol."},
    maradona:{nombre:"Maradona",info:"Ídolo argentino histórico."},
    zidane:{nombre:"Zidane",info:"Elegancia total."},
    r9:{nombre:"Ronaldo Nazario",info:"El fenómeno."},
    modric:{nombre:"Modric",info:"Balón de Oro 2018."},
    benzema:{nombre:"Benzema",info:"Delantero técnico."},
    salah:{nombre:"Salah",info:"Rápido y goleador."},
    kdb:{nombre:"De Bruyne",info:"Asistencias perfectas."},
    vinicius:{nombre:"Vinicius Jr",info:"Velocidad y regate."},
    bellingham:{nombre:"Bellingham",info:"Joven estrella."},
    lewandowski:{nombre:"Lewandowski",info:"Goleador top."},
    ramos:{nombre:"Sergio Ramos",info:"Defensa líder."},
    iniesta:{nombre:"Iniesta",info:"Héroe del Mundial 2010."},
    xavi:{nombre:"Xavi",info:"Maestro del pase."},
    dybala:{nombre:"Dybala",info:"Técnica pura."},
    griezmann:{nombre:"Griezmann",info:"Versátil y goleador."},
    kane:{nombre:"Harry Kane",info:"Delantero completo."},
    son:{nombre:"Son",info:"Velocidad brutal."},
    neuer:{nombre:"Neuer",info:"Portero moderno."},
    buffon:{nombre:"Buffon",info:"Leyenda en portería."},
    suarez:{nombre:"Luis Suárez",info:"Goleador agresivo."},
    hazard:{nombre:"Hazard",info:"Regate increíble."},
    bale:{nombre:"Bale",info:"Potencia y velocidad."},
    henry:{nombre:"Henry",info:"Leyenda del Arsenal."}
};

if (datos[jugador]) {
    nombre.textContent = datos[jugador].nombre;
    info.textContent = datos[jugador].info;
}

function volver() {
    window.location.href = "index.html";
}
