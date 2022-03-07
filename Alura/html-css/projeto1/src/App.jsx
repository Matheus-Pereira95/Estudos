import React from "react";
import { BrowserRouter } from 'react-router-dom'
import Header from "./revisao-html-css/Header";
import Routes from "./Routes"

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App