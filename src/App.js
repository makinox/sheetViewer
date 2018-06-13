import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Registro from './components/registro/registro'

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <Navbar/>
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Sheet Viewer</h1>
      //   </header>
      //   <p className="App-intro">
      //     Tabla
      //   </p>
      // </div>
      <div>
        <header>
          <Navbar/>
        </header>
        <div>

          <div className="container">
            {/* <div className="row justify-content-center">
              <div className="col-md-4 mt-3">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Hola</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="card-text">test</h4>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row">
              <Registro/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
