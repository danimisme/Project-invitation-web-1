import CountDown from '../../components/molekuls/CountDown';
import { Link } from 'react-router-dom';

export default function Hero() {
   const newDate = new Date('June 1, 2024').getTime();
   const rootElement = document.querySelector(':root');
   // const navigate = useNavigate();

   function disableScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      window.onscroll = function () {
         window.scrollTo(scrollLeft, scrollTop);
      };

      rootElement.style.scrollBehavior = 'auto';
   }

   function enableScroll() {
      window.onscroll = function () {
         rootElement.style.scrollBehavior = 'smooth';
         autoPlay();
      };
   }

   function autoPlay() {
      const song = document.querySelector('#song');
      console.log(song);
      song.play();
   }

   disableScroll();

   return (
      <section id='#hero' className='hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white'>
         <main>
            <h4>Kepada Bapak/Ibu/Saudara/i,</h4>
            <h1>Dani & Halimah</h1>
            <p>Akan melangsungkan resepsi pernikahan dalam:</p>
            <CountDown newDate={newDate} />
            <Link to='#home' className='btn btn-lg mt-4' onClick={enableScroll}>
               Lihat undangan
            </Link>
         </main>
      </section>
   );
}
