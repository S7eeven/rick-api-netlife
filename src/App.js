import './App.css';
import ConsumirAPI from './components/ConsumirAPI';

function App() {
  return (
   <>
   
    <div className='imagen-cabecera'>
      <img className='imgHeader' alt='logo' />
    </div>
    
    <div className='container'>
      <ConsumirAPI />
    </div>
   
   </>
  );
}

export default App;
