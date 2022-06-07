import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Register.css"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [toggle, setToggle] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    function handleUserInput(e, input) {
        input === "email" ? setEmail(e.target.value.trimStart()) : setPassword(e.target.value.trimStart())
    }

    function handleSubmit(e) {
        e.preventDefault()

        // TODO Validações Login Frontend

        login(email, password) // Vai enviar para o back-end
    }

    useEffect(() => {
        localStorage.setItem('token', null)
    }, [])

    async function login(email, password) {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const json = await res.json()
        if (res.status !== 400) {
            localStorage.setItem('token', json.token)
            //navigate("/catalog")
        }
    }

    return (

        <div className="background" >
            <div className="caixa">
                <form onSubmit={handleSubmit}>
                    {
                        errors.length > 0 &&
                        <span style={{ color: "red" }}>{errors}</span>
                    }

                    <div>
                        <label>E-mail</label>
                        <input type="text" className="caixaTexto" value={email} onChange={(e) => handleUserInput(e, "email")} />
                        <br /><br></br>
                    </div>


                    <div >
                        <label >Password</label>
                        <input
                            type={toggle ? "text" : "password"}
                            className="caixaTexto"
                            value={password}
                            onChange={(e) => handleUserInput(e, "password")}>
                        </input>
                    </div>
                    <div >
                        Forget password
                    </div><br></br>
                    <div >
                        <input type="submit" className="buttonBig2" value="Login"></input>
                    </div>
                    <div onClick={() => navigate(`/register`)}>
                        <input type="submit" className="buttonBig2" value="Create account"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}