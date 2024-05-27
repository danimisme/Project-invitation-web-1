import { Fragment } from 'react';
import Hero from './pages/hero';
import Navbar from './components/molekuls/Navbar';
import HomePage from './pages/home';
import InfoPage from './pages/info/index';
import LoveStory from './pages/loveStory';
import GalleryPage from './pages/gallery';
import Rsvp from './pages/rsvp';
import Gifts from './pages/gifts';
import Footer from './components/molekuls/Footer';
import Audio from './components/molekuls/Audio';

function App() {
   return (
      <Fragment>
         <Hero />
         <Navbar />
         <HomePage />
         <InfoPage />
         <LoveStory />
         <GalleryPage />
         <Rsvp />
         <Gifts />
         <Footer />
         <Audio />
      </Fragment>
   );
}

export default App;
