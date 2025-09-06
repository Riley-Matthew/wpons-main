import React from "react";
import Image from "next/image";
const Navbar = () => {
  const myContact = () => {
    window.location.href = "./contact";
  };
  const myBlog = () => {
    window.location.href = "./blog";
  };
    const myHome = () => {
    window.location.href = "./home";
  };
  const myAbout = () => {
    window.location.href = "./about";
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Image 
        src="/weh.gif" 
        alt="Logo" 
        width={200} 
        height={100} />
        
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
             <button 
            onClick={myHome} 
            className="mr-5 hover:text-gray-900">Bahay </button>
            <button 
            onClick={myBlog} 
            className="mr-5 hover:text-gray-900">Blug </button>
          <button 
            onClick={myAbout} 
            className="mr-5 hover:text-gray-900">About</button>
          <button 
            onClick={myContact} 
            className="mr-5 hover:text-gray-900">
            Kontact
          </button>
          <a className="mr-5 hover:text-gray-900">Presyo pre</a>
        </nav>

      </div>
    </header>
  );
};

export default Navbar

// inside of pages folder are reusable components, just ya know  
// grab the stuff like images, videos , svgs, yabadabadoooa