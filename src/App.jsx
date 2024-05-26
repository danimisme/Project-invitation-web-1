import { Fragment } from 'react';
import Hero from './pages/hero';
import Navbar from './components/molekuls/Navbar';
import HomePage from './pages/home';
import InfoPage from './pages/info/index';

function App() {
   return (
      <Fragment>
         <Hero />
         <Navbar />
         <HomePage />
         <InfoPage />
      </Fragment>
   );
}

export default App;
