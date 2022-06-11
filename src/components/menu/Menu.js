import axios from "axios";
import { useEffect, useState } from "react";
import Content from "../content/Content";
import "./Menu.style.css"

function Menu() {
    const [categories, setCategories] = useState([])
    const [catImg, setCatImg] = useState([])
    const [categoryId, setCategoryId] = useState(1)
    const [imgCount, setImgCount] = useState(10)
    
    useEffect(()=>{
        axios 
        .get("https://api.thecatapi.com/v1/categories")
        .then(data => setCategories(data.data))
    }, [])
    
    useEffect(()=>{
        axios
        .get(`https://api.thecatapi.com/v1/images/search?limit=${imgCount}&page=1&category_ids=${categoryId}`)
        .then(data => setCatImg(data.data))

    }, [categoryId, imgCount] )

    const handleClick=(id)=>{
        setCategoryId(id)
        setImgCount(10)
    }

    const moreHandleClick=()=>{
        setImgCount(prev=>prev + 10)
    }

    const handleGoHome=()=>{
        setCategoryId(1)
        setImgCount(10)
    }

    return (
        <>
        <div className="menu">
            <div className="menuItem" onClick={handleGoHome}>Home</div>
            {categories.map((item)=>{
                return (
                    <div key={item.id} className="menuItem" onClick={()=>{
                        handleClick(item.id)
                    }}>{item.name}</div>
                )
            })}
        </div>

        <Content catImg={catImg}/>

        <div className="buttonContainer"><button className="moreButton" onClick={moreHandleClick}>More cats</button></div>
        </>
    )
}

export default Menu;