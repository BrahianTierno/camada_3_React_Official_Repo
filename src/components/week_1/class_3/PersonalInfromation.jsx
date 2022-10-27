import React from 'react'
import { generalInformation } from './db'

const PersonalInfromation = () => {
    const [informacion] = generalInformation; // Traer la informacion de 
  return (
        <main>
            <h1>{informacion.name}</h1>
            <img src={informacion.avatar} alt="Avatar" />
        </main>
  )
}

export default PersonalInfromation