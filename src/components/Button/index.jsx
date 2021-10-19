// importar libreria
import React from 'react'
import PropTypes from 'prop-types'
import './Buttons.css'

// componente funcional (arrow-func)
                    // parámetros (propiedad)
// type= button-long-text                    
const Button = ({type, text, clickHandler}) => (
     <button className= {type} onClick ={() => clickHandler(text)}>
          <span>{text}</span>
     </button>
)

Button.propTypes = {
     type: PropTypes.string,
     text: PropTypes.string.isRequired,
     clickHandler: PropTypes.func.isRequired
}

export default Button