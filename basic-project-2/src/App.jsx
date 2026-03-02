import { useState } from 'react';
import './App.css';
import Card from './Card';

const App=()=>{
  const [number,setNumber]=useState(1);
  const [searchText, setSearchText]=useState('');
  const [myCard, setMyCard]=useState([]);

  // for the search text
  const inputHandler=(e)=>{
    setSearchText(e.target.value);
  }

  // for the button
  const clickHandler=()=>{
    const newCard={
      num: number,
      text: searchText
    }

    setMyCard([...myCard,newCard]);
    setSearchText('');
    setNumber(number+1);
  }

  // for deletion of card
  const deleteCard=(id)=>{
    setMyCard(prev=>prev.filter(card=>card.num!==id))
  }

  return(
    <div className='App'>
      <h1>Basic Crud Operation</h1>

      <div>
        <input type='text' placeholder='Enter your text' value={searchText} onChange={inputHandler}/>
        <button onClick={clickHandler}>Submit</button>
      </div>


      {myCard.map((card,index)=>{
        return <Card number={card.num} searchText={card.text} onDelete={()=>deleteCard(card.num)} />
      })}

    </div>
  )
}

export default App;