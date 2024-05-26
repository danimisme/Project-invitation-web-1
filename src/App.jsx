import { Fragment } from 'react';
import Hero from './pages/hero';
import Navbar from './components/molekuls/Navbar';
import HomePage from './pages/home';

function App() {
   return (
      <Fragment>
         <Hero />
         <Navbar />
         <HomePage />
      </Fragment>
   );
}

export default App;
