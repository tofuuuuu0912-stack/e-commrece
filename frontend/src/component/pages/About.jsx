

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">
          About Our Store
        </h1>

        <p className="text-gray-600 mb-4 text-center">
          Welcome to <span className="font-semibold">TechZone</span>, your
          one-stop destination for premium headphones and smart watches.
        </p>

        <div className="space-y-4 text-gray-700">
          <p>
            We specialize in high-quality audio gear and smart wearable
            technology designed to fit your lifestyle. From crystal-clear
            wireless headphones to feature-packed smart watches, we bring you
            the best of modern tech.
          </p>

          <p>
            Our mission is to deliver stylish, reliable, and affordable
            products with excellent customer support and fast delivery.
          </p>

          <p>
            ✔ Premium Quality Products <br />
            ✔ Secure Payments <br />
            ✔ Fast Shipping <br />
            ✔ 24/7 Customer Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
