const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 text-gray-800 py-8 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-yellow-700">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {['Home', 'About Us', 'Cinnamon Catering', 'Terms & Conditions', 'Sitemap'].map((link, index) => (
                <li key={index} className="hover:text-yellow-700 cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <ul className="mt-10 space-y-2">
              {['Plan Your Event', 'Contact Us', 'Careers', 'Upcoming Hotels', 'Media & Awards'].map((link, index) => (
                <li key={index} className="hover:text-yellow-700 cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-yellow-700">Any Questions?</h2>
            <p className="mt-4 flex items-center"><span className="mr-2">📞</span>+91 2266 82 0707</p>
            <p className="mt-2 flex items-center"><span className="mr-2">📧</span>info@subahotels.com</p>
            <p className="mt-2 flex items-start"><span className="mr-2">📍</span>B2-1004, Marathon Nextgen Innova, Lower Parel, Mumbai-400 013, India.</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold text-yellow-700">Stay Connected</h2>
          <div className="flex justify-center space-x-4 mt-4">
            {['facebook', 'youtube', 'linkedin', 'x', 'instagram'].map((platform, index) => (
              <span key={index} className="text-2xl cursor-pointer hover:text-yellow-700">{platform[0].toUpperCase()}</span>
            ))}
          </div>
        </div>

      </footer>
      <div className=" bg-yellow-700 text-white text-center py-3">
        <p>Copyright © 2025, Suba Group of Hotels. All Rights Reserved. Powered By Internet Moguls</p>
      </div>
    </>
  );
};

export default Footer;
