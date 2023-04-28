import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const category = 'money';
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: { 'X-Api-Key': 'cw1sCZ0TspAVMmL1VYR95A==qPbxZI6CH7KNYcWy' },
          contentType: 'application/json'
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div>
      {quotes.map((quote, i) => (
        <div className='quote-container' key={i}>
          <p className='quote'><q>{quote.quote}</q></p>
          <p className='author'>{quote.author}</p>
        </div>
      ))}
    </div>
  )}

  export default Quotes