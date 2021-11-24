import React, {useState} from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import axios from 'axios';
import Card from './Components/Card/Card';
import Popup from './Components/Popup/Popup';
function App() {

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);


  function handleSubmit (e) {
    e.preventDefault();
    setLoading(true);
    if(query.length < 1) {
      toast.error('Введите ключевое слово')
    } else {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(res => {
          if(res.data.items.length > 0) {
            setCards(res.data.items)
            setLoading(false)
          }  
        })
        .catch(err => {
          setLoading(true)
          toast.error(`${err.message}`)
        })
    }

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

  const handleCard = () => {
    console.log(cards)
    const item = cards.map((item, i) => {
        let thumbnail = '';
        if(item.volumeInfo.imageLinks.thumbnail) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail
        }
        return (
          <Card 
            item={item}
            isOpen={popupOpen}
            isClose={popupClose}  
            thumbnail={thumbnail} 
            title={item.volumeInfo.title}
            categories={item.volumeInfo.categories}
            authors={item.volumeInfo.authors}
            description={item.volumeInfo.description}
            
        />
        )
    })
    if(loading) {
      return (
        <div className='preloader'>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
      ) 
    } else {
      return (
        <>
          <h2 className='cards__counter'>Found: {item.length}</h2>
          <div className='cards__list'>
            {item}
          </div>
        </>
      )
    }
  }
  return (
    <div className='app'>
      <Header 
        handleSubmit={handleSubmit}
        query={query}
        setQuery={setQuery}
      />
     
      <Cards 
        isOpen={popupOpen}
        isClose={popupClose}
        selectedCard={selectedCard}
        handleCard={handleCard}
      />
      <ToastContainer />
      <Footer />
      
    </div>
  )
}

export default App;
