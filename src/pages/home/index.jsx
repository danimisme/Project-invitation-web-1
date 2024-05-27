export default function HomePage() {
   return (
      <section id='home' className='home'>
         <div className='container'>
            <div className='row justify-content-center'>
               <div className='col-md-8 text-center'>
                  <h2>Acara Pernikahan</h2>
                  <h3>Diselenggarakan pada 20 november 2024 di Bekasi, Jawa Barat.</h3>
                  <p>
                     Oleh karena itu, dengan segala hormat, kmai bermaksud untuk mengundang Bapak/Ibu, Saudara/i, untuk hadir pada acara pernikahan
                     kami.
                  </p>
               </div>
            </div>
            <div className='row couple'>
               <div className='col-lg-6'>
                  <div className='row'>
                     <div className='col-8 text-end'>
                        <h3>Muhammad Subhan Ramdani</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus qui mollitia autem!</p>
                        <p>
                           Putra dari Bpk. Lorem <br /> dan <br /> Ibu Lorem
                        </p>
                     </div>
                     <div className='col-4'>
                        <img src='https://placehold.co/300' alt='' className='img-responsive rounded-circle' />
                     </div>
                  </div>
               </div>
               <span className='heart'>
                  <i className='bi bi-balloon-heart-fill'></i>
               </span>
               <div className='col-lg-6'>
                  <div className='row'>
                     <div className='col-4'>
                        <img src='https://placehold.co/300' alt='' className='img-responsive rounded-circle' />
                     </div>
                     <div className='col-8'>
                        <h3>Nur Halimah</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus qui mollitia autem!</p>
                        <p>
                           Putra dari Bpk. Lorem <br /> dan <br /> Ibu Lorem
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
