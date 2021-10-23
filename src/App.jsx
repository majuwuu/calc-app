import React, { useState } from 'react'
import Functions from './Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'
// importar

   // Función flecha
const App = () => {
   
   const arrayTextoFuncionModificaTexto = useState("")
   // arrayTextoFuncionModificaTexto => ["hola", funcion]
   
   //1er  posición: valor (que inicialmente es el valor por defecto)
   const texto = arrayTextoFuncionModificaTexto[0]
 
   //2da posición: función que me va a permitir modificar el valor por defecto
   const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

      //Lo que ejecuta la función
      console.log("renderizacion de la app")
   return (
   <main className='react-calculator'>
      <Result value= {texto}/>
      <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            funcionModificaTexto(number) 
        }} />
      <Functions
         onContentClear ={() =>
            console.log("Content Clear")}
         onDelete ={() =>
            console.log("onDelete")}
      />
      <MathOperations  
         onClickOperation ={operation =>  
            console.log("Operation:", operation)
         }
         onClickEqual ={equal =>
            console.log("Equal:", equal)
         }
      />         
   </main>)
}

export default App