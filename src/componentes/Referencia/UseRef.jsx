


//useReft es un hook que nos permite crear una referencia mutable que puede ser actualizada sin provocar una nueva renderizacion del componente

//Ejemplo almacenamos la cantidad de productos comprados pero no lo mostramos en pantalla

//1)Lo voy a importar
import {useReft} from "react";

//2)Hacemos uso
export const UseRef = () => {


    const cantidadProductos = useReft(0)

    //Este hook siempre retorna un objeto que tiene una propiedad llamada "current" la cual vamos mutando con informacion

    function agregarAlCarrito () {
        cantidadProductos.current = cantidadProductos.current + 1
        console.log(cantidadProductos.current)
    }
  return (
    <div>
        <p>Productos Marolio comprados: {cantidadProductos.current}</p>
        <button onClick={agregarAlCarrito}>Comprar</button>
    </div>
  )
}

