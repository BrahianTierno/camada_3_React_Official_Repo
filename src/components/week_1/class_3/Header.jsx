import React from 'react'

export const Header = () => {
    const informacion = ["Informacion Personal","Peliculas","Series","Premios"];
  return (
    <header>
        <nav>
            <ul>
                {informacion.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </nav>
    </header>

  )
}
