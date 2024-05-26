export default function InfoPage() {
   return (
      <div id='info' className='info'>
         <div className='container'>
            <div className='row justify-content-center'>
               <div className='col-md-8 col-10 text-center'>
                  <h2 className='pb-3'>Infomasi Acara</h2>
                  <p className='alamat'>
                     Alamat: Gedung Gor Bekasi, <br /> Komplek BULOG 1, Jl. Yanatera Raya, RT.003/RW.001, Jatimelati, Pondok Melati, Bekasi, West Java
                     17415
                  </p>
                  <a href='https://maps.app.goo.gl/ij22Z4Ypoy2ZCs3Y8' target='_blank' className='btn btn-light btn-sm mt-2 mb-4 '>
                     Click untuk membuka Maps
                  </a>
                  <p className='description'>
                     Diharapkan untuk tidak salah alamat dan tanggal. Manakala tiba di tujuan namun tidak ada tanda-tanda sedang dilangsungkan
                     pernikahan, boleh jadi anda salah jadwal, atau salah tempat
                  </p>
               </div>
            </div>
            <div className='row justify-content-center mt-4'>
               <div className='col-md-5 col-10'>
                  <div className='card text-center text-bg-light mb-4'>
                     <div className='card-header'>Akad Nikah</div>
                     <div className='card-body'>
                        <div className='row justify-content-center'>
                           <div className='col-md-6'>
                              <i className='bi bi-clock d-block'></i>
                              <span>08.00 - 10.00</span>
                           </div>
                           <div className='col-md-6'>
                              <i className='bi bi-calendar3 d-block'></i>
                              <span>1 juni 2024</span>
                           </div>
                        </div>
                     </div>
                     <div className='card-footer'>
                        Saat acara akad diharapkan untuk kondusif untuk menjaga kekhidmatan dan kekhusyuan seluruh prosesi.
                     </div>
                  </div>
               </div>
               <div className='col-md-5 col-10'>
                  <div className='card text-center text-bg-light'>
                     <div className='card-header'>Resepsi</div>
                     <div className='card-body'>
                        <div className='row justify-content-center'>
                           <div className='col-md-6'>
                              <i className='bi bi-clock d-block'></i>
                              <span>11.00 - Selesai</span>
                           </div>
                           <div className='col-md-6'>
                              <i className='bi bi-calendar3 d-block'></i>
                              <span>1 juni 2024</span>
                           </div>
                        </div>
                     </div>
                     <div className='card-footer'>
                        Saat acara resepsi diharapkan untuk kondusif untuk menjaga kekhidmatan dan kekhusyuan seluruh prosesi.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
