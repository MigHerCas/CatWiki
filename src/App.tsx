import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes/routes';

function App(): JSX.Element {
  return (
    <div className="App grid">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
