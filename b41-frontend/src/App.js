import React from 'react';
import Navigation from './components/Navigation';
import Prueba from './components/Prueba';
import AuthContextProvider from './contexts/AuthContext';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <AuthContextProvider>
        <Navigation />
        <h1>Hola Mundo!</h1>
        <Prueba />
      </AuthContextProvider>
    </React.Fragment>

  );
}

export default App;
