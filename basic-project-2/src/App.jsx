import './App.css';
import Card from './Card';

const App=()=>{
  return(
    <div className='App'>
      <h1>Basic Crud Operation</h1>

      <div>
        <input type='text' placeholder='Enter your text' />
        <button>Submit</button>
      </div>

      <Card />
    </div>
  )
}

export default App;