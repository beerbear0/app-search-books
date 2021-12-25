import React, {useState} from 'react';
import { Modal, Button } from 'reactstrap';
import './Card.css'

function Card ({
    thumbnail,
    title, 
    categories, 
    authors,
    description,
}) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
        <div className='card' >
            <img className='card__image' src={thumbnail} alt='cardImage' />
            <p className='card__categories'>{categories}</p>
            <h2 className='card__title'>{title}</h2>
            <p className='card__author'>{authors}</p>
            <Button className='card__margin' onClick={toggle}>More Info</Button>
            {/* <button type='button' onClick={handleCardClick}>Узнать больше</button> */}
        </div>
        <Modal toggle={toggle} isOpen={modal}>
            <div className='modal-header d-flex justify-content-center'>
                <h5 className='modal-title text-center' id='exampleModalLabel'>{title}</h5>
                <button aria-label='close' className='close' type="button" onClick={toggle}>
                    <span aria-hidden={true}>X</span>
                </button>
            </div>
            <div className='modal-body'>
                <div className='d-flex justify-content-beetwen'>
                    <img  src={ thumbnail } alt={title} style={{ height: '233px' }} />
                    <div>
                        <p>{categories}</p>
                        <h3>{title}</h3>
                        <p>{authors}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Modal>
        </>
    )
}

export default Card;