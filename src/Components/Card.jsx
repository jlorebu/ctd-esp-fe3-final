import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
const {users} = useContextGlobal()

const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

  let favs = localStorage.getItem('favs') || []
  const addFav = (poke) => {
  favs.push(poke)
  localStorage.setItem('favs', JSON.stringify(favs))
  }

  }

 
  return (
    
    <div className="card">
      {users.map(user =>{
      <img className="imgMedico" src="/images/doctor.jpg" alt="Medico" />
        {/* En cada card deberan mostrar en name - username y el id */}
          return (
            <>
            <React.Fragment key={user.id}>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
              
              <Link to={'/user/' + id} key={users.url}>
                <h2>{id}</h2>
                <h3>{name}</h3>
                <h3>{username}</h3>
              </Link>       
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
                
                <h3>{user.name}</h3>
                <img src="./images/doctor.jpg" alt="Medico"/>
              
                <button onClick={addFav} className="favButton">Add fav</button>     
            </React.Fragment>
            </>
          )           
        })}
    </div>
    )
  } 
  
export default Card;
