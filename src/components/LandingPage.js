import { useState, useRef } from 'react';
import gsap from 'gsap';
import data from './data';
import {
    LandingSection,
    MainContainer,
    TextContainer,
    TextLi,
    Hr,
    HeaderH2,
    ImageWrapper,
    DefaultImg,
    ImageContainer,
    Img,
    InfoContainer,
    DefaultP,
    InfoP
} from './styling';
import zero from '../assets/images/default.png';

const LandingPage = () => {
    const [pictures, setPictures] = useState("");
    let imageWrapper = useRef(null);

    let tl = gsap.timeline();
    let tl2 = gsap.timeline();

    const onHover = (item) => {
        setPictures(item);
        tl.fromTo(imageWrapper, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });
        tl2.to(".default", { autoAlpha: 0, display: "none", duration: .35 });
    }

    const noHover = (item) => {
        //   setPictures(!item);
        //  tl.fromTo(imageWrapper, { opacity: 1 }, { opacity: 0, duration: 1 });
    }

    return (
        <>
            <LandingSection>
                <MainContainer>
                    <TextContainer>
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <TextLi onMouseEnter={() => onHover(item)} onMouseLeave={() => noHover(item)}>
                                        {item.title}
                                    </TextLi>
                                    <Hr />
                                </div>
                            )
                        })}
                    </TextContainer>
                    <ImageWrapper>
                        <DefaultImg src={zero} className="default" />
                        <ImageContainer ref={el => (imageWrapper = el)}>
                            <HeaderH2>{pictures.title}</HeaderH2>
                            <Img src={pictures.img} />
                        </ImageContainer>
                    </ImageWrapper>
                    <InfoContainer >
                        <DefaultP className="default">
                            Hover The List To See More Images
                        </DefaultP>
                        <InfoP>
                            {pictures.desc}
                        </InfoP>
                    </InfoContainer>
                </MainContainer>
            </LandingSection>
        </>
    )
}

export default LandingPage
