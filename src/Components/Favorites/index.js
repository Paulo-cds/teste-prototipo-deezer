import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card/card'
import * as S from './styleFavorites'
import { GoHome } from 'react-icons/go'
import {useNavigate} from 'react-router-dom'

const Favorites = () => {
    //recebe os dados salvos no redux
  const favorites = useSelector(state => state.data)
  const navigate = useNavigate()
    return(        
        <>      
            <S.Header>
                <h3>Favoritos</h3>
                <GoHome style={{right: 20, position:'absolute', width: 50, height: 20, cursor: 'pointer'}} onClick={() => navigate('/')} />
            </S.Header>           
            <S.ListMusic>
                {
                    favorites.map((music, index)=>(                 
                        <Card music={music} index={index} select={false} control={true} />                                        
                    ))  
                }  
            </S.ListMusic>
        </>
    )
}

export default Favorites