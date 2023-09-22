import './App.css';
import "./App.css"
import Home from './componentes/Home'
import Header from './componentes/Header';
import CardPokemon from './componentes/CardPokemon';
import PageNoutFound from "./componentes/PageNoutFound"
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {AppProvider} from './context/ContextApp';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <AppProvider>
        <main>
          <Header />
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cardPokemon/*' element={<CardPokemon/>}/>
          <Route path='*' element={<PageNoutFound/>}></Route>
          </Routes>
       
        </main>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
