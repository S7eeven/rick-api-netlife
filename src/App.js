import './App.css';
import ConsumirAPI from './components/ConsumirAPI';
import titulo from './assets/img/Rick-And-Morty-Logo.png'
import rick from './assets/img/9910621b327d6f2e0e0f597238f94a1054f2e953r1-600-600v2_00.jpg'

function App() {
  return (
   <>
    <div className='imagen-cabecera'>
      <img className='imgHeader' alt='' />
    </div>
    <div className='rick-morty'>
      <div className=' flex-container titulo-serie'>
        <img  src={titulo} alt='' />
        <p>Rick y Morty es una comedia animada estadounidense de ciencia ficción para adultos creada por Justin Roiland y Dan Harmon para el bloque de programación nocturna Adult Swim de Cartoon Network.</p>
        <p>La serie sigue las desventuras del cínico científico loco Rick Sanchez y su nieto de buen corazón pero inquieto Morty Smith, que dividía su tiempo entre la vida doméstica y las aventuras interdimensionales.</p>
      </div>
      <div className='flex-container img-rick '>
        <img src={rick} alt=''  />
      </div>
    </div>
    
    <div className='container'>
      <ConsumirAPI />
    </div>
   
   </>
  );
}

export default App;
