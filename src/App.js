import React, {useState} from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import axios from 'axios';
import Card from './Components/Card/Card'
function App() {

  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [maxResult, setMaxResult] = useState(10);
  const [startIndex, setStartIndex] = useState(1)

  function handleSubmit (e) {
    e.preventDefault();
    setLoading(true);

    if(maxResult > 40 || maxResult < 1) {
      toast.error('Введите max result от 1 до 40')
    } else {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResult}&startIndex=${startIndex}`)
      .then(res => {
          if(startIndex >=res.data.totalItems || startIndex < 1) {
              toast.error(`Введите Start Index от 1 до ${res.data.totalItems}`)
          }
          else {
              if(res.data.items.length > 0) {
                      setCards(res.data.items)
                      setLoading(false)
                  }
              }
          })
        .catch(err => {
          setLoading(true)
          toast.error(`${err.response.data.error.message}`)
        })
    }
}

  const handleCard = () => {
    const item = cards.map((item, i) => {
        let thumbnail = '';
        if(item.volumeInfo.imageLinks.thumbnail) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }
        return (
          <Card key={item.id}
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
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        maxResult={maxResult}
        setMaxResult={setMaxResult}
      />
     
      <Cards 
        handleCard={handleCard}
      />
      <ToastContainer />
      <Footer />
      
    </div>
  )
}

export default App;
