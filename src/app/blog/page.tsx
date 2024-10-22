
import React from 'react';
import Image from 'next/image'
import Me from "../components/asgnmt1.jpg"

const Blog = () => {
  return (
    <div className="  bg-rose-300 pr-96 container mx-auto p-4">
      <h1 className="text-left text-amber-500 text-4xl font-serif ">Blog</h1>
      <p  className='text-left text-2xl font-serif'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore accusamus dignissimos sit aspernatur alias. Necessitatibus possimus reiciendis veritatis, natus et quo quod atque temporibus praesentium at quis officiis aliquid repellendus!
    </p>
    <p  className='text-left text-2xl font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa adipisci, temporibus tempora ipsam, vero repellat illo ex incidunt numquam aliquam maxime repudiandae aperiam! Blanditiis, at! Sequi commodi ratione explicabo.</p>
    <Image
     
     alt="01"
     src={Me}
     width={200}
     />
    </div>
  );
};

export default Blog;
