import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./houses.css"

export default function House() {
    const token = (localStorage.getItem("token") !== "null") ?
        localStorage.getItem("token") :
        null
    const [user, setUser] = useState({})
    const [estate, setEstate] = useState({})
    const navigate = useNavigate()
    const param = useParams()

    useEffect(() => {
        if (token) {
            fetchLogin().then((result) => {
                setUser(result)
            })
        }
        fetchContent().then(estate => {
            setEstate(estate)
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

    async function fetchContent() {
        const { id } = param;
        const res = await fetch(`/api/estate/${id}`, {
            method: "GET"
        })
        const json = await res.json()
        if (res.status === 404) {
            return navigate("/login")
        }
        return json
    }

    async function add() {
        const { id } = param;
        const res = await fetch(`/api/estate/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: user._id,
                contentId: estate._id
            })
        })
        alert("Adicionado à sua lista!")
    }

    return (

        <div className="tudopa">
            {
                token ?
                    <div style={{ float: "right", marginRight: "20px", marginTop: "10px" }}>
                        <div
                            onClick={() => navigate(`/user`)}
                        >
                            {/* <img src="" alt="icon" /> */}
                            <p>{user.username}</p>
                        </div>
                        <br />
                        <a href={`/login`}>SIGNOUT</a>
                    </div>
                    :
                    <div style={{ float: "right", marginRight: "20px", marginTop: "10px" }}>
                        <div>
                            <p onClick={() => navigate(`/login`)}>LOGIN</p>
                        </div>
                    </div>
            }
            {
                Object.keys(estate).length !== 0 &&
                <div>
                    <div style={{ float: "left" }}> <img style={{ maxWidth: "25vh", maxHeight: "25vh" }} src="" alt="" /></div>
                    <div class="iconAdding">
                        <i class="fa-solid fa-check checked"></i>
                        <i class="fa-solid fa-circle-plus checked"></i>
                        <div classname="casadesc" style={{ marginTop: "200px" }}>
                            <h1 style={{
                                textAlign: "center",
                                fontSize: "70px",
                            }}>
                                {estate.type}
                            </h1>

                            <div className="imagemdecadacasa"><img src={estate.image[0]} /></div>
                            <p style={{ fontSize: "50px" }}>Description</p>
                            <div className="paracima">{estate.description}</div>
                            <div style={{ display: "inline" }}>
                                {estate.wc}
                            </div>

                        </div>
                    </div>
                </div>
            }
            {
                // token &&
                // <button className="butao"
                //     onClick={() => add()}
                // >Adicionar
                // </button>
            }
            <button onClick={() => navigate(`/`)} className="buttonBig2">Voltar</button>
        </div >
    )
}