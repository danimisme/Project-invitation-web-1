export default function LoveStory() {
   return (
      <section id='story' className='story'>
         <div className='container'>
            <div className='row justify-content-center'>
               <div className='col-md-8 col-10 text-center'>
                  <span>Bagaimana cinta kami bersemi</span>
                  <h2>Cerita kami</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates totam quidem voluptatem quaerat sapiente?</p>
               </div>
            </div>
            <div className='row'>
               <div className='col'>
                  <ul className='timeline'>
                     <li>
                        <div className='timeline-image' style={{ backgroundImage: 'url(https://placehold.co/600x400/png)' }}></div>
                        <div className='timeline-panel'>
                           <div className='timeline-heading'>
                              <h3>Lorem ipsum dolor sit amet.</h3>
                              <span>1 November 2022</span>
                           </div>
                           <div className='timeline-body'>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed debitis rerum nam dolor atque consectetur.</p>
                           </div>
                        </div>
                     </li>
                     <li className='timeline-inverted'>
                        <div className='timeline-image' style={{ backgroundImage: 'url(https://placehold.co/600x400/png)' }}></div>
                        <div className='timeline-panel'>
                           <div className='timeline-heading'>
                              <h3>Lorem ipsum dolor sit amet.</h3>
                              <span>19 November 2023</span>
                           </div>
                           <div className='timeline-body'>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed debitis rerum nam dolor atque consectetur.</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div className='timeline-image' style={{ backgroundImage: 'url(https://placehold.co/600x400/png)' }}></div>
                        <div className='timeline-panel'>
                           <div className='timeline-heading'>
                              <h3>Lorem ipsum dolor sit amet.</h3>
                              <span>5 juni 2024</span>
                           </div>
                           <div className='timeline-body'>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed debitis rerum nam dolor atque consectetur.</p>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}
