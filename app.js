const express = require('express');
const dataModule = require('./dataModule')
const app = express();
const port = 3000; 

app.set("view engine", "ejs");
app.use(express.static("public"));

//Single page application
app.get('/', (req, res) => {
    const studentNames = []
    const studentHeight = []
    const year = []
    const passRate = []
    const month = []
    const sales = []
    const days = []
    const temperature = []
    const assignment = []
    const weights = []

    dataModule.studentData.forEach(function(element){
        studentNames.push(element.studentName)
        studentHeight.push(element.studentHeight)
    })

    
    dataModule.studentPassRate.forEach(function(element){
      year.push(element.year)
      passRate.push(element.passRate)
   })

   dataModule.monthlySales.forEach(function(element){
      month.push(element.month)
      sales.push(element.sales)
    })

    dataModule.temperature.forEach(function(element){
      days.push(element.day)
      temperature.push(element.temperature)
    })
    
    dataModule.weights.forEach(function(element){
      assignment.push(element.Assignment)
      weights.push(element.weight)
    })


    discount = dataModule.discount
    socialMedia = dataModule.socialMedia
    appConfig = dataModule.appConfig
    data = {studentNames, studentHeight, discount, year, passRate,month,sales, days, temperature, assignment, weights, socialMedia, appConfig }
    res.render('index', data);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
