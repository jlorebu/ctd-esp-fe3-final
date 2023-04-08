import { createContext, useContext, useState, useReducer, useEffect} from "react";

export const ContextGlobal = createContext(undefined);

const themes = {
  dark: {
      theme: true,
      bgColor: 'black',
      color: 'white'
  },
  light: {
      theme: false,
      bgColor: 'white',
      color: 'black'
  }
}

//declarar estados iniciales
const initialFavState= JSON.parse(localStorage.getItem('favs')) || []
const initialThemeState = themes.light

//aplicacion reducer
const favReducer = (state,action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return [...state, action.payload]
    default:
      throw new Error()
  }
}

const themeReducer = (state, action) => {
  switch(action.type){
      case 'SWITCH_DARK':
          return themes.dark
      case 'SWITCH_LIGHT':
          return themes.light
      default:
          throw new Error()
  }
}


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  //estados reducer
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
  const [users, setUsers] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(favState))
    }, [favState])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

  return (
    <ContextGlobal.Provider value={{users, setUsers, favState, favDispatch, themeState, themeDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
 
export const useContextGlobal = () => useContext(ContextGlobal) 
