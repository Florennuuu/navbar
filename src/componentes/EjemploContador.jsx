import { useState } from "react"

const EjemploContador = () => {

const [ contador, setContador] = useState(1)    

const aumentar = () =>{
    setContador(contador + 1)
}
return (
    <div>
        <p>Contador: {contador}</p>
        <button onClick={aumentar} >+</button>
    </div>
)

}

export default EjemploContador