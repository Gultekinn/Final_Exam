
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { MainContext } from './Context/Context';
import { ROUTES } from './router/router';

function App() {
  const [wishlistItem, setWishlistItem] = useState([])
  const datas = {
    wishlistItem,
    setWishlistItem
  }
  const router = createBrowserRouter(ROUTES)
  return (
    <div className="App">
      <MainContext.Provider value={datas}>
        <RouterProvider router={router} />
      </MainContext.Provider>

    </div>
  );
}

export default App;
