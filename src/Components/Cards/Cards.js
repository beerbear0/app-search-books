import Card from '../Card/Card';
import Popup from '../Popup/Popup';
import './Cards.css';

function Cards({ 
    isOpen, 
    isClose, 
    handleCard, 

}) {

   

    return(
        <section className='cards'>
            <h2 className='cards__counter'>Found: какое-то число</h2>
            {handleCard()}
        </section>
    )
}

export default Cards;