import styled from 'styled-components';

export const LandingSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainContainer = styled.div`
    position: relative;
    height: 80%;
    width: 90%;
    max-width: 90rem;
    display: flex;
    flex-direction: column;
    background: #fff;
    @media screen and (min-width: 767px){
        display: flex;
        flex-direction: row;
    }
`;

/** TEXT-SECTION **/
export const TextContainer = styled.ul`
    margin-top: -2rem;
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;    
    padding: 0 3rem;
    @media screen and (min-width: 767px){
        margin-top: 12%;
    }
`;

export const TextLi = styled.li`
    text-transform: uppercase;
    font-size: clamp(2.4rem, 6vw, 4rem);
    letter-spacing: .1rem;
    transition: .25s ease-out;
    font-family: 'Gamour';
    cursor: pointer;
    padding-left: 1rem;
    width: 100%;
    &:hover {
        margin-left: 3rem;
        
    }
`;

export const Hr = styled.hr`
    height: .01rem;
    width: 100%;
    background: #000;
    border: none;
    margin-bottom: 1rem;
`;

/** IMAGE-SECTION **/
export const ImageWrapper = styled.div`
    position: relative;
    margin-top: 3rem;
    height: 100%;
    max-height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
 //   box-shadow: 0 .2rem .4rem rgba(0,0,0,.3);
    @media screen and (min-width: 767px){
        margin-top: 8%;
    }
`;

export const DefaultImg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    opacity: .88;
`;

export const ImageContainer = styled.div`
    position: relative;
   // margin-top: 3rem;
    height: 100%;
    max-height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
 //   box-shadow: 0 .2rem .4rem rgba(0,0,0,.3);
    @media screen and (min-width: 767px){
 //       margin-top: 8%;
    }
`;

export const HeaderH2 = styled.h2`
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    color: #f00;
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: 2rem;
    text-align: center;
    @media screen and (min-width: 767px){
        top: 3rem;
    }
`;

export const Img = styled.img`
position: absolute;
    height: 100%;    
    object-fit: contain;
`;

/** INFO-SECTION **/
export const InfoContainer = styled.div`
    position: absolute;    
    top: 80%;
    // transform: translateY(-50%);
    height: max-content;
    background: rgba(255,255,255,.7);
    width: 90%;
    z-index: 2;
    padding: 1rem;
    border-radius: .3rem;
    @media screen and (min-width: 767px){
        right: -7rem;
        width: 30rem;
        top: 65%;
    }
`;

export const DefaultP = styled.p`
    font-size: 1.4rem;
    letter-spacing: .1rem;
`;

export const InfoP = styled.p`
    font-size: 1.4rem;
    letter-spacing: .1rem;
`;