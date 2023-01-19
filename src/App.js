import {Card} from "./components/Card";
import {cards} from "./data/cards";

function App() {
  return (
      <>
        <h1 className="page__header">Кошачий корм Нямушка</h1>
        <div className="container">
            <p className="page__text">Ты сегодня покормил кота?</p>
            <section className="cards">
                {cards.map(card => <Card card = {card} key = {card.id}/>)}
            </section>
        </div>
      </>
  );
}

export default App;