import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

const {themeState, themeDispatch} = useContextGlobal()


const switchTheme = () => {
  if(themeState.theme){
    themeDispatch({type: 'SWITCH_LIGHT'})
  } else {
    themeDispatch({type: 'SWITCH_DARK'})
  }
 
}

 return (
    <nav className='nav'>
      <div className='contenedorLogo'>
        <img className='dhNav' src= 'DH.ico' alt='DHLogo'/>
        <h1>ODONTO</h1>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className='rutas'>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
        <Link to='/user/:id'><h3>Favs</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={switchTheme}> {themeState.theme ? '☀' : '🌘'}</button>
      </div>
    </nav>
  )
}

export default Navbar