import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./style.module.css"

export default function Houses() {
    const token = (localStorage.getItem("token") !== "null") ?
        localStorage.getItem("token") :
        null
    const [user, setUser] = useState({})
    const [estates, setEstates] = useState([])
    const [filterEstates, setFilterEstates] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            fetchLogin().then((result) => {
                setUser(result)
            })
        }

        fetchHouses().then(estates => {
            setEstates(estates)
            setFilterEstates(estates)
        })
        //if (user) return navigate("/login")
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

    async function fetchHouses() {
        const res = await fetch("/api/estates", {
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

    async function postClick(id) {
        console.log(id)
        const res = await fetch("/api/click", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                estateId: id
            })
        })
        return res
    }

    function handleClick(_id) {
        if (token) {
            postClick(_id)
        }
        // guarda na colletion click
        return navigate(`/estate/${String(_id)}`)
    }

    function filter(e) {
        setFilterEstates(estates.filter(estate => (String(estate.location)).toLowerCase().includes(e.target.value) == true))
    }

    return (
        <div>
            {
                //<p>{token}</p>
                //<a href={`/user`}>USER: {user.username}</a>
                token ?
                    <div style={{ float: "right", marginRight: "20px", marginTop: "10px" }}>
                        <div
                            onClick={() => navigate(`/user`)}
                        >
                            <img src="" alt="icon" />
                            <p>{user.username}</p>
                        </div>
                        <br />
                        {/* <a href={`/login`}>SIGNOUT</a> */}
                    </div>
                    :
                    <div style={{ float: "right", marginRight: "20px", marginTop: "10px" }}>
                        <div>
                            <p onClick={() => navigate(`/login`)}>LOGIN</p>
                        </div>
                    </div>
            }
            <div>
                <input type="text" placeholder="&#xF002; Search..." onChange={(e) => filter(e)}></input>
            </div>

            <h1>Estates</h1>

            <div
                style={{
                    paddingLeft: "auto",
                    float: "left",
                    border: "3px solid green",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "25px",
                    width: "20vw"
                }}>
                <button>Type</button>
                <button>Room</button>
                <button>Price</button>
                <button>Size</button>
                <button>Energy</button>
            </div>

            <div
                style={{
                    float: "rigth",
                    margin: "auto",
                    border: "3px solid green",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "25px",
                    width: "70vw"
                }}>
                {
                    filterEstates.map((estate) => {
                        console.log(estate.image)
                        return (
                            <div key={estate._id}>
                                <div onClick={() => handleClick(estate._id)} >
                                    <div
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                            padding: "0px",
                                            backgroundImage: `url(${estate.image[0]})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "350px"
                                        }}
                                    >
                                    </div>
                                    <div style={{ marginTop: "15px", padding: "5px", paddingTop: "10px", textAlign: "left" }}>
                                        {estate.location}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}