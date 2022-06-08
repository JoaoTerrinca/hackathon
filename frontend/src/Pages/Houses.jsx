import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./style.module.css"
import "./houses.css"


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
                "Authenticate": localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                estateId: id
            })
        })
        return res
    }

    async function cl() {
        const res = await fetch("/api/recomended", {
            method: "GET",
            headers: {
                "Authenticate": localStorage.getItem("token"),
            }
        })
        const json = await res.json()

        return json
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
        <div className="houses">
            <div className="housesHeader">
                <div className="pageName">Soul Estate</div>
                {
                    //<p>{token}</p>
                    //<a href={`/user`}>USER: {user.username}</a>
                    token ?
                        <div className="userSettings">
                            <div style={{ cursor: "pointer" }}
                                onClick={() => navigate(`/user`)}
                            >
                                <p>{user.username}</p>
                            </div>
                            <div style={{ cursor: "pointer" }}
                                onClick={() => navigate(`/login`)}
                            >
                                <p>Log Out</p>
                            </div>
                            <br />
                            {/* <a href={`/login`}>SIGNOUT</a> */}
                        </div>
                        :
                        <div style={{ float: "right", marginRight: "20px", marginTop: "10px", color: "white" }}>
                            <div>
                                <p onClick={() => navigate(`/login`)}>LOGIN</p>
                            </div>
                        </div>
                }
            </div>

            <div className="housesBody">
                <div className="housesFilter">
                    <div className="filterButton" onClick={() => cl().then()}>Price</div>
                    <div className="filterButton">Size</div>
                    <div className="filterButton">Type</div>
                    <div className="filterButton">WC</div>
                    <div className="filterButton">Energy</div>
                </div>

                <div className="estateList">
                    <div className="estateListRow">
                        {
                            filterEstates.map((estate) => {
                                return <Estate estate={estate} handleClick={handleClick} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

function Estate({ estate, handleClick }) {
    return (
        <div key={estate._id} className="estateListItem" onClick={() => handleClick(estate._id)} >
            <div className="estateListItemImage" style={{
                backgroundImage: `url(https://cdn.houseplansservices.com/product/6ek8jns2uvt3p24kbigoctc4ih/w800x533.jpg?v=13)`,
                backgroundImage: `url(${estate.image[0]})`
            }}></div>
            <div className="estateListItemText">
                <p>{estate.location}</p>
                <p>{estate.size} m 2</p>
                <p>{estate.price} €</p>
            </div>
        </div>
    )
}