import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import { stripePromise } from './utils/stripe.utils';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css';

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <Elements stripe={stripePromise}>
                <App />
              </Elements>
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
