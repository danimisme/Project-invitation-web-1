export default function Navbar() {
   return (
      <nav className='navbar navbar-expand-md bg-body-tertiary sticky-top mynavbar'>
         <div className='container'>
            <a className='navbar-brand' href='#'>
               Dameh
            </a>
            <button
               className='navbar-toggler border-0'
               type='button'
               data-bs-toggle='offcanvas'
               data-bs-target='#offcanvasNavbar'
               aria-controls='offcanvasNavbar'
               aria-label='Toggle navigation'
            >
               <span className='navbar-toggler-icon'></span>
            </button>
            <div className='offcanvas offcanvas-end' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
               <div className='offcanvas-header'>
                  <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                     Dameh
                  </h5>
                  <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
               </div>
               <div className='offcanvas-body'>
                  <div className='navbar-nav ms-auto'>
                     <a className='nav-link active' href='#home'>
                        Home
                     </a>
                     <a className='nav-link' href='#info'>
                        Info
                     </a>
                     <a className='nav-link' href='#story'>
                        Story
                     </a>
                     <a className='nav-link' href='#gallery'>
                        Gallery
                     </a>
                     <a className='nav-link' href='#rsvp'>
                        RSVP
                     </a>
                     <a className='nav-link' href='#gifts'>
                        Gifts
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
}
