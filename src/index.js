import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { Provider } from './components/context';
import Field from './containers';
import { darkTheme } from './themes/darkTheme';
import { ThemeProvider } from 'styled-components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Field 
                height = "100vh"
                width = "100vw"
                minWidth = "1000px"
                minHeight = "750px"
                gap = "20px"
                wrap = "wrap"
                background = {darkTheme.colors.bg}
          />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


