import watch from "../assets/watch.webp";

const set=[
    {
        title:"30% OFF",
        type:"Fine Smile",
        discription:"23 Jan To 5 Feb",
         image: watch,
         title2:"Air Solo Bass",
        type2:"Winter Sale",
        discription2:"Circuit boards, soldering, using a multimeter or oscilloscope.",
    },
   
    
]

const Again = () => {
  return (
    <div >
      {set.map((t)=>(
        <div className="grid grid-cols-1 sm:grid-cols-3 relative w-full h-[90vh] sm:h-[50vh]
            border-2 border-gray-200 shadow-xl
            rounded-3xl overflow-hidden
            bg-blue-300 px-10 py-10
             items-center text-white ">
        <div>
            <p className="text-sm">{t.title}</p>
            <h1 className="text-6xl sm:text-7xl font-bold">{t.type}</h1>
            <p className="text-sm">{t.discription}</p>
        </div>
       
          <div className="w-70">
            <img
              src={t.image}
              alt={t.image}/>
         
          </div>
          
          <div>
           <p className=" text-xl sm:text-2xl font-bold py-3"> {t.title2}</p>
            <h1 className="text-4xl sm:text-6xl font-semibold py-0 sm:py-3">{t.type2}</h1>
            <p className="py-2 text-sm">{t.discription2}</p>
             <button className="text-red-400 font-semibold bg-white cursor-pointer hover:scale-105 duration-200 py-2 px-8 rounded-full relative z-10">
              Shop Now
            </button>
          </div>

          
        </div>
        
      ))

      }
    </div>
  )
}

export default Again
