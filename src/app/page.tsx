import React from 'react'
import Navbar from './components/Navbar'
import About from './about/page'
import Contact from './contact/page'
import Blog from './blog/page'

const Page = () => {
  return (
    <div>
      <Navbar/>

      <div className='bg-pink-300 pr-96'>

      <h1 className="text-center text-lime-600 text-4xl  font-serif ">Welcome In My First Assignment</h1>
      <br />
      <h2  className="text-left text-amber-500 text-4xl font-serif ">Building a Next.js Project with Tailwind CSS</h2>
       <br />
       <p className='text-left text-xl font-serif'>For my first assignment, I have been tasked by my instructor,  Sir Mubashir, to create a comprehensive web project using Next.js. This project will consist of five distinct pages, demonstrating my understanding of modern web development principles and the capabilities of Next.js.</p>
   <h2 className="text-left text-amber-500 text-4xl font-serif ">Key Features of the Project:</h2>
    <p> <mark> Pages:</mark> The project will include five different pages, each serving a unique purpose within the web application.
       <br />
      <mark> 404 Error Page:</mark> A custom 404 error page will be implemented to enhance user experience by providing helpful navigation options when a page is not found.
        <br />
      <mark>  Loading Page:</mark> A dedicated loading page will be created to indicate to users that content is being fetched, ensuring a smooth transition and improving overall user interaction.
         <br />
      <mark>Tailwind CSS Integration: </mark>The project will utilize Tailwind CSS for styling, allowing for a modern, responsive design that enhances the visual appeal of the website.

</p>
   
      </div>
      <About/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Page


