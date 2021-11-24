import './Popup.css';

function Popup () {
    return (
        <div className='popup__background'>    
            <div className='popup'>
                
                <div className='popup__image_block'>
                    <img className='popup__image' src='https://phonoteka.org/uploads/posts/2021-05/1621740789_18-phonoteka_org-p-fon-dlya-prezentatsii-kniga-zakritaya-21.jpg' alt='a' />
                </div>
                <div className='popup__description'>
                    <p className='popup__categories'>Categories</p>
                    <h2 className='popup__title'>Name books</h2>
                    <p className='popup__author'>Автор Автор</p>
                    <h3 className='popup__text'>Описание Описание Описание ОписаниеОписание Описание Описание Описание Описание ОписаниеОписание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание</h3>
                </div>
                <button className='popup__btn-close' />
            </div>
        </div>  
    )
}

export default Popup;