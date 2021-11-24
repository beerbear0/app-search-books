import React, {useState} from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);


  function handleSubmit () {
    
  }

  function popupOpen() {
    setOpenPopup(true)
  }
  function handleCardClick (card) {
    setSelectedCard(card)
  }
  function popupClose () {
    setOpenPopup(false)
    setSelectedCard(false)
  }

  return (
    <div className='app'>
      <Header />
      <Cards 
        isOpen={popupOpen}
        isClose={popupClose}
        selectedCard={selectedCard}
      />
      <Footer />
    </div>
  )
}

export default App;
