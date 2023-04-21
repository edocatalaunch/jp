const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://edocatalan:Yj0btINIFZshf9zR@cluster0.rpkaoid.mongodb.net/mibd?retryWrites=true&w=majority');

const User =mongoose.model('User',{
   username:String,
   edad    :Number,

});

const insUsuario =async () =>{
   const user = new User({username:'nitoKlein',edad:23});
   const saveUser = await user.save();// esto es una promesa
   console.log(saveUser);

}
//insUsuario();
//
const getLstUsuarios = async () => {
   const users = await User.find();
   console.log(users);
}

//getLstUsuarios();
const getLstUsuariosParam = async () => {
   const users = await User.find({username:'ecatalaunch'});
   console.log(users);
}

//getLstUsuariosParam();
//
const getLstUsuariosUno = async() => {
   const user = await User.findOne({username:'isidoraDora'});
   console.log(user);
}
//getLstUsuariosUno();
//
const updUsuario = async() => {
const user = await User.findOne({username:'ecatalaunch'});
user.edad=56;
await user.save();

}

const delUsuario = async() => {
   const user = await User.findOne({username:'ecatalaunch'});
   console.log(user);
   if (user) {
      await user.deleteOne(); 

   }

}

//delUsuario();
getLstUsuarios();