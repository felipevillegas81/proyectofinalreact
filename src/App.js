import './App.css'; 
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartList from './components/CartList/CartList';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider} from './context/Notification/Notification'
import Checkout from './components/Checkout/Checkout';

function App() {

  return(
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={''} />}/>
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<CartList />}/>
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='*' element={<h1 style={{background: 'white', textAlign: 'center'}}>La Pagina que estas buscando no existe</h1>} />
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  )
  
}
export default App
