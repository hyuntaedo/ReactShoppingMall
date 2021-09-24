import './App.css';
import Header from './components/Header'
import Prototypes from './components/Protypes'
import Orders from './components/Orders'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header></Header>
    <div className="container">
      <Prototypes></Prototypes>
      <Orders></Orders>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App;
