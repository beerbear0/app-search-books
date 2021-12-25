import React from 'react';
import './Header.css'
function Header ({handleSubmit, query, setQuery, startIndex, setStartIndex, maxResult, setMaxResult}) {
    function onChange (evt) {
        setQuery(evt.target.value)
    }

    return(
        <section className='header'>
            <h1 className="header__title"> Search for books </h1>
            <form className='header__form'>
                <input 
                className='header__input' 
                value={query}
                onChange={onChange}
                />
                <button className='header__btn-search' onClick={handleSubmit}>Поиск</button> 
                <div className='header__selects'>
                    <p className='header__text'>Start Index</p>
                    <input
                        className=''
                        id='startIndex'
                        placeholder='Start Index'
                        value={startIndex}
                        onChange={(e) => setStartIndex(e.target.value)}
                    />
                    <p className='header__text'>max Result</p>
                    <input
                        className=''
                        id='maxResult'
                        placeholder='Max Result'
                        value={maxResult}
                        onChange={(e) => setMaxResult(e.target.value)}
                    />
                </div>
            </form>
        </section>
    )
}

export default Header;