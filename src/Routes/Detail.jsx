import React, { useEffect, useState } from 'react'
import { favDispatch, useContextGlobal } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
    const [user, setUser] = useState({})
    const {id} = useParams()
    const url = 'https://jsonplaceholder.typicode.com/users/:' + id

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))
    }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        <h3>{user.name}</h3>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <h3>{user.email}</h3>
        <h3>{user.phone}</h3>
        <h3>{user.website}</h3>
    </>
  )
}

export default Detail