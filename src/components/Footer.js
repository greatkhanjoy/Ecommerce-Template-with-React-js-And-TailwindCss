import logo from '../images/logo.png'
import mail from '../images/mail.svg'
import mapPin from '../images/map-pin.svg'
import phone from '../images/phone.svg'
import printer from '../images/printer.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap space-y-8 justify-between items-center py-16">
          <div className="left-sectin space-y-1">
            <h3 className="text-xl tracking-wide">KNOW IT ALL FIRST!</h3>
            <p className="tracking-wide">
              Never Miss Anything From Multikart By Signing Up To Our
              Newsletter.{' '}
            </p>
          </div>
          <div className="right-sectin flex space-x-4 m-auto">
            <input
              className="px-3 py-3 placeholder-gray-500 outline-none focus:shadow-outline w-62 md:w-80 "
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-[#FF4B3E] text-white px-10 py-2 ">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <hr />
        <div className="space-y-5 md:grid md:grid-cols-5 py-16 tracking-wide">
          <div className="col-span-2">
            <img src={logo} alt="" className="mb-5" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,{' '}
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-5">CATEGORIES</h3>
            <div className="flex flex-col">
              <a href="/">Womens Fashion</a>
              <a href="/">Mens Fashion</a>
              <a href="/">Kids Fashion</a>
              <a href="/">Featured</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-5">WHY CHOOSE US</h3>
            <div className="flex flex-col">
              <a href="/">Womens Fashion</a>
              <a href="/">Mens Fashion</a>
              <a href="/">Kids Fashion</a>
              <a href="/">Featured</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-5">STORE INFORMATION</h3>
            <div className="flex space-x-3">
              <img src={mapPin} className="w-4" alt="" />
              <p>Ecommerce Demo Store, Demo store, Bangladesh </p>
            </div>
            <div className="flex space-x-3">
              <img src={phone} className="w-4" alt="" />
              <p>Call Us: 123-456-7898</p>
            </div>
            <div className="flex space-x-3">
              <img src={mail} className="w-4" alt="" />
              <p>Email Us: Greatkhanjoy@ Gmail.com</p>
            </div>
            <div className="flex space-x-3">
              <img src={printer} className="w-4" alt="" />
              <p>Fax: 123456</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto py-6 px-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center space-y-4">
            <p className="tracking-wide">
              &copy; 2022 theme forest powered by Greatkhanjoy
            </p>
            <div className="flex items-center space-x-2">
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/icon/visa.png"
                alt=""
              />
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/icon/mastercard.png"
                alt=""
              />
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/icon/paypal.png"
                alt=""
              />
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/icon/american-express.png"
                alt=""
              />
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/icon/discover.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
