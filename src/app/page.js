import Image from 'next/image';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
   return (

   <div>
    
    <div className='flex justify-center'>
      <h1 className='text-2xl font-bold'>Hello! My Name is Hamza</h1>
   </div>
   
   <div className='flex space-x-2.5'>
      <Image
      src="/images/Bombardilo.jpeg"
      alt="suka blyat croco go boom boom"
      width={500}
      height={300}
      />

   <Image
      src="/images/Bombardilo.jpeg"
      alt="suka blyat croco go boom boom"
      width={500}
      height={300}
      />

   </div>

   <audio src="/audio/bombardiro-crocodilo_4kNJ6me.mp3" autoPlay />

   

   </div>
   );
}