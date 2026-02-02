import pupple from "../assets/pupple.jpg";

const btn = [
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$115",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$188",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$135",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$200",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$110",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$111",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$140",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$220",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$82",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$80",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$120",
  },
  {
    image: pupple,
    discription: "Boat HeadPhone",
    titlle: "$100",
  },
];

const Product = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center py-10 items-center">
        <h1 className="font-bold text-3xl"> Our Products </h1>
        <p className="text-gray-400">Explore Our Products</p>
      </div>

      <div className="py-0 sm:py-10  grid grid-cols-2  sm:grid-cols-4 gap-7 sm:gap-11 ">
        {btn.map((v) => (
          <div className="flex flex-col items-center ">
            <div className="group relative w-42 sm:w-80 ">
              {/* Product Image */}
              <img src={v.image} alt={v.discription} className="h-43 sm:h-60 w-80 " />

              {/* Hover Button */}
              <button className=" absolute bottom-7 left-1/2 -translate-x-1/2 bg-red-500 text-white  opacity-0 group-hover:opacity-100  transition   cursor-pointer hover:scale-105 duration-200 py-2 px-8 rounded-full  z-10 ">
                Add to Card
              </button>
            </div>

            <p className="font-semibold">{v.discription}</p>
            <p className="font-bold">{v.titlle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
