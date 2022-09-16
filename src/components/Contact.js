import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
      <form className='contact' action='mailto:'>
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellido'/>
        <input type="text" placeholder='Email'/>
        <textarea placeholder='Motivo'/>
        <input type="submit" value='Enviar'></input> 
      </form>
    </div>
  )
}
