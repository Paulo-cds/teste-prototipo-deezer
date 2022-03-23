import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormSearch = styled.form`
    margin: 5rem auto;
    width: 50%;
    display: flex;    
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Search = styled.input`
    width: 100%;
    height: 2rem;
    //margin-bottom: 20px;
    padding: 0 5px;
`

export const Submit = styled.button`
    width: 5rem;
    height: 2rem;
    background-color: white;  
    transition: .8s;  
    position: absolute;
    right: 10px;

    :hover{
        background: black;
        color: white;
        cursor: pointer;
        width:5.5rem;
        border-radius: 15px;
        box-shadow: 0 0 10px white;
    }
`

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap:wrap;
    border: 1px solid black;
    width: 350px;
    height: fit-content;
    margin: 20px 10px;      
`

export const ListMusic = styled.ul`     
    display: flex;
    justify-content: space-evenly;
    align-items: center;   
    flex-wrap: wrap;   
    margin: 70px 30px; 
`

export const ItemList = styled.li`
    list-style: none;    
`

export const CardList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative; 
    width: 100%;
`

export const DetailCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
    width: 100%;
`

export const ImageArtist = styled.img`
    width: 100%;    
`

export const AudioCard = styled.audio`
    margin: 1px solid black;
    border-radius: 20px;
    box-shadow: 0 0 5px black;
    position: absolute;
    bottom: 5px;
    left: calc(50% - 46%);
    z-index: 99;
    width: 90%;
`

export const SourceAudio = styled.source``

export const Header = styled.header`
    width: 100%;
    height: 3rem;
    background-color: black;
    color: white;
    position: absolute;
    top: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`