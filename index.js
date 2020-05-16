//Dependencias
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const pokemon = require('./routes/pokemon');
const user = require ('./routes/user');
//Middleware
cosnt auth = require('./middleware/auth');
cosnt notfound = require('./middleware/notfound');
cosnt index = require('./middleware/indice');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/",index);

app.use("/user", user);

app.use(auth);

app.use("/pokemon", pokemon);

app.use(notfound);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server is running");
});
