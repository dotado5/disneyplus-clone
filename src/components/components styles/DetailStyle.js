import styled from "styled-components"


export const Container = styled.div`
    min-height: calc(100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`
export const Controls = styled.div`
    display: flex;
    align-items: center;
`
export const PlayButton = styled.button`
    font-size: 15px;
    border-radius: 4px;
    padding: 0px 24px;
    margin-right: 22px;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 56px;
    background: rgb(249, 249, 249);
    letter-spacing: 1.8px;

    &:hover{
        background: rgb(198, 198, 198);
    }
`
export const TraillerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    color: white;
    padding: 0px 10px;
    border: 1px solid rgb(249, 249, 249, 0.5);
`
export const AddButton = styled.button`
    width: 44px;
    height: 44px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    
    &:hover{
        background: rgb(198, 198, 198);
    }

    span{
        font-size: 30px;
        color: white;
    }

`
export const GroupButton = styled(AddButton)`
    background: rgb(0, 0, 0,);
`
export const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
export const Descrition = styled.div`
    line-height: 1.4px;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
    line-height: 1.5;
    font-weight: bold;
`