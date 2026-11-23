/* ==========================================================================
   CÓDIGO EN TIEMPO REAL: CAPÍTULOS 1 Y 2 DE JAVASCRIPT (JON DUCKETT)
   ========================================================================== */

function actualizarReloj() {
    // 1. Jalamos el tiempo real de la PC (Capítulo 2, pág. 63)
    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();       
    var minutosActuales = fechaActual.getMinutes(); 
    var segundosActuales = fechaActual.getSeconds(); 

    // 2. Formato de dos dígitos para los minutos y segundos
    if (minutosActuales < 10) { minutosActuales = "0" + minutosActuales; }
    if (segundosActuales < 10) { segundosActuales = "0" + segundosActuales; }

    var relojDigital = horaActual + ":" + minutosActuales + ":" + segundosActuales;

    // 3. Evaluamos el saludo dinámico según la hora (Capítulo 2)
    var saludoDinamico;
    if (horaActual >= 0 && horaActual < 12) {
        saludoDinamico = "¡Buenos días!";
    } else if (horaActual >= 12 && horaActual < 18) {
        saludoDinamico = "¡Buenas tardes!";
    } else {
        saludoDinamico = "¡Buenas noches!";
    }
    
    // 4. Armamos la estructura visual con los colores oficiales de la UNFV
    var contenidoHTML = '<h3 style="background-color: #003366; color: #ffffff; padding: 15px; text-align: center; margin: 0; font-family: Arial; line-height: 1.4em;">' 
                         + saludoDinamico + '<br />'
                         + '<span style="font-size: 80%; opacity: 0.85; font-weight: normal;">Hora actual: ' + relojDigital + '</span>'
                         + '</h3>';

    // 5. Inyectamos los datos en la caja correspondiente
    var banner = document.getElementById('banner-saludo');
    if (banner) {
        banner.innerHTML = contenidoHTML;
    }
}

// 🚀 EJECUCIÓN AUTOMÁTICA
actualizarReloj();
setInterval(actualizarReloj, 1000);
