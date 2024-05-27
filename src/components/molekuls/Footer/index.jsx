export default function Footer() {
   return (
      <footer>
         <div className='row'>
            <div className='col text-center'>
               <small className='block'>&copy; 2024. msrzl123. All Rights Reserved</small>
               <small className='block'>
                  Design by{' '}
                  <a href='https://instagram.com/msfrzl_' target='_blank'>
                     Muhammad Saifur Rizal
                  </a>
               </small>
               <ul className='mt-3'>
                  <li>
                     <a href='#'>
                        <i className='bi bi-instagram'></i>
                     </a>
                  </li>
                  <li>
                     <a href='#'>
                        <i className='bi bi-facebook'></i>
                     </a>
                  </li>
                  <li>
                     <a href='#'>
                        <i className='bi bi-twitter'></i>
                     </a>
                  </li>
                  <li>
                     <a href='#'>
                        <i className='bi bi-linkedin'></i>
                     </a>
                  </li>
                  <li>
                     <a href='#'>
                        <i className='bi bi-github'></i>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
}
