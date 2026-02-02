import img from "../assets/news.webp"

const pp=[
    {
        image:img,
        title:"Jan 24 2026 by manoj khatri",
        type:"How to chose smartwatch",
        discription:"Make sure the watch works with your phone (Android or iPhone). Choose Battery life at least 2–3 days.",
    },
    {
        image:img,
        title:"Jan 24 2026 by manoj khatri",
        type:"How to chose smartwatch",
        discription:"Make sure the watch works with your phone (Android or iPhone). Choose Battery life at least 2–3 days.",
    },
    {
        image:img,
        title:"Jan 24 2026 by manoj khatri",
        type:"How to chose smartwatch",
        discription:"Make sure the watch works with your phone (Android or iPhone). Choose Battery life at least 2–3 days.",
    },
]

const News = () => {
  return (
    <div>
        <div className=" flex flex-col justify-center py-10 items-center">
        <h1 className="font-bold text-3xl">Recent News </h1>
        <p className="text-gray-400">Explore Our Blogs</p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8  ">
        {pp.map((n)=>(
            
            <div className="">
                <div  className="overflow-hidden rounded-2xl">
                <img src={n.image} alt={n.image} className="  hover:scale-105 duration-500   rounded-3xl"/>
                </div>
                <p className="text-gray-400">{n.title}</p>
                <h1 className="font-bold">{n.type}</h1>
                <p className="text-gray-500">{n.discription}</p>
                
            </div>
        ))}
      </div>
    </div>
  )
}

export default News
