import { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.sumarContador = this.sumarContador.bind(this);
        this.state = {
            contador : 0,
            productos : [],
            edad: 0
        };
    }
    
    componentDidMount() {
        fetch("https://api.openbrewerydb.org/breweries").then(res => res.json())
        .then(res => {
            this.setState({
                productos: res
            });
        });
    }

    sumarContador() {
        const {contador } = this.state;
        this.setState({
            contador: contador + 1,
        });
        
    }

    actualizarEdad(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.setState({
            edad: ev.target.value
        });
        debugger;
    } 

    render() {
        const {productos, contador, edad} = this.state;
        return (
            <div>
                <p>Tengo {edad} años</p>
                <button onClick={() => this.sumarContador()}>Sumar</button>
                <input type="number" onChange={(ev) => this.actualizarEdad(ev)} />
            </div>
        );
    }
};

export default Dashboard;