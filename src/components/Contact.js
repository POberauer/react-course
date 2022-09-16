import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
      <form action='mailto:'>
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellido'/>
        <textarea placeholder='Motivo'/>
        <input type="submit" value='Enviar'></input> 
      </form>
    </div>
  )
}
