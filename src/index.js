// frameworks and librarires
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const authRouter =  require('./routes/auth.routes')


//connection to the database
require('./dbconn')




//constants global
const PORT =  3000



//instances
const app = express()



// app.uses
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(authRouter)



//listening to the server
app.listen(PORT,()=>{
	console.log('listening to port no',PORT)
})