import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cartao from './components/Cartao';

function App() {
  return (
    <div className="App">
     <Header />
     <Cartao nome="Evellyn Furtado"
       prof = "Desenvolvedor Web"
       descr ="Sou apaixonada por tecnologia da informação. Meu sonho é estudar fora."
       foto = "https://placehold.co/150"
     />
     <Footer />
     
    </div>
  );
}

export default App;
