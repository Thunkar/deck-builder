import * as SC from './card.styles.js';

function Section({text, costs, effects}) {
    return (
        <SC.SectionContainer>
            { costs && <SC.CostContainer>
                    {costs?.map((cost, index) => (
                    <SC.IconsContainer key={index}>
                        <p>{cost?.value}</p>
                        <SC.Icon src={`/assets/${cost.type}.png`}></SC.Icon>
                    </SC.IconsContainer> 
                    ))}
                </SC.CostContainer>
            }
            <SC.TextContainer>
                <p>{text}</p>
            </SC.TextContainer>
            {effects && <SC.EffectsContainer>
            
                {
                    effects?.or && effects.or.map((effect, index) => (
                    <SC.IconsContainer>
                        <p>{effect.value}</p>
                        <SC.Icon src={`/assets/${effect.name}.png`}></SC.Icon>
                        {index !== (effects.or.length - 1) && <p>|&nbsp;</p>}
                    </SC.IconsContainer>
                    ))
                }
                {
                    effects?.and && effects.and.map((effect, index) => (
                        <SC.IconsContainer>
                            <p>{effect.value}</p>
                            <SC.Icon src={`/assets/${effect.name}.png`}></SC.Icon>
                            {index !== (effects.and.length - 1) && <p>&&nbsp;</p>}
                        </SC.IconsContainer>
                        ))
                }
                </SC.EffectsContainer>
            }
        </SC.SectionContainer>
    )
}

function Card({title, borderImage, bgColor, background, image, sections, footer}) {
    const cardContent = <>
     <SC.TitleContainer>{title}</SC.TitleContainer>
            <SC.ImageContainer image={image}></SC.ImageContainer>
            { sections.map((section, index) => (<Section key={index} {...section}></Section>)) }
        </>
    return (
        <SC.CardContainer borderImage={borderImage} bgColor={bgColor} background={background}>
            <SC.CardContainerBg borderImage={borderImage} bgColor={bgColor} background={background}>{cardContent}</SC.CardContainerBg>
            { footer?.repair && <SC.Footer>
                <p>{footer.repair}</p>
                <SC.Icon src='/assets/repair.png'></SC.Icon>
            </SC.Footer> }
        </SC.CardContainer>
    )
}

export default Card;