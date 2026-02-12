import Chart from "chart.js/auto";

export function pintarGraficaDescargas(idContenedor, libros) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  // utilizamos innerHTML para que limpie en caso de duplicados al recargar
  contenedor.innerHTML = '<canvas id="miCanvas"></canvas>';
  const ctx = document.getElementById("miCanvas").getContext("2d");

  // FILTRADO: Top 10 libros con más descargas
  const top10 = [...libros]
    .sort((a, b) => b.total_descargas - a.total_descargas)
    .slice(0, 10);

  //Chart.js dibuja gráficos dentro de un canvas
  //new Chart(PRIMER_PARÁMETRO -> elemento canvas en HTML,
  //          SEGUNDO_PARÁMETRO -> un objeto de configuración)

  new Chart(ctx, {
    //type: como se dibujan los datos
    type: "bar", //barras verticales
    data: {
      //labels -> Datos del eje X
      labels: top10.map((l) => l.titulo.substring(0, 12) + "..."),
      //datasets es un array que representa varios datos
      datasets: [
        {
          //label es el nombre de la serie de datos
          label: "Descargas: Top 10",
          data: top10.map((l) => l.total_descargas),
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
      //y comenzará en 0 e irá hasta 10
      //La escala irá de 1 en 1
      y: {
        min: 0,
        max: 70,
        ticks: {
          stepSize: 1
        }
    }}
    },
  });
}
