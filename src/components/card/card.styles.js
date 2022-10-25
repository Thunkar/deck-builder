import styled from "styled-components";

const colors = {
    primary: '#2f3c5a',
    accent: '#86BDDB',
    darker: '#00304a'
}

export const Boxed = styled.div`
    color: white;
    border-radius: 15px;
    border-color: ${colors.darker};
`

export const CardContainer = styled(Boxed)`
    display: flex;
    position: relative; 
    flex-direction: column;
    border-radius: 0px;
    width: 330px;
    height: 465px;
    background-image: ${props => `url(/assets/${props.borderImage})` || `url(/assets/${props.bgImage})`  || null};
    background-color: ${props => (props.bgColor && !props.bgImage) ? props.bgColor : "white"};
    background: ${props => (props.background && !props.bgImage && !props.borderImage) ? props.background : null};
    margin: 15px;
`

export const CardContainerBg = styled(Boxed)`
    flex-grow: 1;
    margin: 10px;
    border-radius: 15px;
    background-color: ${props => (props.bgColor && !props.bgImage) ? props.bgColor : "white"};
    background: ${props => (props.background && !props.bgImage) ? props.background : null};
`

export const TitleContainer = styled(Boxed)`
    color: ${props => props.titleColor || null};
    background-color: ${colors.primary};
    font-size: 20px;
    padding: 5px 12px;
    font-weight: bold;
    border-radius: 15px;
    filter: drop-shadow(2px 1px 3px black);
    margin: 5px 3px 0px 3px;
`

export const ImageContainer = styled(Boxed)`
    object-fit: cover;
    border-radius: 15px;
    background-image: ${props => `url(/assets/${props.image})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 250px;
    border-radius: 15px;
    margin: 5px 5px 0px 5px;
`

export const SectionContainer = styled(Boxed)`
    display: flex;
    flex-direction: row;
    margin: 5px 3px 0px 3px;
    padding: 5px 12px;
    background-color: ${colors.primary};
    filter: drop-shadow(2px 1px 3px black);
`

export const CostEffectContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: bold;
    font-size: 16px;
    align-items: center;
    line-height: 16px;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    font-style: italic;
    flex-grow: 1;
    margin-right: 5px;
`

export const Icon = styled.img`
    height: 20px;
    width: 20px;
    margin: 0px 6px;
    }
`

export const Footer = styled(SectionContainer)`
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 12%;
    margin: 0px;
    align-self: flex-end;
`