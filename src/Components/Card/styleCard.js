import styled from 'styled-components'

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

export const Play = styled.a`
    background-color:black;
    position: absolute;
    top:5px;
    right: 5px;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`