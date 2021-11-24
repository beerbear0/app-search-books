import './Popup.css';

function Popup ({
    isOpen,
    isClose,
    thumbnail,
    title,
    categories,
    authors,
}) {
    return (
        <div className='popup__background'>    
            <div className='popup'>
                
                <div className='popup__image_block'>
                    <img className='popup__image' src={thumbnail} alt={title} />
                </div>
                <div className='popup__description'>
                    <p className='popup__categories'>{categories}</p>
                    <h2 className='popup__title'>{title}</h2>
                    <p className='popup__author'>{authors}</p>
                    <h3 className='popup__text'>{}</h3>
                </div>
                <button className='popup__btn-close' />
            </div>
        </div>  
    )
}

export default Popup;