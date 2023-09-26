// Bar-chart graph 
let barChart = document.getElementById('bar-chart')
const data1 ={
    labels: studentNames.split(','),
    datasets:[
        {
            label: 'Height of Group Members (cm)',
            data:studentHeight.split(','),
            backgroundColor: '#00A783'
        }
    ]

}
const config1 = {
    type: 'bar',
    data: data1,
    options: {
        scales: {
            x: {
                display: true,
                title: {
                  display: true,
                  text: 'Group Members'
                }
              },
              y: {
                
                    beginAtZero: true,
                    display: true,
                    title: {
                    display: true,
                    text: 'Height'
                }
              }
        }
    },
};

const barChartObj = new Chart(
    barChart,
    config1
)

//line chart
let lineChart = document.getElementById('line-chart')
const data2 ={
    labels: year.split(','),
    datasets:[
        {
            label: 'Student Pass Rate',
            data:passRate.split(','),
            backgroundColor: '#00A783'
        }
    ]

}
const config2 = {
    type: 'line',
    data: data2,
    options: {
        scales: {
            x: {
                display: true,
                title: {
                  display: true,
                  text: 'Year'
                }
              },
              y: {
                
                    beginAtZero: true,
                    display: true,
                    title: {
                    display: true,
                    text: 'Average'
                 }  
              }
        }
    },
};

const lineChartObj = new Chart(
    lineChart,
    config2
)

// pie chart
const pieChart = document.getElementById('pie-chart')
const data3 = {
    labels: month.split(','),
    datasets: [{
        data: sales.split(','), 
        backgroundColor: ['#3B5999', '#D44837', '#00ACEE', '#00A783', '#d4ae05'], 
        borderWidth: 0, 
    }],
};

const config3 = {
    type: 'pie',
    data: data3,
    options: {
        maintainAspectRatio: false, 
        responsive: true,
        legend: {
            position: 'right', 
            labels: {
                fontColor: 'black',
            },
        },
        tooltips: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
            titleFontColor: 'white', 
            bodyFontColor: 'white', 
            displayColors: false, 
        },
    },
};

new Chart(pieChart, config3);

//area graph
const data4 = {
    labels: days.split(','),
    datasets: [{
        label: 'Temperature against days',
        data: temperature.split(','),
        fill: true, 
        backgroundColor: 'rgba(0, 167, 131, 0.4)', 
        borderColor: '#00A783', 
        borderWidth: 2,
    }],
};

const config4 = {
    type: 'line',
    data: data4,
    options: {
        scales: {
            x: {
                display: true,
                title: {
                  display: true,
                  text: 'Days'
                }
              },
              y: {
                
                    beginAtZero: true,
                    display: true,
                    title: {
                    display: true,
                    text: 'Temp'
                 }  
              }
        },
    },
};

const areaGraph = document.getElementById('area-chart');
new Chart(areaGraph, config4);


//Doughnut chart
const data5 = {
    labels: assignments.split(','),
    datasets: [{
        data: weights.split(','), 
        backgroundColor: ['#ff6384', '#36a2eb', '#00A783'], 
    }],
};

const config5 = {
    type: 'doughnut',
    data: data5,
    options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                position: 'bottom', 
                labels: {
                    fontColor: 'black', 
                },
            },
        },
    },
};


const doughnutChartObj = document.getElementById('doughnut-chart');
new Chart(doughnutChartObj, config5);





