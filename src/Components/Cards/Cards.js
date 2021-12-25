

import './Cards.css';

function Cards({ handleCard }) {
    return(
        <section className='cards'>
            {handleCard()}
        
        </section>
    )
}

export default Cards;