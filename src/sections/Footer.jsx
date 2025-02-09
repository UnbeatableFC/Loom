const Footer = () => {
  return (
    <footer id="contactus" className="bg-white px-10 lg:px-48 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row gap-12">
        {/* Logo & Description */}
        <div className="flex flex-col h-full items-center md:items-start md:w-1/4 lg:w-1/3">
          <div className="w-35">
            <img
              src="/assets/loomlogo.png"
              alt="logo"
              className="object-fill"
            />
          </div>
          <p className="text-gray-600 text-sm -mt-5  text-center md:text-left">
            We are dedicated to AI technology. Our team of experienced
            developers tirelessly work to create innovative solutions
            that can transform the way your business operates. Best
            Solution is LoomAI.
          </p>
        </div>

        {/* About & Resources */}
        <div className="flex flex-wrap justify-between gap-2 md:gap-10 lg:gap-25">
          {/* About */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold text-gray-800">
              About LoomAI
            </h5>
            <ul className="mt-2 text-sm space-y-2 text-gray-500/80">
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Areas We Serve
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold text-gray-800">
              Resources
            </h5>
            <ul className="mt-2 text-sm space-y-2 text-gray-500/80">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Ebooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  App Builders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  DevOps
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold text-gray-800">
              Contact Us
            </h5>
            <div className="mt-2 text-sm space-y-3 text-gray-500/80">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/phoneicon.svg"
                  alt="phone"
                  className="w-5"
                />
                <p>07032191259</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/faxicon.svg"
                  alt="fax"
                  className="w-5"
                />
                <p>09016006037</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/letter-icon.svg"
                  alt="email"
                  className="w-5"
                />
                <p>mpamugow@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/location-icon.svg"
                  alt="location"
                  className="w-5"
                />
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500/80">©️ 2025 LoomAI. All Rights Reserved.</p>
        <div className="flex gap-2">
          <img width={30} height={30} src="/assets/fb.svg" alt="" className="text-blue-200" />
          <img width={30} height={30} src="/assets/twitter.svg" alt="" />
          <img width={30} height={30} src="/assets/insta.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
