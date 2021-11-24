import './Card.css'

function Card ({isOpen, isClose}) {
    return (
        <div className='card'>
            <img className='card__image' src='https://phonoteka.org/uploads/posts/2021-05/1621740789_18-phonoteka_org-p-fon-dlya-prezentatsii-kniga-zakritaya-21.jpg' alt='cardImage' />
            <p className='card__categories'>Categories</p>
            <h2 className='card__title'>Вы не знаете JavaScript, Node.js и много чего еще)))</h2>
            <p className='card__author'>Автор Автор</p>
        </div>
    )
}

export default Card;