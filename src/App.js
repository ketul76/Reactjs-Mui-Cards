import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './Cards';

function App() {
  const [cardData,setCardData] = useState([]);

  function CardsApi(){
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-12-17&sortBy=publishedAt&apiKey=462b7de763714bae9cb4b66bf4bcdf7f')
  .then(function (response) {
    console.log("THE CARDS DATA",response.data.articles);
    setCardData(response.data.articles);
  })
  .catch(function (error) {
    console.log(error);
  })
  }
  

  useEffect(() => {
    CardsApi();
  },[])

  return (
    <>
      <Cards  cardsData={cardData}/>
    </>
  );
}

export default App;
