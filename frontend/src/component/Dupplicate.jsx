import picture from "../assets/picture.png";

const set=[
    {
        title:"30% OFF",
        type:"Fine Smile",
        discription:"23 Jan To 5 Feb",
         image: picture,
         title2:"Air Solo Bass",
        type2:"Winter Sale",
        discription2:"Circuit boards, soldering, using a multimeter or oscilloscope.",
    },
   
    
]

const Dupplicate = () => {
  return (
    <div >
      {set.map((p)=>(
        <div className="grid grid-cols-1 sm:grid-cols-3 relative w-full h-[70h] sm:h-[50vh]
            border-2 border-gray-200 shadow-xl
            rounded-3xl overflow-hidden
            bg-red-500 px-10 py-10
             items-center text-white ">
        <div>
            <p className="text-sm">{p.title }</p>
            <h1 className=" text-3xl sm:text-7xl font-bold">{p.type}</h1>
            <p className="text-sm">{p.discription}</p>
        </div>
       
          <div className=" pt-10 sm:pt-0  w-55  sm:w-70 ">
            <img
              src={p.image}
              alt={p.image}/>
         
          </div>
          
          <div>
           <p className=" text-xl sm:text-2xl font-bold pt-8 sm:py-3"> {p.title2}</p>
            <h1 className="text-3xl sm:text-6xl font-semibold py-3">{p.type2}</h1>
            <p className="py-2">{p.discription2}</p>
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

export default Dupplicate
