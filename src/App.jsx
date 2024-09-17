{/*import { Children } from "react"
import Articulos from "./componentes/Articulos" */}
import Contador from "./componentes/Contador/Contador"
import Categorias from "./componentes/Categorias/Categorias"
import { UseRef } from "./componentes/Referencia/useRef"

//COMPONENTES 2

//Recordemos ¿Que es un componente?
//Conjunto de elementos que cumplen una misma funcion en la interfaz del usuario

//Tienen 3 caracteristicas:

//1)Van a renderizar un unico elemento
//2)Pueden pasar props
//Las Props son objetos,con informacion que le pasan componentes padres a los componentes hijos
//Importante aclarar que el flujo de la informacion es UNIDIRECCIONAL, solamente los padres le pueden pasar informacion a los hijitos

//¿Que tipo de datos?
//Datos primitivos
//Objetos y arreglos
//Funciones

//Y ahora se suman los CHILDREN
//Los CHILDREN es una forma de pasar otro elemento o componentes como props



//CICLOS DE VIDA DE LOS COMPONENTES: Es una serie de estados por los cuales pasa todo componente a lo largo de su existencia

//-Montaje(Ingres el componente al DOM)
//-Actulizacion(Actualiza el valor del estado. EJ: El contador)
//-Desmontaje(Desaparece el contandor y me voy carrito)

const App = () => {

  
  return (
    <>
    {/*<Articulos img="https://picsum.photos/200/300" titulo="Alimentos para gatitos">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa a magni laborum corporis iste minima, illum nostrum ad ea numquam alias aliquid qui id debitis fugiat ratione quis. Voluptate.</p>
    </Articulos>
    <Articulos img="https://picsum.photos/200/300" titulo="Vacunas para gatos"/>
    <Articulos img="https://picsum.photos/200/300" titulo="Juguetes para gatos">
    <p>DESCUENTO 10% PAGANDO EN EFECTIVO</p>
    <p>100</p>
    </Articulos>*/}
    {/* <Contador/> */}
    {/* <Categorias/> */} 
    <UseRef/>
    </>
  )
}

export default App