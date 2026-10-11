import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ReviewsProvider } from './context/ReviewsContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <WishlistProvider>
          <CartProvider>
            <ReviewsProvider>
              <App />
            </ReviewsProvider>
          </CartProvider>
        </WishlistProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
