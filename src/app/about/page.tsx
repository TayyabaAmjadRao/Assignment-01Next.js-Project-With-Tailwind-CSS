
import Image from 'next/image';
import React from 'react';
import Me from "../components/aboutme.jpg"
const About = () => {
  return (
    <div className="  bg-rose-200 pl-96 container mx-auto p-4">
      <h1 className="text-left text-amber-500 text-4xl font-serif ">About Me</h1>
      <p  className='text-left text-2xl font-serif'>
        I am a student in Cloude Applied Generative AI Engineering.I was a Senior Student of Quarater 01, and Now I am Student Learder in Qurater 02. I have experties in HTML, CSS , Tailwind CSS, JavaScript, Typescript and currently learning Next.js
      </p>
      
      <Image src={Me} 
      alt="aboutme"
      width={200} />
    </div>
  );
};

export default About;
