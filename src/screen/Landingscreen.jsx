import React from 'react'

const Landingscreen = () => {
  return (
 <div>
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">E-Mobile</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">All Mobile Variety We Deal</h1>
          
          <p className="leading-relaxed mb-4"></p>
   
      
          <div className="flex mt-40">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Contact Us
</button>
            <button className="flex ml-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">View Product</button>
          
           
     
          </div>
        </div>
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/image/img1.jpg" />
      </div>
    </div>
  </section>
</div>

  )
}

export default Landingscreen
