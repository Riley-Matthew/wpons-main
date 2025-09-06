import React from 'react';

const Home = () => {
    return(
       <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-red-900 lg:w-1/3 lg:mb-0 mb-font-bold 4">The Website Of Absolute Peakness</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Yes I am completely aware that this is going in our portfolio AND YES THERE IS MORE THAT I HAVE PREPARED, 
      AND YES IT'S IN THE GITHUB REPOSITORY IN THE PUBLIC FOLDER XD</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="xichun.gif"></img>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="distort.gif"></img>
        </div>
        <div class="md:p-2 p-1 w-full">
          <video width="320" height="240" controls alt="gallery" class="w-full h-full object-cover object-center block" src="iggymael.mp4"></video>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <video width="300" height="250" controls alt="gallery" class="w-full h-full object-cover object-center block" src="seasplit.mp4"></video>
        </div>
        <div class="md:p-1 p-1 w-1/2">
          <video width="300" height="250" controls alt="gallery" class="w-full h-full object-cover object-center block" src="gangnam.mp4"></video>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="driving.gif"></img>
        </div>
      </div>
    </div>
  </div>
</section>
    )

}

export default Home;