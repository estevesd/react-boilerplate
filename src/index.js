// import React, { Fragment } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import Amplify from 'aws-amplify';

// import store from './store';
import App from './components/App';
import reset from './constants/css/reset';

const GlobalStyle = createGlobalStyle`${reset}`;

// ReactDOM.render(
//   <BrowserRouter>
//     <Fragment>
//       <Provider store={store}>
//         <App />
//       </Provider>
//       <GlobalStyle />
//     </Fragment>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// console.log(process.env);

Amplify.configure({
  Auth: {
    region: process.env.AWS_REGION,
    identityPoolId: process.env.AWS_IDENTITY_POOL_ID,
    identityPoolRegion: process.env.AWS_REGION,
    userPoolId: process.env.AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_APP_CLIENT_ID,
    oauth: {},
  },
});

// You can get the current config object, to get it import { Auth } from 'aws-amplify'
// const currentConfig = Auth.configure();
// console.log(currentConfig);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
