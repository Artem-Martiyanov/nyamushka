import React from "react";
import {CardDescription} from "./CardDescription";
import {cards} from "../data/cards";
import {CardSubtext} from "./CardSubtext";
export function Card({card}) {
    return (
        <article className="cards__item">
            <div className="item__border">
                <div className="item__inner">
                    <header className="item__header">
                        <p className="item__suptitle">{card.suptitle}</p>
                        <h2 className="item__title">{card.title}</h2>
                        <p className="item__subtitle">{card.flavour}</p>
                    </header>
                    <div className="item__description">

                        {card.description.map((description, index) => <CardDescription description = {description} key = {index}/>)}
                    </div>
                    <div className="item__type">
                        <span className="item__weight">{card.weight}</span>
                        <span className="item__kg">кг</span>
                    </div>
                </div>
            </div>
            <CardSubtext/>
        </article>
    );

}


{/*


            */}
