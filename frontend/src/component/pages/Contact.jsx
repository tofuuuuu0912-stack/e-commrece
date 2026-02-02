const Contact = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row my-16 sm:my-24 px-4 sm:px-11 gap-12">
      
      {/* Contact Form */}
      <div className="w-full sm:w-2/3">
        <h1 className="font-semibold text-3xl mb-6">Leave Us a Message</h1>

        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          <div className="flex flex-col flex-1">
            <label className="font-bold mb-1">First Name</label>
            <input type="text" placeholder="First Name"  className="border-2 border-gray-400 p-3 rounded-lg focus:outline-none" />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-bold mb-1">Last Name</label>
            <input type="text" placeholder="Last Name"className="border-2 border-gray-400 p-3 rounded-lg focus:outline-none" />
          </div>
        </div>

        <div className="mb-6">
          <label className="font-bold mb-1 ">Email</label>
          <input type="email" placeholder="Email" className="border-2 border-gray-400 p-3 rounded-lg w-full focus:outline-none" />
        </div>

        <div className="mb-6">
          <label className="font-bold mb-1 ">Comment or Message</label>
          <textarea placeholder="Message" className="border-2 border-gray-400 p-3 rounded-lg w-full h-32 focus:outline-none" />
        </div>

        <button type="button"className="bg-gray-300 text-black px-7 py-3 rounded-xl hover:bg-gray-600 transition w-full sm:w-auto"  >
          Send Message
        </button>
      </div>

     
      <div className="w-full sm:w-1/3">
        <h1 className="text-3xl font-semibold mb-6">Our Store</h1>

        <p className="text-sm">Next-Infosya</p>
        <p className="text-sm mt-2">Kohalpur, Banke</p>

        <p className="text-sm font-semibold mt-8">Hours of Operation</p>
        <div className="flex justify-between text-sm text-gray-600 mt-4">
          <div className="space-y-1">
            <p>Monday:</p>
            <p>Tuesday:</p>
            <p>Wednesday:</p>
            <p>Thursday:</p>
            <p>Friday:</p>
            <p>Saturday:</p>
            <p>Sunday:</p>
          </div>
          <div className="space-y-1">
            <p>10–6 PM</p>
            <p>10–6 PM</p>
            <p>10–6 PM</p>
            <p>10–6 PM</p>
            <p>10–6 PM</p>
            <p>Closed</p>
            <p>Closed</p>
          </div>
        </div>

        <p className="text-sm font-semibold mt-8">Careers</p>
        <p className="text-sm mt-2">
          If you’re interested in employment <br /> opportunities at 
           NeoStore, please <br />
            email us csd@neoteric.com.np:
          
        
        </p>
      </div>
    </div>
  );
};

export default Contact;
