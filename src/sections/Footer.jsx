const Footer = () => {
  return (
    <footer className="bg-gray-100 px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <img src="/assets/loomlogo.png" alt="logo" className="w-40" />
          <p className="text-gray-600 text-sm mt-4 text-center md:text-left">
            We are dedicated to AI technology. Our team of experienced developers 
            tirelessly work to create innovative solutions that can transform the 
            way your business operates. Best Solution is LoomAI.
          </p>
        </div>

        {/* About & Resources */}
        <div className="flex flex-wrap gap-12 md:gap-16">
          {/* About */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold text-gray-800">About LoomAI</h5>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Our Partners</a></li>
              <li><a href="#" className="hover:text-blue-500">How We Work</a></li>
              <li><a href="#" className="hover:text-blue-500">Areas We Serve</a></li>
              <li><a href="#" className="hover:text-blue-500">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold text-gray-800">Resources</h5>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
              <li><a href="#" className="hover:text-blue-500">Ebooks</a></li>
              <li><a href="#" className="hover:text-blue-500">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-500">App Builders</a></li>
              <li><a href="#" className="hover:text-blue-500">DevOps</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold text-gray-800">Contact Us</h5>
          <div className="mt-2 space-y-3 text-gray-600">
            <div className="flex items-center gap-3">
              <img src="/assets/phoneicon.svg" alt="phone" className="w-5" />
              <p>07032191259</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/assets/faxicon.svg" alt="fax" className="w-5" />
              <p>09016006037</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/assets/letter-icon.svg" alt="email" className="w-5" />
              <p>mpamugow@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/assets/location-icon.svg" alt="location" className="w-5" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
