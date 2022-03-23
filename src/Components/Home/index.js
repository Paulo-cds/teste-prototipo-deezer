import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {useState, useEffect} from 'react'
import axios from 'axios'
import * as S from './style'
import {BiSearchAlt} from 'react-icons/bi'
import Card from '../Card/card'
import {useNavigate} from 'react-router-dom'

function searchMusicAction(search) {
  return { type: 'ADD_FAVORITE', search }
}

export default function CourseList() {  
  //recebe os dados salvos no redux
  const favorites = useSelector(state => state.data)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [musics, setMusics] = useState([])
  const [search, setSearch] = useState('Hits Brasil 2022')    

  //função que adiciona no redux
  function searchM() {
    dispatch(searchMusicAction(search))
  }  
  
  var options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: {q: search},    
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': 'a1236b3ed7msh52dd55584a2946fp144974jsna05a78a6121d'
    }
  };  

  const searchMusic = (e) => {
    e.preventDefault()
    setMusics([])

    axios.request(options)
    .then(res => {
      setMusics(res.data.data)                
    })
    .catch(err => {
        console.log('error ', err)
    })
  }

  useEffect(() => {
    axios.request(options)
    .then(res => {
      setMusics(res.data.data)                
    })
    .catch(err => {
        console.log('error ', err)
    })
  },[])
  

  return (
    <S.Container>
        <S.Header>
          <S.FormSearch onSubmit={(e)=>searchMusic(e)}>
            <S.Search type='text' placeholder='Pesquisar' onChange={(e) => setSearch(e.target.value)} />            
            <BiSearchAlt style={{color:'black', height:'100%', width:'2rem', position:'absolute', right:0, cursor:'pointer'}} onClick={(e)=>searchMusic(e)} />
          </S.FormSearch> 
          <S.Submit onClick={() => navigate('/favorites')} type='button'>Favoritos</S.Submit>
        </S.Header>        
        <S.ListMusic>
          {
            musics &&
            musics.map((music, index)=>(              
              index < 10 ?                         
                <Card music={music} index={index} select={true} key={index} />                        
              : ''
            ))
          }
        </S.ListMusic>
    </S.Container>
  );
}
