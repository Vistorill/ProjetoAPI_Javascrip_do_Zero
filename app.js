const express = require('express');

const app = express();

app.use(express.json());

app.get("/",(req, res)=>{
   // res.send("Introdução a API do Marcão!!")
   return res.json({titulo: "como criar API?"});

});

app.listen(8080,()=>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});