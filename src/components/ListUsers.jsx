import { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";

export default function ListUsers() {

    const ctx = useContext(UserContext);

    const { users, readUsers } = ctx;

    useEffect(() => {
        const getResponse = async () => {
            await readUsers();
            return;
        }
        getResponse();
    }, [])


    return (
        <div>
            <h1>Listado de usuarios</h1>
            {users.map((e) => {
                return (
                    <p key={e._id}>
                        <span>Nombre: {e.name} |</span>
                        <span>| email:{e.email}</span>
                    </p>
                );
            })}
        </div>
    );
}