import { useState } from "react";
import "./Form.css"

export default function Form({ confirmacion }) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleClick = (e)=>{
        e.preventDefault()

        const data ={
            name, phone, email
        }

        confirmacion(data)
    }
    return(
        <div className="main__container--checkout--form">
                <h1>Finalizar compra</h1>
                <form onSubmit={handleClick}>
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="phone"
                        placeholder="Telefono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit">crear orden</button>
                </form>
            </div>
    )
    

    
}