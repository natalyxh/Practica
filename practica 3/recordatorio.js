function establecerRecordatorio(horaRecordatorio, mensaje) {
    // Obtener la fecha y hora actuales
    const ahora = new Date();
  
    // Convertir el texto de fecha y hora del recordatorio en un objeto Date
    const horaRecordatorioDate = new Date(horaRecordatorio);
  
    // Calcular la diferencia en milisegundos entre la hora actual y la hora del recordatorio
    const diferenciaTiempo = horaRecordatorioDate.getTime() - ahora.getTime();
  
    // Si la diferencia es positiva, significa que el recordatorio es para el futuro
    if (diferenciaTiempo > 0) {
      // Configurar un temporizador para mostrar el mensaje después del tiempo calculado
      setTimeout(() => {
        // Obtener y mostrar la fecha y hora del recordatorio
        const anio = horaRecordatorioDate.getFullYear();
        const mes = horaRrecordatorioDate.getMonth() + 1; // Los meses son 0-indexados
        const dia = horaRecodatorioDate.getDate();
        const horas = horaRecordatorioDate.getHours();
        const minutos = horaRecordatorioDate.getMinutes();
        const segundos = horaRecordatorioDate.getSeconds();
  
        console.log(`Recordatorio para ${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}: ${mensaje}`);
      }, diferenciaTiempo);
    } else {
      // La hora ya pasó, mostrar un mensaje informativo
      console.log("La fecha y hora ya han pasado.");
    }
  }
  
  // Recordatorio para la práctica
  establecerRecordatorio("2024-08-29T18:30:50", "¡Es hora de la práctica!");
          