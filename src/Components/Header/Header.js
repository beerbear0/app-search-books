import React from 'react';
import './Header.css'
function Header () {
    return(
        <section className='header'>
            <h1 className="header__title"> Search for books </h1>
            <form className='header__form'>
                <input className='header__input' />
                <button className='header__btn-search'>Поиск</button> 
                <div className='header__selects'>
                    <p className='header__text'>Categories</p>
                    <select className='header__select'>
                        <option>All</option>
                        <option>Art</option>
                        <option>Biography</option>
                        <option>Computers</option>
                        <option>History</option>
                        <option>Medical</option>
                        <option>Poetry</option>
                    </select>
                    <p className='header__text'>Sorting by</p>
                    <select className='header__select'>
                        <option>Relevance</option>
                        <option>Newest</option>
                    </select>
                </div>
            </form>
        </section>
    )
}

export default Header;