import styled from "styled-components";

const colors = {
    primary: '#141d32',
    accent: 'grey',
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
  object-fit: cover;
  background-image: ${(props) => `url(/assets/${props.bgImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0.2em 0.1em;
  box-sizing: border-box;
  margin: 0.05em;
  border-radius: 2%;
`;

export const TitleContainer = styled(Boxed)`
    display: flex;
    color: ${props => props.titleColor || null};
    background-color: ${colors.primary};
    padding: 1% 3%;
    border-radius: 5mm;
    align-items: center;
    filter: drop-shadow(1mm .5mm 1mm ${(props) => colors.accent});
    margin: 1% 1.5% 0 1.5%;

    & h1 {
        flex-grow: 1;
        margin: 0px;
        font-size: .5em;
        font-weight: bold;
        line-height: 0.5em;
    }
`

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: .4em;
`
export const Spacer = styled.div`
    flex: auto 1 1;
`

export const SectionContainer = styled(Boxed)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2% 1.5% 0 1.5%;
    padding: 1.5% 4%;
    background-color: ${colors.darker};
    filter: drop-shadow(1mm .5mm 1mm ${(props) => colors.accent});
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 0.5em;
  align-items: center;
  line-height: 0.5em;
`;

export const CostContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 36%;
`

export const EffectsContainer = styled(CostContainer)`
    flex-grow: 1;
    justify-content: flex-end;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  font-style: italic;
  font-weight: bold;
  font-size: 0.4em;
  width: ${(props) => props.wideText ? '100%' : '20%'}
`;

export const Icon = styled.img`
    height: 1.1em;
    width: 1.1em;
    margin: 0 .2em;
`

export const DetailsText = styled.div`
    font-style: italic;
    font-size: 0.6em;
    line-height: 1.3em;
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