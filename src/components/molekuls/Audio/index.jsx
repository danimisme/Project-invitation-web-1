export default function Audio() {
   return (
      <div className='audio-container'>
         <audio id='song' autoPlay loop>
            <source src='../../../assets/audio/audio1.mp3' type='audio/mp3' />
         </audio>

         <div className='audio-icon-wrapper' style={{ display: '' }}>
            <i className='bi bi-disc'></i>
         </div>
      </div>
   );
}
