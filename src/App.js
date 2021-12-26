import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import React, {useEffect, useState} from 'react';
import NewArticles from './components/NewArticles/NewArticles';

function App() {

  const alan_api_key = process.env.REACT_APP_ALAN_API_KEY;
  const [newArticles,setNewArticles] = useState([]); 


  useEffect(() => {
    alanBtn({
        key: alan_api_key,
        onCommand: (commandData) => {
          if (commandData.command === 'test') {
            // Call the client code that will react to the received command
            alert('hi')

          }else if(commandData.command === 'openFacebook'){
            window.location.href = 'https://www.facebook.com';

          }else if(commandData.command === 'newHeadlines'){
            
            setNewArticles(commandData.articles);
            
          }

        }
    });
  }, []);




  return (
    <>
    <h1 style={{textAlign: 'center'}}>Alan ai News App</h1>
    {
    <NewArticles articles={newArticles}></NewArticles>
    }
    </>
  );
}

export default App;
