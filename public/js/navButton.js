const barChartContainer = document.getElementById('bar-chart-container')
const pieChartContainer = document.getElementById('pie-chart-container')
const lineChartContainer = document.getElementById('line-chart-container')
const areaChartContainer = document.getElementById('area-chart-container')
const progressBarContainer = document.getElementById('progress-bar-container')

const progress = document.getElementById('graph-dashboard')
const dashboard = document.getElementById('graph-dashboard')

let graphContainerObjects = [barChartContainer,pieChartContainer,lineChartContainer, areaChartContainer, progressBarContainer]

graphContainerObjects.forEach(element => {
    if (element.id != 'bar-chart-container' ){
         element.style.display = 'none'
    }
});

function displayNone(){
    graphContainerObjects.forEach(element => {
        element.style.display = 'none'
    });
}

function barGraphFun(){
    displayNone()
    reduceOpacity()
    bargraphText.style.opacity = '1'
    barChartContainer.style.display = 'block'
    dashboard.style.flexDirection = 'row-reverse'
    
    
}
function dashboardFun(){
    displayNone()
    reduceOpacity()
    dashboardText.style.opacity = '1'
    barChartContainer.style.display = 'block'
    dashboard.style.flexDirection = 'row'

}
function pieChartFun(){
    displayNone()
    reduceOpacity()
    piechartText.style.opacity = '1'
    pieChartContainer.style.display = 'block'
    dashboard.style.flexDirection = 'row-reverse'

}
function lineGraphFun(){
    displayNone()
    reduceOpacity()
    linegraphText.style.opacity = '1'
    lineChartContainer.style.display = 'block'
    dashboard.style.flexDirection = 'row-reverse'

}
function areaChartFun(){
    displayNone()
    reduceOpacity()
    areagraphText.style.opacity = '1'
    areaChartContainer.style.display = 'block'
    dashboard.style.flexDirection = 'row-reverse'

}

function doughnutChartrFun(){
    displayNone()
    reduceOpacity()
    doughnutChartText.style.opacity = '1'
    progressBarContainer.style.display = 'block'
    dashboard.style.flexDirection = 'row-reverse'

}
const dashboardText = document.getElementById('dashboard-text')
const bargraphText = document.getElementById('bargraph-text')
const linegraphText = document.getElementById('linegraph-text')
const piechartText = document.getElementById('piechart-text')
const areagraphText = document.getElementById('areagraph-text')
const doughnutChartText = document.getElementById('doughnutChart-text')
const textObj = [dashboardText, bargraphText, linegraphText, piechartText, areagraphText, doughnutChartText]

function reduceOpacity(){
    textObj.forEach(function(item){
        item.style.opacity = '0.4'
    })

}