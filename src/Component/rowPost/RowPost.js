import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from "../axios"
import {API_KEY, BASE_URL,IMG_URL} from '../../constants/Constants'


function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [YtUrl, setYtUrl] = useState([])
    useEffect(() => {
       axios.get(`${BASE_URL}${props.Urls}`).then((response)=>{
          
           setmovies(response.data.results)
       })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };



    const handleMovieTrailer = (id) =>{
       
        axios.get(`${BASE_URL}movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
            
            if(response.data.results.length !== 0){
                setYtUrl(response.data.results[0])
            }else{
                console.log('empty');
            }
        })
    }


    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((obj)=>
                    
                    <img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall ? "smallPoster":"row_img"} src={`${IMG_URL+obj.backdrop_path}`} alt=""/>
                    )
                }
                
            </div>
            {
                
               YtUrl && <Youtube videoId={YtUrl.key} opts={opts}  />
            }
        </div>
    )
}

export default RowPost
