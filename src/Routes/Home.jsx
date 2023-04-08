import React, { useContext } from 'react'
import Card from '../Components/Card'
import {useContextGlobal} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {users} = useContextGlobal()
  const {themeState, themeDispatch} = useContextGlobal()

  const switchTheme = () => {
  if(themeState.theme){
    themeDispatch({type: 'SWITCH_LIGHT'})
  } else {
    themeDispatch({type: 'SWITCH_DARK'})
  }
 
}

  return (
    <main className="App" 
    style={{backgroundColor: themeState.bgColor, color: themeState.color}}>
      <h1>Home</h1>
      <div className='card-grid'>

        {/* Aqui deberias renderizar las cards */}
        {users.map(user => (
          <Card key={user.id}/>
          ))
        }        
        
      </div>
    </main>
  )
}

export default Home