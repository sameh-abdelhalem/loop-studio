import logoImage from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className="bg-black">
      {/* Main Container */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* Footer Flex Container */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* Menu and Logo Container */}
          <div className="flex-col items center space-y-8 md:items-start md:space-y-4">
            {/* logo */}
            <div className="h-8">
              <img src={logoImage} alt="" className="w-44 md:ml-3" />
            </div>
            {/* Menu Container */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* item 1 */}
              <div className="h-10 group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* item 2 */}
              <div className="h-10 group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* item 3 */}
              <div className="h-10 group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* item 4 */}
              <div className="h-10 group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* item 5 */}
              <div className="h-10 group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>
          {/* Social and Copy Container */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* icons Container */}
            <div className="mx-auto md:mx-0 flex items-center justify-center space-x-4 md:justify-end">
              {/* Icon 1 */}
              <div className="h-8 group">
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
              </div>
              {/* Icon 2 */}
              <div className="h-8 group">
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
              </div>
              {/* Icon 3 */}
              <div className="h-8 group">
                <a href="#">
                  <img src={pinterest} alt="" />
                </a>
              </div>
              {/* Icon 4 */}
              <div className="h-8 group">
                <a href="#">
                  <img src={instagram} alt="" />
                </a>
              </div>
            </div>
            {/* copy */}
            <div className="font-bold">
              &copy; 2022 Loobstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
