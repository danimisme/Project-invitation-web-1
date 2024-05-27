import Saweria from '../../assets/download.png';

export default function Gifts() {
   return (
      <section id='gifts' className='gifts'>
         <div className='container'>
            <div className='row justify-content-center'>
               <div className='col-md-8 col-10 text-center'>
                  <span>ungkapan tanda kasih</span>
                  <h2>Kirim Hadiah</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates totam quidem voluptatem quaerat sapiente?</p>
               </div>
            </div>
            <div className='row justify-content-center text-center'>
               <div className='col-md-6'>
                  <ul className='list-group'>
                     <li className='list-group-item'>
                        <div className='fw-bold'>Mandiri</div> 1230011011998 - Muhammad Saifur Rizal
                     </li>
                     <li className='list-group-item'>
                        <div className='fw-bold'>Dana</div> 08XXXXXXXX - Muhammad Saifur Rizal
                     </li>
                     <li className='list-group-item'>
                        <div className='fw-bold'>Saweria</div>
                        <img src={Saweria} alt='saweria' className='img-thumbnail bg-black' width={150} />
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}
