import React, {useEffect, useState} from 'react'
import {API_KEY,IMG_URL,BASE_URL} from '../../constants/Constants'
import './Banner.css';
import axios from '../axios'




function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        
        axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`).then((response)=>{
           
            var array=response.data.results
            

            setMovie(response.data.results[ Math.floor(Math.random() * array.length)]);
        })
    }, [])
    return (
        
        <div style={{backgroundImage:`url(${movie ? IMG_URL+movie.backdrop_path : ""})`}} className="Banner">

            <div className="content">
                <div className="title_box">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                </div>
                <div className="banner_button">
                    <button className="buttons">Play</button>
                    <button className="buttons">My List</button>
                </div>
                <h1 className="discription">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_style">

            </div>

        </div>
    )
}

export default Banner
