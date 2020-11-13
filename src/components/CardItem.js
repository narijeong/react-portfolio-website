import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <l1 className="cards__items">
                <a className="cards__item__link" href={props.path} target="_blank">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                     </div>    
                </a>  
            </l1>
        </>
    )
}

export default CardItem
