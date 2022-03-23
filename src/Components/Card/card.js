import {BsSuitHeartFill, BsSuitHeart} from 'react-icons/bs'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import * as S from './styleCard'

function favoriteAction(type, music) {
    return { type: type, music }
  }

const Card = ({music, index, select, control}) => {
    const [toogle, setToogle] = useState()
    const dispatch = useDispatch()

    //recebe os dados salvos no redux
  const favorites = useSelector(state => state.data)
  const conteins = favorites.filter(favorite => favorite.id === music.id)
    //função que adiciona no redux
  function handleFavorite(music, action) {
    if(action === 'add'){
        setToogle(true)
        dispatch(favoriteAction('ADD_FAVORITE',music))
    } else {
        setToogle(false)
        dispatch(favoriteAction('REMOVE_FAVORITE',music))
    }
    
  }
  
//   useEffect(() => {
//     const conteins = favorites.filter(favorite => favorite.id === music.id)
//     if(conteins.length > 0){
//         setToogle(true)
//     } else{
//         setToogle(false)
//     }
//   },[])

  const time = () => {
    let timer = music.duration/60
    return('duração ', new Date(timer * 3600 * 1000).toISOString().substr(11, 5))
  }
  
  


    return(
        <S.ContainerCard key={index} >                          
            <S.CardList>
            {                 
                conteins.length < 1 ? <BsSuitHeart onClick={()=>handleFavorite(music, 'add')} style={{width:50, height:30, position:'absolute', top:5, left:0, cursor:'pointer'}} color='red' /> 
                : <BsSuitHeartFill onClick={()=>handleFavorite(music, 'remove')} style={{width:50, height:30, position:'absolute', top:5, left:0, cursor:'pointer'}} color='red' />                    
            }                     
                <S.Play href={music.link} target='blank'><AiOutlinePlayCircle style={{width:'100%', height:'100%', cursor:'pointer'}} color='white' /></S.Play>                
                <S.ItemList><S.ImageArtist src={music.artist.picture_big} alt={music.artist.name} /></S.ItemList>
                <S.ItemList>
                    <S.AudioCard controls="controls">
                        <S.SourceAudio src={music.preview} type="audio/mp3" />                        
                    </S.AudioCard>
                </S.ItemList>
            </S.CardList>
            <S.DetailCard>
                <S.ItemList> Artista: {music.artist.name} |</S.ItemList>
                <S.ItemList style={{margin: '0 5px'}}>Album: {music.album.title} |</S.ItemList>                
                <S.ItemList>Música: {music.title} |</S.ItemList>
                <S.ItemList>Duração: {time()}</S.ItemList>
            </S.DetailCard>
        </S.ContainerCard>
    )
}

export default Card