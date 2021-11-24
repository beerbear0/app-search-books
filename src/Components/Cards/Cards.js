import Card from '../Card/Card';
import Popup from '../Popup/Popup';
import './Cards.css';

function Cards({isOpen, isClose, selectedCard}) {
    return(
        <section className='cards'>
            <h2 className='cards__counter'>Found: какое-то число</h2>
            <div className='cards__list'>
                {selectedCard && <Card 
                    isOpen={isOpen}
                    isClose={isClose}
                />}
            </div>
            <Popup />
        </section>
    )
}

export default Cards;