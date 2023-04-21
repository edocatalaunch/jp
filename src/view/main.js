
const loadInitialTemplate = () => {
  const template =`
      <h1> Usuarios</h1>
         <form id="user-form">
         <div>
            <label>Nombre </label>
            <input name ="name">

         </div>
         <div>
            <label>Apellido </label>
            <input name ="lastname">

         </div>
         <button type="submit">Enviar</button> 
        </form>
        <ul id="user-list"></ul>
      `
        const body = document.getElementsByTagName("body")[0]
        body.innerHTML=template;
}
const getUsers = async() => {
   const response = await fetch('../users')
   const users =await response.json()
   //console.log(user)
   


}
const addFormListener = () => {
   const userForm = document.getElementById('user-form');
   userForm.onsubmit = async (e) => {
      e.preventDefault();
      const formData = new formData(userForm)
      const data =Object.fromEntries(formData.entries())
      const lalo = await fetch ('../users', {
         method: 'POST',
         body :JSON.stringify(data),
         headers:{
            'Content-Type':'application/json'
         }

      })
      console.log('llamado a POST' + lalo);
    userForm.reset();
    getUsers()
   }

}

window.onload = () => {
console.log('Iniciando ....')
loadInitialTemplate();
//addFormListener();
//getUsers();
}