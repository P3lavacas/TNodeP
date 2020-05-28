//Dependencias
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const pokemon = require('./routes/pokemon');
const user = require ('./routes/user');
//Middleware
const auth = require('./middleware/auth');
const notfound = require('./middleware/notfound');
const index = require('./middleware/indice');
const cors = require('./middleware/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res, next) => {
  res.status(200);
  res.send("Hola mundo");
});

app.use("/user", user);

app.use(auth);

app.use("/pokemon", pokemon);

app.use(notfound);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server is running");
});
