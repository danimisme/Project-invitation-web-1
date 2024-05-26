import CountDown from '../../components/molekuls/CountDown';

export default function Hero() {
   const newDate = new Date('june 1, 2024').getTime();
   return (
      <section id='#hero' className='hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white'>
         <main>
            <h4>Kepada Bapak/Ibu/Saudara/i,</h4>
            <h1>Dani & Halimah</h1>
            <p>Akan melangsungkan resepsi pernikahan dalam:</p>
            <CountDown newDate={newDate} />
            <a href='#undangan' className='btn btn-lg mt-4'>
               Lihat undangan
            </a>
         </main>
      </section>
   );
}
