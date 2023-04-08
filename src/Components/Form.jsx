import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

   const [pac, setPac] = useState({
      nombre: '',
      email: ''
    })
     const [show, setShow] = useState(false)
     const [err, setErr] = useState(false)
   
     const handleSubmit = (event) => {
       event.preventDefault()
       if(pac.nombre.length > 6 && pac.nombre !== '') {
               setShow(true)
               setErr(false)
           } else {
               setErr(true)
           }
       }
   
     return (
       <div>
           <form onSubmit={handleSubmit}>
               <label>Full Name</label>
               <input type="text" placeholder="Full Name" value={pac.nombre} onChange={(e) => setPac({...pac, nombre: e.target.value})}/>
               <label>Email</label>
               <input type="email" placeholder="Email" value={pac.email} onChange={(e) => setPac({...pac, email: e.target.value})}/>
               
               <button>Send</button>
           </form>   
           <h4>{err && 'Por favor, verifique su información nuevamente'}</h4>
           <h3>{show ? "Gracias " + pac.nombre + " , te contactaremos cuanto antes via mail" : null}</h3>
       </div>
  );
};

export default Form;
