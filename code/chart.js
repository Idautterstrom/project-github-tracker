//DOM-selector for the canvas 👇
const ctx = document.getElementById('chart').getContext('2d')

//"Draw" the chart here 👇

console.log('hello chart')

const config = {
    type: 'doughnut',
    data: {
    labels: [
      'Finished projects',
      'Projects left'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [6, 20-6],
      backgroundColor: [
        '1a1b1a',
        'black'
      ],
      borderColor: [
          'none'
      ],
      hoverOffset: 4
    }]
   },
  };

const repoChart = new Chart(ctx, config)

    