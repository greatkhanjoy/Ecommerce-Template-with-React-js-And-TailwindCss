import heart from '../images/heart.svg'
import logo from '../images/logo.png'
import search from '../images/search.svg'
import shoppingbag from '../images/shopping-bag.svg'

const Header = () => {
  const openMenu = () => {
    const menu = document.querySelector('.mobile-menu')
    menu.classList.toggle('openMenu')
  }

  return (
    <header>
      <div className="hidden md:block topBar ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className=" flex justify-between items-center py-4 text-gray-400 text-sm">
            <div className="left flex space-x-3">
              <p>Welcome to Our store Ecommerce</p>
              <p>
                <i className="fa-solid fa-phone text-[#FF4C3B]"></i> Call us:
                123*456-7890
              </p>
            </div>
            <div className="right flex space-x-4">
              <button>
                <i className="fa-solid fa-greater-than-equal mr-1"></i> Compara
              </button>
              <button>
                <i className="fa-solid fa-heart mr-1"></i> Wishlist
              </button>
              <button>
                <i className="fa-solid fa-user mr-1"></i> My Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-30">
        <div className="mobile-menu w-full md:hidden flex flex-col items-center space-y-5 text-xl py-5 fixed min-h-full bg-gray-100 text-[#333] ">
          <a href="/" className="nav-link hover:text-[#FF4C3B]">
            HOME
          </a>
          <a href="/" className="nav-link hover:text-[#FF4C3B]">
            SHOP
          </a>
          <a href="/" className="nav-link hover:text-[#FF4C3B]">
            CART
          </a>
          <a href="/" className="nav-link hover:text-[#FF4C3B]">
            CONTACT
          </a>
          <button className="absolute right-5 -top-3" onClick={openMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div className="navBar bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center py-8">
            <div className="md:hidden text-xl">
              <i
                className="fa-solid fa-bars cursor-pointer menuOpen"
                onClick={openMenu}
              ></i>
            </div>
            <div className="logo w-28">
              <img src={logo} alt="Ecommerce" />
            </div>
            <div className="nav hidden md:flex items-center space-x-5 text-xl text-[#333]">
              <a href="/" className="nav-link hover:text-[#FF4C3B]">
                HOME
              </a>
              <a href="/" className="nav-link hover:text-[#FF4C3B]">
                SHOP
              </a>
              <a href="/" className="nav-link hover:text-[#FF4C3B]">
                CART
              </a>
              <a href="/" className="nav-link hover:text-[#FF4C3B]">
                CONTACT
              </a>
            </div>
            <div className="flex space-x-5 text-xl text-[#333]">
              <button className="relative">
                <img src={shoppingbag} alt="Cart" />
                <span className="absolute -top-5 -right-3 text-xs text-white bg-[#FF4C3C] rounded-full w-5 h-5 leading-5">
                  0
                </span>
              </button>
              <button className="relative">
                <img src={heart} alt="Wishlist" />
                <span className="absolute -top-5 -right-3 text-xs text-white bg-[#FF4C3C] rounded-full w-5 h-5 leading-5">
                  0
                </span>
              </button>
              <button>
                <img src={search} alt="Search" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="heroSection"></div>
    </header>
  )
}

export default Header
