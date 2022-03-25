import React from 'react';
import rootReducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import PokemonList from './components/PokemonList';
import './App.css';


const store = createStore(rootReducer, applyMiddleware(thunk))
function App() {
  return (
    <div className="App">
     Pokemon Characters
     <PokemonList/>
    </div>
  );
}

export default App;