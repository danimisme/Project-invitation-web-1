export default function GalleryPage() {
   return (
      <section id='gallery' className='gallery'>
         <div className='container'>
            <div className='row justify-content-center'>
               <div className='col-md-8 col-10 text-center'>
                  <span>Memori kisah kami</span>
                  <h2>Galeri Foto</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates totam quidem voluptatem quaerat sapiente?</p>
               </div>
            </div>
            <div className='row row-cols-md-4 row-cols-sm-3 row-cols-2 justify-content-center'>
               <div className='col mt-3'>
                  <img src='https://placehold.co/600x400/png' alt='lorem' className='img-fluid w-100x rounded' />
               </div>
               <div className='col mt-3'>
                  <img src='https://placehold.co/600x400/png' alt='lorem' className='img-fluid w-100 rounded' />
               </div>
               <div className='col mt-3'>
                  <img src='https://placehold.co/600x400/png' alt='lorem' className='img-fluid w-100 rounded' />
               </div>
               <div className='col mt-3'>
                  <img src='https://placehold.co/600x400/png' alt='lorem' className='img-fluid w-100 rounded' />
               </div>
               <div className='col mt-3'>
                  <img src='https://placehold.co/600x400/png' alt='lorem' className='img-fluid w-100 rounded' />
               </div>
            </div>
         </div>
      </section>
   );
}
