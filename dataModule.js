const studentData = [
    {studentName: 'Andrew', studentHeight: 550 },
    {studentName: 'Prince', studentHeight: 120},
    {studentName: 'Thokozire', studentHeight: 720},
    {studentName: 'Patrick', studentHeight: 320},
    {studentName: 'Israel', studentHeight: 600},
    {studentName: 'Ellen', studentHeight: 250}
]

const monthlySales = [
    {month: 'January', sales: 14000},
    {month: 'February', sales: 15000},
    {month: 'March', sales: 13000},
    {month: 'April', sales: 16000 },
    {month: 'May', sales: 15500}
]

const studentPassRate =[
    {year: 2015, passRate: 71},
    {year: 2016, passRate: 10},
    {year: 2017, passRate: 60},
    {year: 2018, passRate: 40},
    {year: 2019, passRate: 20},
    {year: 2020, passRate: 88},
    {year: 2021, passRate: 50},
    {year: 2022, passRate: 90},
    {year: 2023, passRate: 62},
]

const temperature = [
    {day: 'Monday', temperature:10},
    {day: 'Tuesday', temperature: 15},
    {day: 'Wednesday', temperature: 8},
    {day: 'Thursday', temperature: 20},
    {day: 'Friday', temperature: 18},
    {day: 'Sartuday', temperature: 25},
    {day: 'Sunday', temperature: 30},
]

const discount = [
    {product: 'Phone Cases', discount: 80 },
    {product: 'Screen Protectors', discount: 30},
    {product: 'Chargers', discount: 60 },
    {product: 'Laptop Bags', discount: 70},
    {product: 'Hard Drives', discount: 50},
]

const weights = [
    {Assignment:'Assignment 1' , weight:25},
    {Assignment: 'Assignment 2', weight: 15},
    {Assignment: 'Exams', weight: 60}
]

const socialMedia = [
    {socialMedia: 'facebook', followers:234 },
    {socialMedia: 'google plus' , followers: 680},
    {socialMedia: 'Whatsapp', followers: 234},
    {socialMedia: 'Twitter', followers: 923},
]

const appConfig = {
    title: 'Group Assignment 1',
    user: 'Group One',
    viewers: 200,
    settings: 13
}

module.exports = {studentData, discount,studentPassRate, monthlySales, temperature, weights, socialMedia, appConfig}
