import React from 'react'

 export const page7 = () => {
  return (
    <>
    <div className="p-4 md:p-4 bg-gray-100 text-left">
    <h1 className="text-xl md:text-6xl text-red-900  font-bold m- p-12 flex justify-center">Get In Touch</h1>
    <p className="text-sm md:text-2xl m-3 text-blue-400 text-center  ">Here you can let me know if you have any criticism, suggestion or problem, I'm waiting to hear your voice or see your message..</p>
</div>

   <div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
    <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Me</h1>
    <form class="space-y-4">
      
      <div>
        <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Your Name" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" 
          required
        />
      </div>


      <div>
        <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Your Email" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" 
          required
        />
      </div>

  
      <div>
        <label for="message" class="block text-sm font-medium text-gray-600">Message</label>
        <textarea 
          id="message" 
          rows="5" 
          placeholder="Your Message" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" 
          required
        ></textarea>
      </div>


      <div>
        <button 
          type="submit" 
          class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>


<div class="bg-white shadow-lg rounded-lg p-6 w-full sm:w-96">

<div class="flex items-center mb-4 ">
    <div class="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full">
      
      <img src="public/image8.png" alt="Hand Icon" class="w-6 h-6" />
    </div>
    <h2 class="text-lg font-semibold ml-4 bg-orange-300">
      What is your plan CALL ME?
    </h2>
  </div>

  <div class="text-red-700 font-medium text-sm mb-4">
   
  </div>
  
  <ul class="list-disc pl-6 text-gray-700 ">
    <li>You can get my contact information here and if you like, you can see the urls of my pages on social networks from the top of the page and find me there.</li>
    <li className='font-bold p-3'>Narhe,Pune Maharastra</li>
    <li className='font-bold p-3'>murli@312@gmail.com</li>
    <li className='font-bold p-3'> 965456484</li>
  </ul>
  <div className="text-gray-800 w-full font-sans">
  
   
 </div>
  </div>
  </>
  )
}


