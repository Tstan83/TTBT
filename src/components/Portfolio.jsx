
export default function Portfolio() {
  return (
    <section id="portfolio" className="text-gray-400 bg-black ">
      <div className="container px-5 py-12 mx-auto text-center lg:px-96">
        <div className="flex flex-col w-full mb-20">

          <h1 className="sm:text-4xl text-3xl mb-4 text-white">
            Tattoos
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed">
            TATTOO PICS HERE
          </p>
        </div>
       
        <div className="flex flex-wrap "> 

          <img src="/assets/images/tat1.jpg"
            
         />
         <img src="/assets/images/tat2.jpg"
            
         />
         <img src="/assets/images/tat3.jpg"
            
         />
         <img src="/assets/images/tat4.jpg"
            
         />
         </div>
      </div>
    </section>
  );
}