import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h4: {
      fontSize: '1.5rem !important', 
      '@media (min-width:600px)': {
        fontSize: '1rem !important', 
      },
      '@media (min-width:960px)': {
        fontSize: '1.5rem !important',
      },
      '@media (min-width:1280px)': {
        fontSize: '2rem !important', 
      },
    },
    body1: {
      fontSize: '1rem !important',
      '@media (min-width:600px)': {
        fontSize: '0.85rem !important', 
      },
      '@media (min-width:960px)': {
        fontSize: '1rem !important', 
      },
      '@media (min-width:1280px)': {
        fontSize: '1.25rem !important', 
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
