import React, {useState} from "react";
import CardDescription from "./CardDescription";
import CardSubtext from "./CardSubtext";
function Card({card}) {
    const [color, setColor] = useState('');
    const [select, setSelect] = useState(true);
    const [hover, setHover] = useState(false);
    function isDisable() {
        let className = "cards__item";
        if (!card.count) {
            className += ' disable';
        }
        return className;
    }
    function selectCard() {
        if (card.count) {
            setSelect(!select);
            if (select) {
                setColor('#D91667');
            } else if (!select) {
                setColor('');
            }
        }
    }
    function mouseLeave() {
        if (!select) {
            setHover(true);
        }
    }
    function mouseEnter() {
        if (!select) {
            setHover(false);
        }
    }
    return (
        <article className={isDisable()}>
            <div className="item__border"
                 style={{backgroundColor: color}}
                 onClick={selectCard}
                 onMouseLeave={mouseLeave}
                 onMouseEnter={mouseEnter}
            >
                <div className="item__inner">
                    <header className="item__header">
                        <p className="item__suptitle ">
                            {!hover ? card.suptitle : <span style={{color: '#E62E7A'}}>Котэ не одобряет?</span>}
                        </p>
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
            {!card.count ? <p className="item__subtext" style={{color: '#FFFF66'}}>Печалька, {card.flavour} закончился.</p> :
            !select ? <p className="item__subtext">{card.specialText}</p> : <CardSubtext changeColor = {selectCard}/>}
        </article>
    );
}
export default Card;
