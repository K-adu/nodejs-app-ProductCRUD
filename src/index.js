// frameworks and librarires
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const authRouter =  require('./routes/user.routes')
const productRouter = require('./routes/products.routes')
const emailRouter = require('./routes/email.routes')
const hbs = require('hbs');
const cors = require('cors')



//connection to the database
require('./dbconn')




//constants global
const PORT =  3000



//instances
const app = express()


// // // connecting the public directory
const publicDirPath = path.join(__dirname, '/public')
app.use(express.static(publicDirPath))

// app.uses and sets

//uses
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(authRouter)
app.use(productRouter)
app.use(emailRouter)

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
      next();
    });


// // //set
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');





// // landing page
// app.get('/',(req,res)=>{
// 	res.render('index')
// })
app.get('/',(req,res)=>{
    res.render('welcomepage')
})

//login page
app.get('/auth/login', (req,res)=>{
    res.render('login')
})

// //signup
// //login page
app.get('/auth/signup', (req,res)=>{
    res.render('signup')
})

app.get('/send-email',(req,res)=>{
    res.render('sendemail')
})

//listening to the server
app.listen(PORT,()=>{
	console.log('listening to port no',PORT)
})