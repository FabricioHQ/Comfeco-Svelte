export const counter = (fechaFinal) => {
  let now = new Date().getTime(),
    tiempoRestante = Math.abs(
      (new Date(fechaFinal).getTime() - now + 1000) / 1000
    ),
    seconds = ('0' + Math.floor(tiempoRestante % 60)).slice(-2),
    minutes = ('0' + Math.floor((tiempoRestante / 60) % 60)).slice(-2),
    hours = ('0' + Math.floor((tiempoRestante / 3600) % 24)).slice(-2),
    days = Math.floor(tiempoRestante / (3600 * 24));

  return {
    tiempoRestante,
    seconds,
    minutes,
    hours,
    days,
  };
};
