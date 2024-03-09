import { useState } from 'react';
import { data } from './data';
import './App.css';


function App() {

  const [gifts, setGifts] = useState(data); 
  const removeGift = (id) => {
    let newGifts = gifts.filter(gift => gift.id !== id);
    setGifts(newGifts)}
  
 
  return (
    <div>
      <div className='base'>
        <h1>Список {gifts.length} подарков</h1>
      </div>
      {gifts.map((elment => {
        const {id, gift, image} = elment;
        return(<div>
          <div className='base'>
            <h2>{id} - {gift}</h2>
          </div>
          <div className='base'>
            <img src={image} width={500} height={400}/>
          </div>
          <div className='base'>
            <button onClick={() => removeGift(id)}>Убрать</button>
          </div>
        </div>)
      }))}
      <div className='base'>
        <button onClick={() => setGifts([])}>Убрать все</button>
      </div>
    </div>
  );
}

export default App;
