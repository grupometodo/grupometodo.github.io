// Obtener el contexto del lienzo (canvas)
const ctx = document.getElementById('myChart').getContext('2d');

// Datos para el gráfico
const data = {
  labels: ['Organizados', 'Desorganizados'],
  datasets: [{
    label: 'Resultados',
    data: [80, 20],
    backgroundColor: [
      'rgba(54, 162, 235, 0.5)', // Color para "Organizados"
      'rgba(255, 99, 132, 0.5)'  // Color para "Desorganizados"
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)', // Borde para "Organizados"
      'rgba(255, 99, 132, 1)'  // Borde para "Desorganizados"
    ],
    borderWidth: 1
  }]
};

// Opciones del gráfico
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 20
      }
    }
  }
};

// Crear el gráfico de barras
const chart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

//Grafico 2
// Obtener el contexto del lienzo (canvas)
const ctx2 = document.getElementById('myChart2').getContext('2d');

// Datos para el gráfico
const data2 = {
  labels: ['Productividad', 'Enfoque', 'Eficiencia'],
  datasets: [{
    label: 'Beneficios',
    data: [70, 60, 80],
    backgroundColor: [
      'rgba(75, 192, 192, 0.5)', // Color para "Productividad"
      'rgba(255, 206, 86, 0.5)',  // Color para "Enfoque"
      'rgba(54, 162, 235, 0.5)'   // Color para "Eficiencia"
    ],
    borderColor: [
      'rgba(75, 192, 192, 1)', // Borde para "Productividad"
      'rgba(255, 206, 86, 1)',  // Borde para "Enfoque"
      'rgba(54, 162, 235, 1)'   // Borde para "Eficiencia"
    ],
    borderWidth: 1
  }]
};

// Opciones del gráfico
const options2 = {
  responsive: true,
  maintainAspectRatio: false
};

// Crear el gráfico de rosquilla
const chart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: data2,
  options: options2
});

//Grafico 3
// Obtener el contexto del lienzo (canvas)
const ctx4 = document.getElementById('myChart4').getContext('2d');

// Datos para el gráfico
const data4 = {
  labels: ['Día 0', 'Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6'],
  datasets: [{
    label: 'Eficiencia',
    data: [0, 20, 40, 60, 80, 90, 100],
    backgroundColor: 'rgba(75, 192, 192, 0.5)', // Color del área debajo de la línea
    borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
    borderWidth: 1,
    pointRadius: 3,
    pointBackgroundColor: 'rgba(75, 192, 192, 1)' // Color de los puntos
  }]
};

// Opciones del gráfico
const options4 = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 20
      }
    }
  }
};

// Crear el gráfico de línea
const chart4 = new Chart(ctx4, {
  type: 'line',
  data: data4,
  options: options4
});