const express = require('express');
const app = express();
app.listen(process.env.PORT || 3000, ()=>{
  app.get("/", (req, res, next) =>{
    res.send("Bienvenido al servidor");
  })
  app.get('/:name', (req, res, next)=>{
    console.log("El usuario accedio a /");
    console.log(req.params.name);
    res.status(200);
    res.send("Hola, " + req.params.name);
  });
  console.log("El server se prendio ALV...");
});
