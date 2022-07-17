import Slider from 'react-slick'
import slideOne from '../images/slide1.jpg'
import slideTwo from '../images/slide2.jpg'

const Slideshow = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  }
  return (
    <Slider {...settings}>
      <div className="slide relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-20">
          <div className="items-center w-1/1 md:w-2/5 py-[20%] text-center space-y-4">
            <h4 className="text-xl md:text-2xl tracking-widest">
              Welcome To Fashion
            </h4>
            <h2 className="text-4xl md:text-6xl font-bold ">MEN FASHION</h2>
            <button className="bg-gradient-to-l from-[#e75b4e] to-[#f2493a] border border-[#e75b4e] px-7 py-3 text-white hover:from-[#ffffff] hover:to-[#ffffff] hover:text-[#333] transition duration-7000">
              SHOP NOW
            </button>
          </div>
        </div>
        <img
          src={slideOne}
          alt=""
          className="absolute top-0 left-0 z-10 h-[700px] object-cover"
        />
      </div>
      <div className="slide relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-20">
          <div className="items-center w-1/1 md:w-2/5 py-[20%] text-center space-y-4">
            <h4 className="text-xl md:text-2xl tracking-widest">
              Welcome To Fashion
            </h4>
            <h2 className="text-4xl md:text-6xl font-bold ">MEN FASHION</h2>
            <button className="bg-gradient-to-l from-[#e75b4e] to-[#f2493a] border border-[#e75b4e] px-7 py-3 text-white hover:from-[#ffffff] hover:to-[#ffffff] hover:text-[#333] transition duration-7000">
              SHOP NOW
            </button>
          </div>
        </div>
        <img
          src={slideTwo}
          alt=""
          className="absolute top-0 left-0 z-10 h-[700px] object-cover"
        />
      </div>
    </Slider>
  )
}

export default Slideshow
