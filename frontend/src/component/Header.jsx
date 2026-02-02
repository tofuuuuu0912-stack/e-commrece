import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const manulink = [
  {
    id: 1,
    lavel: "Home",
    link: "/",
  },
  {
    id: 2,
    lavel: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    lavel: "About",
    link: "about",
  },
  {
    id: 4,
    lavel: "Blogs",
    link: "blogs",
  },
  {
    id: 5,
    lavel: "Contact Us",
    link: "contact-us",
  },
  {
    id: 6,
    lavel: "Quicks Links",
  },
];

const quicklinks = [
  {
    id: 1,
    lavel: "Weekly trending",
    links: "/weekly-trending",
  },
  {
    id: 2,
    lavel: "Monthly trending",
    links: "/monthly-trending",
  },
  {
    id: 3,
    lavel: "Yearly trending",
    links: "/yearly-trending",
  },
];

const Header = () => {
  return (
    <div className="relative z-50 flex gap-8 px-3 sm:px-12 items-center justify-between bg-white">
      <div className="flex gap-10">
        <div className="text-3xl text-red-500 font-semibold py-3 cursor-pointer  ">
          <Link to="/">
            <h1> ESHOP</h1>
          </Link>
        </div>
        <div className="hidden sm:flex   gap-10 font-semibold py-5 opacity-65 ">
          {manulink.map((c) => (
            <div className="group relative ">
              <ul>
                <li>
                  <Link to={c.link}>{c.lavel}</Link>
                </li>
                {c.lavel === "Quicks Links" && (
                  <div className="absolute z-50 top-full over hidden group-hover:block  space-y-5 bg-white p-5 rounded-xl ">
                    {quicklinks.map((d) => (
                      <div>
                        <ul>
                          <li className="whitespace-nowrap hover:bg-red-500 px-3 py-2 rounded-xl  ">
                            <Link to={d.links}> {d.lavel}</Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-8  ">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search"
            className="w-0 group-hover:w-75 group-hover:border group-hover:border-gray-500 rounded-2xl transition-all duration-300 px-2 py-1  focus:outline-none outline-none "
          />
          <CiSearch
            size={18}
            className="   absolute top-4 -translate-y-1/2 right-4  group-hover:text-red-600"
          />
        </div>
        <TiShoppingCart size={25} className="mr-4 sm:mr-0" />
      </div>
    </div>
  );
};

export default Header;
