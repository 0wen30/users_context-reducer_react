import { useContext, useRef } from "react";
import UserContext from "../context/UserContext";


const FormUser = () => {

    const ctx = useContext(UserContext);

    const name = useRef()
    const email = useRef()

    const { addUser } = ctx;

    const sendData = (e) => {
        e.preventDefault();
        addUser({name:name.current.value,email:email.current.value});
    }

    return (
        <div>
            <h1>Crea un usuario</h1>
            <form onSubmit={sendData}>
                <h2>Escribe el nombre</h2>
                <input ref={name} />
                <h2>Escribe tu correo</h2>
                <input ref={email} /><hr/>
                <button type="submit">Crear usuario</button>
            </form>
        </div>
    );
}

export default FormUser