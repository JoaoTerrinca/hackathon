import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function User() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetchLogin().then((result) => {
            setUser(result)
        })
    }, [])

    async function fetchLogin() {
        const res = await fetch("/api/get-user", {
            method: "GET",
            headers: {
                "Authenticate": localStorage.getItem("token")
            }
        })
        const json = await res.json()
        if (res.status === 404) {
            return navigate("/login")
        }
        return json
    }

    if (edit) {
        return (
            <div className="divEdit">
                <h1>My Account</h1>
                <input
                    className="caixaTexto"
                    type="text"
                    placeholder="Username..."
                    defaultValue={user.username}
                />
                <input className="caixaTexto"

                    type="text"
                    placeholder="Birthday..."
                    defaultValue={user.birthday}
                />
                <input
                    className="caixaTexto"
                    type="text"
                    placeholder="Email..."
                    defaultValue={user.email}
                />

                <button className="buttonSmall"
                    onClick={() => setEdit(false)}
                >Voltar</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>My Account</h1>
                <p>{user.username}</p>
                <p >Birthday: {user.birthday}</p>
                <p>Email: {user.email}</p>
                <button onClick={() => navigate(`/`)} className="buttonSmall">Voltar</button>

                <div>
                    <button className="buttonSmall"
                        onClick={() => setEdit(true)}
                    >Editar</button>
                </div>
            </div>
        )
    }
}