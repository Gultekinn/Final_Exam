import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../component/Card.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect } from 'react';
import axios from "axios"
import { Helmet } from "react-helmet";
import toast, { Toaster } from 'react-hot-toast';
import { MainContext } from '../Context/Context';
const Card = () => {
    const { wishlistItem, setWishlistItem } = useContext(MainContext)
    const [data, setData] = useState([])
    const [seacrhValue, setSearchValue] = useState("")
    const [dummys, setDummys] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8085/").then((res) => {
            setData(res.data)
        })
    }, [seacrhValue === "", dummys ? data : ''])
    return (
        <div>




            <Helmet>
                <title>Roboticts</title>
            </Helmet>




            <input id='input' onChange={(e) => {
                setSearchValue(e.target.value)
                setData(data.filter((item) => item.title.includes(seacrhValue)));
            }} type="text" />

            <button id='button' onClick={() => {
                setData([...data.sort((a, b) => a.price - b.price)])
                toast('Product sort olundu!', {
                    icon: '👏',
                });
            }}>sort by price</button>

            <div className="common">
                {
                    data && data.map((item, index) => {
                        return (
                            <div key={index} className="card">
                                <div className="card__img">
                                    <img src="https://preview.colorlib.com/theme/robotics/img/p1.png" alt="" />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.price}Azn</p>
                                <p>{item.desc}</p>
                                <Link to={`${item._id}`}><button id='btnnn'>VIEW DETAILS</button></Link>
                                <button id='btnnn' onClick={() => {
                                    axios.delete(`http://localhost:8085/${item._id}`).then((res) => {
                                        setDummys(true)
                                        toast('Product silindi!', {
                                            icon: '👏',
                                        });
                                    })
                                }}>Delete</button>  <br />
                                <button id='btn1' onClick={() => {
                                    setWishlistItem([...wishlistItem, item])
                                }} ><FavoriteBorderIcon /></button>
                            </div>
                        )
                    })
                }


            </div>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
        </div>
    )
}

export default Card
