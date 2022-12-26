import * as SC from './index.styles.js';
import Card from './components/card/index.js';
import cardData from '../../data/cards.json';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { chunk } from 'lodash';
import { NonPrintableWrapper, PrintButton } from '../common/index.styles.js';

function ShipMap() {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const breakAfterRows = 7;
  const columnSize = 6;

  const cards = cardData?.cards.concat(cardData?.cards)
    .map((card) => {
      let mainCard = {};
      if (card.alt) {
        mainCard = cardData.cards.find(
          (mainCard) => !mainCard.alt && mainCard.title === card.alt
        );
        if (!mainCard) return null;
      }
      return { ...cardData.common, ...mainCard, ...card };
    })
    .filter((card) => card && !card.title.includes("Reactor"));

  return (
    <NonPrintableWrapper>
      <SC.Container breakAfterRows={breakAfterRows} ref={componentRef}>
        {
          chunk(cards, columnSize).map((cardChunk, rowIndex) => 
             (<SC.CardRow key={rowIndex}>
              {
                cardChunk.map((card, index) => (<Card key={rowIndex + index} {...card}/>))
              }
            </SC.CardRow>))
        }
      </SC.Container>
      <PrintButton onClick={handlePrint}>Print this out!</PrintButton>
    </NonPrintableWrapper>
  );
}

export default ShipMap;
