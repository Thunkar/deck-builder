import * as SC from './app.styles.js';
import Card from './components/card/card.js';
import cardData from './data/cards.json';

function App() {
  return (
   <SC.Container>
    {
      cardData?.cards.map((card, index) => (<Card key={index} {...{...cardData.common, ...card}}/>))
    }
   </SC.Container>
  );
}

export default App;
