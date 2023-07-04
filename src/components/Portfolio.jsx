
export default function Portfolio() {
  return (
    <section id="portfolio" className="text-gray-400 bg-black section ">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Past Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            TATTOO PICS HERE
          </p>
        </div>
        <div className="flex flex-wrap -m-4">

          <img src="src/assets/images/tat1.jpg"
            
         />
         <img src="src/assets/images/tat2.jpg"
            
         />
         <img src="src/assets/images/tat3.jpg"
            
         />
         <img src="src/assets/images/tat4.jpg"
            
         />
         </div>
      </div>
    </section>
  );
}