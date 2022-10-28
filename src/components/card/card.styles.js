import styled from "styled-components";

const colors = {
    primary: '#2f3c5a',
    accent: '#86BDDB',
    darker: '#00304a'
}

export const Boxed = styled.div`
    color: white;
    border-radius: 5mm;
    border-color: ${colors.darker};
`

export const CardContainer = styled(Boxed)`
    display: flex;
    position: relative; 
    flex-direction: column;
    border-radius: 0;
    height: 87mm;
    width: 56mm;
    background-image: ${props => `url(/assets/${props.borderImage})` || `url(/assets/${props.bgImage})`  || null};
    background-color: ${props => (props.bgColor && !props.bgImage) ? props.bgColor : "white"};
    background: ${props => (props.background && !props.bgImage && !props.borderImage) ? props.background : null};
    margin: .05em;
`

export const CardContainerBg = styled(Boxed)`
    flex-grow: 1;
    margin: 2.5%;
    border-radius: 4mm;
    background-color: ${props => (props.bgColor && !props.bgImage) ? props.bgColor : "white"};
    background: ${props => (props.background && !props.bgImage) ? props.background : null};
`

export const TitleContainer = styled(Boxed)`
    color: ${props => props.titleColor || null};
    background-color: ${colors.primary};
    font-size: .8em;
    padding: 2% 5%;
    font-weight: bold;
    border-radius: 5mm;
    filter: drop-shadow(1mm .5mm 1mm black);
    margin: 1% 1.5% 0 1.5%;
`

export const ImageContainer = styled(Boxed)`
    object-fit: cover;
    border-radius: 5mm;
    background-image: ${props => `url(/assets/${props.image})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50%;
    border-radius: 5mm;
    margin: 2% 1.5% 0 1.5%;
    filter: drop-shadow(1mm .5mm 1mm black);
`

export const SectionContainer = styled(Boxed)`
    display: flex;
    flex-direction: row;
    margin: 2% 1.5% 0 1.5%;
    padding: 1.5% 3%;
    background-color: ${colors.primary};
    filter: drop-shadow(1mm .5mm 1mm black);
`

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: bold;
    font-size: .75em;
    align-items: center;
    line-height: 1.5em;
`

export const CostContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 32%;
`

export const EffectsContainer = styled(CostContainer)`
    flex-grow: 1;
    justify-content: flex-end;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    font-style: italic;
    flex-grow: 1;
    font-size: .65em;
`

export const Icon = styled.img`
    height: 1.1em;
    width: 1.1em;
    margin: 0 .2em;
`

export const Footer = styled(SectionContainer)`
    position: absolute;
    filter: unset;
    bottom: 2.2%;
    right: 3.8%;
    width: 8%;
    margin: 0;
    align-self: flex-end;
    font-size: .6em;
`