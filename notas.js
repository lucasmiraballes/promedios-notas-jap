function Promedio(ev1, ev2, ev3, ecommerce) {
    
    let prom_ev1 = (ev1 * 0.3);
    let prom_ev2 = (ev2 * 0.2);
    let prom_ev3 = (ev3 * 0.2);
    let prom_ecommerce = (ecommerce * 0.3);

    let promedioFinal = (ev1 + ev2 + ev3 + ecommerce) / 4;
    let promedioFinal2 = (prom_ev1 + prom_ev2 + prom_ev3 + prom_ecommerce);

    return {
        prom_ev1,
        prom_ev2,
        prom_ev3,
        prom_ecommerce,
        promedioFinal,
        promedioFinal2
    };
}

document.addEventListener("DOMContentLoaded", function(e) {

    let  calc_prom = document.getElementById("calc_prom");

    calc_prom.addEventListener("click", function() {

        let ev1 = parseFloat(document.getElementById("ev1").value);
        let ev2 = parseFloat(document.getElementById("ev2").value);
        let ev3 = parseFloat(document.getElementById("ev3").value);
        let ecommerce = parseFloat(document.getElementById("ecommerce").value);
    
        if (ev1 >= 0 && ev2 >= 0 && ev3 >= 0 && ecommerce >= 0) {

        let resultados = Promedio(ev1, ev2, ev3, ecommerce);
    
        let nuevoTexto = document.getElementById("nuevo_texto");
        nuevoTexto.innerHTML = 
        `
        <p style="color:black">Promedio 1° evaluación: <span  style="color:green"> ${resultados.prom_ev1} </span> / 30 </p>
        <p style="color:black">Promedio 2° evaluación: <span  style="color:green"> ${resultados.prom_ev2} </span> / 20</p>
        <p style="color:black">Promedio 3° evaluación: <span  style="color:green"> ${resultados.prom_ev3} </span> / 20</p>
        <p style="color:black">Promedio ecommerce: <span  style="color:green"> ${resultados.prom_ecommerce} </span> / 30</p>
        <p style="color:black">Promedio final (suma): <span  style="color:green"> ${resultados.promedioFinal} </span> / 100</p>
        <p style="color:black"><strong>Promedio final (ponderado):</strong> <span  style="color:green"> ${resultados.promedioFinal2} </span> / 100</p>
        <br>
        <br>
        <p><u>Aclaración:</u></p> 
        <p>El promedio final (suma) abarca la suma de los primeros valores dividido por 4.</p>
        <p>Mientras que el promedio final (ponderado) es la suma de los promedios.`;

    }   else {
        alert("Error. Es necesario llenar todos los campos");
    }})
})

