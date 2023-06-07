// frameworks and librarires
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const authRouter =  require('./routes/auth.routes')
const productRouter = require('./routes/products.routes')
const hbs = require('hbs');
const cors = require('cors')



//connection to the database
require('./dbconn')



// // // connecting the public directory
// const publicDirPath = path.join(__dirname, '/public')


//constants global
const PORT =  3000



//instances
const app = express()



// app.uses and sets

//uses
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(authRouter)
app.use(productRouter)


app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
      next();
    });
// app.use(express.static(publicDirPath))

// // //set
// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');





// // landing page
// app.get('/',(req,res)=>{
// 	res.render('index')
// })


// //login page
// app.get('/auth/login', (req,res)=>{
//     res.render('auth/login')
// })

// // //signup
// // //login page
// app.get('/auth/signup', (req,res)=>{
//     res.render('auth/signup')
// })



//listening to the server
app.listen(PORT,()=>{
	console.log('listening to port no',PORT)
})