import * as SC from './app.styles.js';
import Card from './components/card/card.js';
import cardData from './data/cards.json';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { chunk } from 'lodash';

function App() {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const breakAfterRows = 2;
  const columnSize = 5;

  return (
 <SC.NonPrintableWrapper>
      <SC.Container breakAfterRows={breakAfterRows} ref={componentRef}>
        {
          chunk(cardData?.cards, columnSize).map((cardChunk, rowIndex) => 
             (<SC.CardRow key={rowIndex}>
              {
                cardChunk.map((card, index) => (<Card key={rowIndex + index} {...{...cardData.common, ...card}}/>))
              }
            </SC.CardRow>))
        }
      </SC.Container>
      <SC.PrintButton onClick={handlePrint}>Print this out!</SC.PrintButton>
    </SC.NonPrintableWrapper>
  );
}

export default App;
