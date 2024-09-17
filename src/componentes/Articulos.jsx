
const Articulos = ({img, titulo, children}) => {
    console.log(children)

  return (
    <article>
    <img src={img} alt={titulo} />
    <h2>{titulo}</h2>
    {children}
    <button>leer Articulo</button>
    </article>
  )
}

export default Articulos