import { useState, useEffect } from "react"
//1)Importamos el useEffect

//EL efecto primario de React es renderizar componentes manipulando el DOM
//Una aplicacion web tiene que hacer mucho mas que solo mostrarse, tiene que realizar operaciones, consumir datos de servidores, usar eventos, consumir APIS, etc


//Para poder manipular los efectos secundarios de los cambios de estado vamos a usar un nuevo HOOK que se llama useEffect

const Contador = () => {
    const [contador, setContador] = useState(1)
//A useEffect le pasamos dos parametros, el primero es una funcion callback con el comportamiento deseado, y el segundo es un array de dependencias en donde colocamos el estado que queremos estar vigilando. Cuando ese estado cambia se ejecuta nuvamente la funcion que pasamos en el primer parametro


useEffect( ()=>{
  document.title = `Contador: ${contador}`
},[contador])
    const sumarContador = () => {
        setContador(contador + 1)
    }
    const restarContador= () => {
        setContador(contador - 1)
    }
  return (
    <div>
        <button onClick={restarContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={sumarContador}> + </button>

    </div>
  )
}

export default Contador