import React, {useState} from "react";
import CardDescription from "./CardDescription";

import CardSubtext from "./CardSubtext";
function Card({card}) {
    const [color, setColor] = useState('');
    const [select, setSelect] = useState(true);

    function selectCard() {
        setSelect(!select);
        if (select) {
            setColor ('#D91667');
        } else if (!select) {
            setColor('');
        }

    }

    return (
        <article className="cards__item">
            <div className="item__border"
                 style={{backgroundColor: color}}
                 onClick={selectCard}
            >
                <div className="item__inner">
                    <header className="item__header">
                        <p className="item__suptitle">{card.suptitle}</p>
                        <h2 className="item__title">{card.title}</h2>
                        <h3 className="item__subtitle">{card.flavour}</h3>
                    </header>
                    <div className="item__description">
                        {card.description.map((description, index) => <CardDescription description = {description} key = {index}/>)}
                    </div>
                    <div className="item__type" style={{backgroundColor: color}}>
                        <span className="item__weight">{card.weight}</span>
                        <span className="item__kg">кг</span>
                    </div>
                </div>
            </div>
            <CardSubtext changeColor = {selectCard}/>
        </article>
    );
}
export default Card;
