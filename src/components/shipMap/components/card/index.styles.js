import styled from "styled-components";

const colors = {
    primary: '#2f3c5a',
    accent: '#86BDDB',
    darker: '#00304a'
}

export const Boxed = styled.div`
    color: white;
    border-radius: 4mm;
    border-color: ${colors.darker};
`

export const CardContainer = styled(Boxed)`
    display: flex;
    position: relative; 
    flex-direction: column;
    border-radius: 0;
    height: 30mm;
    width: 30mm;
    justify-content: space-between;
    object-fit: cover;
    background-image: ${props => `url(/assets/${props.bgImage})`};
    padding: .2em;
    box-sizing: border-box;
`

export const TitleContainer = styled(Boxed)`
    display: flex;
    color: ${props => props.titleColor || null};
    background-color: ${colors.primary};
    padding: 2% 5%;
    border-radius: 5mm;
    filter: drop-shadow(1mm .5mm 1mm black);
    margin: 1% 1.5% 0 1.5%;

    & h1 {
        flex-grow: 1;
        margin: 0px;
        font-size: .5em;
        font-weight: bold;
    }
`

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: .4em;
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
    justify-content: space-between;
    margin: 2% 1.5% 0 1.5%;
    padding: 1.5% 4%;
    background-color: ${colors.primary};
    filter: drop-shadow(1mm .5mm 1mm black);
`

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: bold;
    font-size: .5em;
    align-items: center;
    line-height: 0.5em;
`

export const CostContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    width: 40%;
`

export const EffectsContainer = styled(CostContainer)`
    flex-grow: 1;
    justify-content: flex-end;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    font-style: italic;
    font-size: .4em;
`

export const Icon = styled.img`
    height: 1.1em;
    width: 1.1em;
    margin: 0 .2em;
`

export const DetailsText = styled.div`
    font-style: italic;
    font-size: 0.6em;
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