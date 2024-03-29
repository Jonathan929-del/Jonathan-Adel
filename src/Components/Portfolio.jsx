// Imports
import Fade from 'react-reveal/Fade';
import React, {useState} from 'react';
import styled from 'styled-components';
import ImgOne from '../Images/Portfolio Gallery/Social Media.png';
import ImgTwo from '../Images/Portfolio Gallery/threads.png';





// Styles
const PortfolioSection = styled.section`
    width:100%;
    display:flex;
    min-height:50vh;
    align-items:center;
    justify-content:center;
`
const PortfolioContainer = styled.div`
    width:80%;
    height:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
`
const Heading = styled.h1`
    font-size:30px;
    font-weight:300;
    margin-top:100px;
    position:relative;

    &::before{
        left:2%;
        top:35px;
        width:98%;
        margin:auto;
        font-size:12px;
        position:absolute;
        content:'My Previous Projects';
        border-bottom:1px solid #08ceb1;
    }

    @media screen and (max-width:500px){
        margin-top:0;
    }
`
const PortfolioWrapper = styled.div`
    gap:20px;
    width:100%;
    height:90%;
    display:flex;
    margin-top:80px;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:768px){
        height:50%;
        flex-direction:column;
    }

    @media screen and (max-width:350px){
        height:100%;
    }
`
const ItemOne = styled.div`
    flex:1;
    border-radius:5px;
    position:relative;
`
const IamgeOne = styled.img`
    height:auto;
    max-width:100%;
    border-radius:5px;
`
const LayerOne = styled.a`
    top:0;
    left:0;
    z-index:2;
    width:100%;
    height:98%;
    display:flex;
    color:#fff;
    cursor:pointer;
    border-radius:5px;
    position:absolute;
    align-items:center;
    text-decoration:none;
    transition:0.2s linear;
    justify-content:center;
    background-color:#000000bd;
    opacity:${({isHoveredOne}) => isHoveredOne ? '1' : '0'};
`
const ItemTwo = styled.div`
    flex:1;
    border-radius:5px;
    position:relative;
`
const IamgeTwo = styled.img`
    height:auto;
    max-width:100%;
    border-radius:5px;
`
const LayerTwo = styled.a`
    top:0;
    left:0;
    z-index:2;
    width:100%;
    height:98%;
    display:flex;
    color:#fff;
    cursor:pointer;
    border-radius:5px;
    position:absolute;
    align-items:center;
    text-decoration:none;
    transition:0.2s linear;
    justify-content:center;
    background-color:#000000bd;
    opacity:${({isHoveredTwo}) => isHoveredTwo ? '1' : '0'};
`





// Main Function
export default function Portfolio() {

    const [isHoveredOne, setIsHoveredOne] = useState(false);
    const [isHoveredTwo, setIsHoveredTwo] = useState(false);
    const HoverHandlerOne = () => {
        setIsHoveredOne(!isHoveredOne);
    };
    const HoverHandlerTwo = () => {
        setIsHoveredTwo(!isHoveredTwo);
    };

  return(
        <PortfolioSection id="portfolio">
            <PortfolioContainer>
                <Fade top><Heading>Portfolio</Heading></Fade>
                <PortfolioWrapper>
                    <Fade bottom>
                        <ItemOne>
                            <IamgeOne src={ImgOne}/>
                            <LayerOne isHoveredOne={isHoveredOne} target="_blank" onMouseOver={HoverHandlerOne} onMouseLeave={HoverHandlerOne} href='https://social-media-jonathan929-del.vercel.app/'>
                                Social Media App
                            </LayerOne>
                        </ItemOne>
                        <ItemTwo>
                            <IamgeTwo src={ImgTwo}/>
                            <LayerTwo isHoveredTwo={isHoveredTwo} target="_blank" onMouseOver={HoverHandlerTwo} onMouseLeave={HoverHandlerTwo} href='https://threads-two-beryl.vercel.app/'>
                                Threads
                            </LayerTwo>
                        </ItemTwo>
                    </Fade>
                </PortfolioWrapper>
            </PortfolioContainer>
        </PortfolioSection>
  );
}