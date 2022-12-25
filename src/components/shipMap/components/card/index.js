import * as SC from './index.styles.js';

function Section({text, costs, effects}) {
    return (
        <SC.SectionContainer>
            { costs && <SC.CostContainer>
                    {costs?.map((cost, index) => (
                    <SC.IconsContainer key={index}>
                        <p>{cost?.value}</p>
                        { cost.type !== 'B' ? <SC.Icon src={`/assets/${cost.type}.png`}></SC.Icon> : 'B' }
                        { cost?.blocks && <p>/&nbsp;{cost.blocks}B</p>}
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
                    <SC.IconsContainer key={index}>
                        <p>{effect.value}</p>
                        <SC.Icon src={`/assets/${effect.name}.png`}></SC.Icon>
                        {index !== (effects.or.length - 1) && <p>|&nbsp;</p>}
                        {effect.details && <SC.DetailsText><p>&nbsp;({effect.details})</p></SC.DetailsText>}
                    </SC.IconsContainer>
                    ))
                }
                {
                    effects?.and && effects.and.map((effect, index) => (
                        <SC.IconsContainer key={index}>
                            <p>{effect.value}</p>
                            <SC.Icon src={`/assets/${effect.name}.png`}></SC.Icon>
                            {index !== (effects.and.length - 1) && <p>&&nbsp;</p>}
                            {effect.details && <SC.DetailsText><p>{effect.details}</p></SC.DetailsText>}
                        </SC.IconsContainer>
                        ))
                }
                </SC.EffectsContainer>
            }
        </SC.SectionContainer>
    )
}

function Card({title, image, sections, subtitle, footer}) {
    const cardContent = <>
            <SC.TitleContainer>
                <h1>{title}</h1>
                { 
                subtitle && <SC.SubtitleContainer>
                    <p>{subtitle.text}</p>
                    <SC.Icon src={`/assets/${subtitle.icon}.png`}></SC.Icon>
                </SC.SubtitleContainer>
                }
            </SC.TitleContainer>
            { sections.map((section, index) => (<Section key={index} {...section}></Section>)) }
        </>
    return (
        <SC.CardContainer bgImage={image}>
            {cardContent}
            { footer?.repair && <SC.Footer>
                <p>{footer.repair}</p>
                <SC.Icon src='/assets/repair.png'></SC.Icon>
            </SC.Footer> }
        </SC.CardContainer>
    )
}

export default Card;