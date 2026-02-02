import smt from"../assets/rolex.jpg"
import { FiWatch } from "react-icons/fi";
const cc =[
    {
        image:smt,
    },
    {
        image:smt,
    },
    {
        image:smt,
    },
    {
        image:smt,
    },
    {
        image:smt,
    },
]

const Logo = () => {
  return (
    <div className="grid grid-cols-5 w-full gap-8 px-10 mt-10  py-8  bg-gray-200 ">
        {cc.map((r)=>(
            <div>

                <img src={r.image} alt={r.image} className="w-25  "  />
                
            </div>
        ))}
    </div>
  )
}

export default Logo;
