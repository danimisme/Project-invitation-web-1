import { useEffect, useState } from 'react';

export default function CountDown({ newDate }) {
   const [hari, setHari] = useState(0);
   const [jam, setJam] = useState(0);
   const [menit, setMenit] = useState(0);
   const [detik, setDetik] = useState(0);

   useEffect(() => {
      const timerId = setInterval(() => {
         const now = new Date().getTime();
         const distance = (newDate - now) / 1000;
         if (distance > 0) {
            setJam(Math.floor((distance / 60 / 60) % 24));
            setHari(Math.floor(distance / 60 / 60 / 24));
            setMenit(Math.floor((distance / 60) % 60));
            setDetik(Math.floor(distance % 60));
         } else {
            clearInterval(timerId);
         }
      }, 1000);
      return () => clearInterval(timerId);
   }, [newDate]);

   return (
      <div className='countdown'>
         <div className='time'>
            <p>{hari}</p>
            <p>Hari</p>
         </div>
         <div className='time'>
            <p>{jam}</p>
            <p>Jam</p>
         </div>
         <div className='time'>
            <p>{menit}</p>
            <p>Menit</p>
         </div>
         <div className='time'>
            <p>{detik}</p>
            <p>Detik</p>
         </div>
      </div>
   );
}
