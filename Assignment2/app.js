const express = require('express');
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'group1'
})
connection.connect((err) => {
  if(err){
    console.log('error', err)
    return
  }

})


const app = express();
const port = 3000; 

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");
app.use(express.static("public"));


const appConfig = {
  title: 'Group Assignment 1',
  user: '',
  viewers: 200,
  settings: 0,
  numberOfProducts: 0,
  notification: [],
  loggedIn: false,
  fullname: ' ',
  strength: ''
}


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/logout', (req, res) => {
  res.redirect('/login');
})
app.get('/login', (req, res)=>{
  appConfig.loggedIn = false
  res.render('login', {wrong:false})
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT *  FROM user WHERE username = ? AND password = ?';

  connection.query(query, [username, password], (err, results) => {
    if (err) {
    } else {
      if (results.length > 0) {
        appConfig.loggedIn = true
        appConfig.user = results[0]['firstName']
        appConfig.strength = checkPasswordStrength(results[0]['password'])
        appConfig.fullname = results[0]['firstName'] + ' ' + results[0]['surname']
        res.redirect('/')
      } else {
        res.render('login', {wrong:true})
      }
    }
  });
});


app.get('/', (req, res) => {
  if (!appConfig.loggedIn){
    res.render('login', {wrong:false})
  }
  selectProductQuery((error, dataArray) => {
      
        const top3products = []
        const top3prices = []

        const products = []
        const prices = []
        const quantity = []
        const notification = []

        if(dataArray.length == 0){
          data = { appConfig, dataArray, top3products, top3prices, products, prices, quantity}
          res.render('index', data);
          return
        }

        if(dataArray.length >= 3){
          
            for(let i = 0; i < 3; i++){
              top3products.push(dataArray[i]['productName'])
              top3prices.push(dataArray[i]['price'])
            }
        }
        
        
        dataArray = shuffle(dataArray)
        appConfig.notification.length = 0
        dataArray.forEach(element => {
          products.push(element['productName'])
          prices.push(element['price'])
          quantity.push(element['quantity'])

          if (element['quantity'] < 10){
            appConfig.notification.push(element)
          }
      
        });

        data = { appConfig, dataArray, top3products, top3prices, products, prices, quantity}
        res.render('index', data);
  });


});

app.get('/notification', (req, res) => {
  if (!appConfig.loggedIn){
    res.render('login', {wrong:false})
  }
  selectProductQuery((error, dataArray) => {
    appConfig.notification.length = 0
    dataArray.forEach(element => {
      if (element['quantity'] < 10){
        appConfig.notification.push(element)
      }
    });

    data = {appConfig}
    res.render('notification', data);
  });

})


app.get('/add-product', (req, res) => {
  if (!appConfig.loggedIn){
    res.render('login', {wrong:false})
  }
  selectProductQuery((error, dataArray) => {
      appConfig.notification.length = 0
      dataArray.forEach(element => {
        if (element['quantity'] < 10){
          appConfig.notification.push(element)
        }
      });
        
        data = {appConfig}
        res.render('addProducts', data);
  });
})


app.post('/insertproduct', (req, res)=>{
 
  const{productName, price, quantity, supplier, supplierEmail} = req.body
  productID = 'PD' + productName + supplier
  productID = productID.replace(/\s/g, '')
  const productData = {productID,productName, price, quantity, supplier, supplierEmail}

  connection.query('INSERT INTO product SET ?', productData, (error, results, fields) =>{
    if(error){
      console.error(error)
      return

    }
    console.log(results)
  })
  data = {appConfig}
  res.redirect('/');
})

// mailer function
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bis21-pthawani@poly.ac.mw',
    pass: 'vaneqU22'
  }
});

const mailOptions = {
  from: 'bis21-pthawani@poly.ac.mw',
  to: '',
  subject: 'Product Enquiry',
  text: ''
};



app.get('/email', (req, res)=>{
  if (!appConfig.loggedIn){
    res.render('login', {wrong:false})
  }
  selectProductQuery((error, dataArray) => {
    appConfig.notification.length = 0
    dataArray.forEach(element => {
      if (element['quantity'] < 10){
        appConfig.notification.push(element)
      }
    });
    data = {appConfig, dataArray};
    
    res.render('email', data);
  });
  

})

app.post('/email-supplier', (req, res)=>
{

  mailOptions.to = req.body.email;
  mailOptions.text = req.body.subject;
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      res.redirect('/');
    }
  });
})


app.get('/remove-product', (req, res) => {
  if (!appConfig.loggedIn){
    res.render('login',{wrong:false})
  }
 
  selectProductQuery((error, dataArray) => {
    appConfig.notification.length = 0
    dataArray.forEach(element => {
      if (element['quantity'] < 10){
        appConfig.notification.push(element)
      }
    });
    data = {appConfig, dataArray};
    res.render('removeProducts', data);
  });
 
})

app.get('/update-product', (req, res) => {
  if (!appConfig.loggedIn){
    res.render('login', {wrong:false})
  }
    
  selectProductQuery((error, dataArray) => {
    appConfig.notification.length = 0
    dataArray.forEach(element => {
      if (element['quantity'] < 10){
        appConfig.notification.push(element)
      }
    });
    data = {appConfig, dataArray}
    res.render('editProduct', data);
  });
    

})

app.get('/view-products', (req, res) => {
  if (!appConfig.loggedIn){
    res.render('login', {wrong:false})
  }
      
  selectProductQuery((error, dataArray) => {
    appConfig.notification.length = 0
    dataArray.forEach(element => {
      if (element['quantity'] < 10){
        appConfig.notification.push(element)
      }
    });
    data = {appConfig, dataArray}
    res.render('viewProducts', data);
  });
  
})

app.post('/remove', (req, res)=>{
  const recordId = req.body.id;
  const sql = `DELETE FROM product WHERE productID = ${connection.escape(recordId)}`;
  connection.query(sql, (err, result) => {
      if (err) throw err;
  });
  res.redirect('/remove-product');
})

app.post('/update', (req, res)=>{
  const{productName, price, quantity, supplier, supplierEmail, id} = req.body
  productID = 'PD' + productName + supplier
  productID = productID.replace(/\s/g, '')

      const sql = `UPDATE product SET productID = ?, productName = ?, price = ?, quantity  = ?, supplier = ?, supplierEmail = ?  WHERE productID  = ?`;

      connection.query(sql, [productID,productName, price, quantity, supplier, supplierEmail, id], (err, result) => {
          if (err) throw err;
          console.log(`Updated ${result.affectedRows} row(s)`);
      });

  data = {appConfig}
  res.redirect('/update-product');
})


const selectProductQuery = (callback)=>{
  const query = 'SELECT * FROM product ORDER BY price DESC';
  
  connection.query(query, (error, results, fields) => {
      if (error) {
          callback(error, null);
          return;
      }
      
      appConfig.numberOfProducts = results.length;
      callback(null, results);
  });
}

const shuffle = (array) =>{
  return array.sort(() => Math.random() - 0.5)
}

function checkPasswordStrength(password) {
  const veryWeakRegex = /^[a-zA-Z]+$/; 
  const weakRegex = /^[a-zA-Z\d]+$/;
  const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/; 
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]+$/;


  if (veryWeakRegex.test(password)) {
      return "20";
  } else if (weakRegex.test(password)) {
      return "30";
  } else if (mediumRegex.test(password)) {
      return "50";
  } else if (strongRegex.test(password)) {
      return "80";
  } else {
      return "100";
  }
}
