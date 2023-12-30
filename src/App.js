import React from 'react';
import './App.css';
import { CTA, Navbar } from "./components/index";
import { Header, Service, Feature, Product, Testimonal, FAQ, Footer } from "./containers/index";

function App() {
  return (
    <div className="App">
      <div className="nav-header">
        <Navbar />
        <Header />
      </div>
      <Service />
      <Feature />
      <Product />
      <Testimonal />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
