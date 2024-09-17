import { useState, useEffect  } from "react"


const Categorias = () => {

    const [categoria, setCategoria] = useState("")

    useEffect(()=>{
        document.title =`Categoria ${categoria}`
    },[categoria])

//Funcion auxiliar que me permite modificar el estado categoria


    const manejadorCategoria = (categoria) => {
        setCategoria(categoria)
    }


return (
    <div>
        <h2>Categorias de Productos</h2>
        <h2>{categoria}</h2>
        <button onClick={()=> manejadorCategoria("frutas")}>Frutas</button>
        <button onClick={()=> manejadorCategoria("carnes")}>Carnes</button>
        <button onClick={()=> manejadorCategoria("lacteos")}>Lacteos</button>
        <button onClick={()=> manejadorCategoria("Limpieza")}>Limpieza</button>
    </div>
    )
}

export default Categorias