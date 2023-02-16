import React from 'react';
import './../Styles/Error404.scss'

export default function Error404() {
  return (
    <div className="error404-container">
      <h1 className='error-h1'>404 Error</h1>
      <p className='error-p'> Oops! La página que estás buscando no existe.</p>
    </div>
  )
}
