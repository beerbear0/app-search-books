import React, {useState} from 'react';
import Popup from '../Popup/Popup';
import './Card.css'

function Card ({
    isOpen,
    isClose,     
    thumbnail,
    title, 
    categories, 
    authors,
    description,
}) {
    // const [modal, setModal] = useState(false);
    // const toggle = () => setModal(!modal);

    return (
        <>
        <div className='card' onClick='toggle'>
            <img className='card__image' src={thumbnail} alt='cardImage' />
            <p className='card__categories'>{categories}</p>
            <h2 className='card__title'>{title}</h2>
            <p className='card__author'>{authors}</p>
        </div>
        <Popup 
            isOpen={isOpen}
            isClose={isClose}
            thumbnail={thumbnail}
            title={title}
            categories={categories}
            authors={authors}
            description={description}
      />
        </>
    )
}

export default Card;