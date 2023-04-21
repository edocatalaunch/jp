const express = require('express');
const mongoose = require('mongoose');
const user = require('./controller/user.controller.js')
const app =express();
const port =3000;


app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect('mongodb+srv://edocatalan:Yj0btINIFZshf9zR@cluster0.rpkaoid.mongodb.net/mibd?retryWrites=true&w=majority');

//app.use(express.static('app'));// donde ir a buscar todos los archivos
//


app.get('/users',user.list) 
app.post('/users',user.create);
app.get('/users/:id',user.get);
app.put('/users/:id',user.update);
app.patch('/users/:id',user.update);
app.delete('/users/:id',user.destroy);

app.get('/',(req,res) => {
   
   res.sendFile(`${__dirname}/view/index.html`);
  
   console.log(__dirname);
      

})

app.get('*',(req,res) => {
   res.status(400).send('Pagina no existe')

})

app.post('*',(req,res) => {
   res.status(400).send('Pagina no existe')

})

app.listen(port,() => {   
   console.log(`Escuchando en puerto ${port}...`);
   console.log('Iniciando Aplicacion....');
})


