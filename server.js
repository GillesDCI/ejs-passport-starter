const express = require('express');
const mongoose = require('mongoose')
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();


const app = express();



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))


app.use(express.static(__dirname + '/public'));
// app.use(flash());



const userRoutes = require('./routes/userRoutes')
const homeRoutes = require('./routes/homeRoutes')


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
,{
   useNewUrlParser:true, 
   useUnifiedTopology:true
})
.then(() => {console.log("we are connected to the database.")})
.catch((error) => { console.log('an error occurred while connecting ot the db', error)})


app.use('/', homeRoutes);
app.use('/user', userRoutes);



app.listen(3000, () => {
    console.log("the webserver is running on port 3000");
})