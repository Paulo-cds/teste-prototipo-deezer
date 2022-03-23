import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux';
import Home from './Components/Home';
import Favorites from './Components/Favorites'

function App() {
  return (    
    <BrowserRouter>    
      <Provider store={store}>
        <Routes>          
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>                  
        </Routes>
      </Provider>    
    </BrowserRouter>
  );
}

export default App;
