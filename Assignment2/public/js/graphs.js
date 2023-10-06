//Doughnut chart
const data5 = {
    labels: top3products.split(','),
    datasets: [{
        
        data: top3prices.split(','), 
        backgroundColor: ['#ff6384', '#36a2eb', '#00A783'], 
    }],
};

const config5 = {
    type: 'doughnut',
    data: data5,
    options: {
        title: {
            display: true,
            text: 'Top 3 Expensive products',
            fontSize: 16
        },
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
if (doughnutChartObj != null){
    new Chart(doughnutChartObj, config5);
}



// Bar-chart graph 
let barChart = document.getElementById('bar-chart')
const data1 ={
    labels: products.split(','),
    datasets:[
        {
            label: 'Price against Products',
            data:prices.split(','),
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
                  text: 'Products'
                }
              },
              y: {
                
                    beginAtZero: true,
                    display: true,
                    title: {
                    display: true,
                    text: 'Prices'
                }
              }
        }
    },
};

const barChartObj = new Chart(
    barChart,
    config1
)



//area graph
const data4 = {
    labels: products.split(','),
    datasets: [{
        label: 'Quantity against products',
        data: quantity.split(','),
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
                  text: 'Products'
                }
              },
              y: {
                
                    beginAtZero: true,
                    display: true,
                    title: {
                    display: true,
                    text: 'Quantity'
                 }  
              }
        },
    },
};

const areaGraph = document.getElementById('area-chart');
new Chart(areaGraph, config4);








