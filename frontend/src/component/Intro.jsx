import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const po = [
  {
    tittle: "ESHOP",
    type: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi  magni culpa minima laudantium, accusantium aut nesciunt perferendis sit",
    discription: "Made By Manoj khatri",
  },
];

const tap = [
  {
    id: 1,
    lavel: "Home",
    link: "/",
  },
  {
    id: 2,
    lavel: "About",
    link: "/About",
  },
  {
    id: 3,
    lavel: "Contact",
    link: "contact",
  },
  {
    id: 4,
    lavel: "Blogs",
    link: "blogs",
  },
];

const nap = [
  {
    id: 1,
    lavel: "Home",
    link: "/",
  },
  {
    id: 2,
    lavel: "About",
    link: "/About",
  },
  {
    id: 3,
    lavel: "Contact",
    link: "contact",
  },
  {
    id: 4,
    lavel: "Blogs",
    link: "blogs",
  },
];
const hh = [
  {
    title: "kohalpur-9,banke",
    type: "9874562130",
  },
];

const Intro = () => {
  const openYouTube = () => {
    window.open("https://www.youtube.com", "_blank");
  };
  return (
    <div className="p-6 px-6 sm:px-16">
      {/* Grid Container: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: ESHOP */}
        <div>
          {po.map((j, index) => (
            <div key={index}>
              <h1 className="text-3xl text-red-500 font-semibold py-3">
                {j.tittle}
              </h1>
              <p className="text-gray-700">{j.type}</p>
              <p className="text-gray-500 mt-2">{j.discription}</p>
              <button
                onClick={openYouTube}
                className="bg-red-500 text-white transition cursor-pointer hover:scale-105 duration-200 py-3 mt-3 px-7 rounded-full"
              >
                Visit our YouTube channel
              </button>
            </div>
          ))}
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="font-bold text-xl mb-2">Quick Links</h2>
          <ul className="space-y-2">
            {tap.map((u) => (
              <li key={u.id}>
                <a href={u.link} className="text-gray-700 hover:text-gray-400">
                  {u.lavel}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Important Links */}
        <div>
          <h2 className="font-bold text-xl mb-2">Important Links</h2>
          <ul className="space-y-2">
            {nap.map((p) => (
              <li key={p.id}>
                <a href={p.link} className="text-gray-700 hover:text-gray-400">
                  {p.lavel}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-bold">Address</h1>
          {hh.map((t) => (
            <div>
              <div className="flex gap-2">
                <FaLocationArrow className="mt-1 " />
                <p>{t.title}</p>
              </div>
              <div className="flex  gap-2">
                <FaMobileAlt className="mt-1" />
                <p>{t.type}</p>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100058574471609"
                  target="_blank"
                  className="hover:text-blue-600 transition"
                >
                  <FaFacebook className="text-3xl" />
                </a>

                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram className="text-3xl" />
                </a>

                <a
                  href="https://wa.me/+9779763924394"
                  target="_blank"
                  className="hover:text-green-500 transition"
                >
                  <FaWhatsapp className="text-3xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
