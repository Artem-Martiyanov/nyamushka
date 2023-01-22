import React from "react";


function CardSubtext(props) {
    return (
        <p className="item__subtext">Чего сидишь? Порадуй котэ, <button onClick={props.changeColor} type="button" className="item__sale-btn">купи.</button></p>
    );
}
export default CardSubtext;