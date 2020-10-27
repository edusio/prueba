import Menu from './components/menu.jsx';
import Footer from './components/footer';
var productos = [
  {
    id: 1,
    valor: "prueba"
  },
  {
    id: 2,
    valor: "prueba2"
  }
]
function App() {
  return (
    <div className="App">
      <div className="menu-superior">
        <Menu />
      </div>
      <div className="body-app">
        soy el body
      </div>
      <div className="footer">
        <Footer texto="hola vengo desde una propiedad" valor="1" productos={productos}/>
      </div>
    </div>
  );
}

export default App;
