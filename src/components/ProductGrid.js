import heart from '../images/heart-thin.svg'
import search from '../images/search-thin.svg'
import shoppingcart from '../images/shopping-cart.svg'
import Rating from './Rating'
const ProductGrid = ({ products }) => {
  return (
    <div className="product-block py-12">
      <div className="block-header text-center space-y-2">
        <h4 className="text-[#FF4C3B] text-lg">Special Offer</h4>
        <h2 className="text-4xl font-bold text-[#333] pb-2">
          TOP COLLECTION
          <hr className="w-20 m-auto bg-[#FF4E38] py-1 my-2" />
        </h2>

        <p className=" text-gray-500 w-3/5 m-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry, Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="products py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-6">
          <div className="product">
            <div className="product-image w-full min-w-full relative overflow-hidden">
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/product/fashion/39.jpg"
                alt=""
              />
              <span className="tracking-wide absolute top-2 left-2 bg-[#FF4C3B] rounded-full w-10 h-10 text-sm leading-10 text-center text-white font-medium">
                NEW
              </span>
              <div className="product-buttons absolute bottom-3 space-y-3">
                <img src={shoppingcart} className="w-5 cursor-pointer" alt="" />
                <img src={heart} className="w-5 cursor-pointer" alt="" />
                <img src={search} className="w-5 cursor-pointer" alt="" />
              </div>
            </div>
            <div className="product-info space-y-1 py-2">
              <Rating rating={5} numberOfReviews="5" />
              <h4 className="text-xl text-[#333]">Trim Dress</h4>
              <p className="text-gray-500"> $87.50</p>
            </div>
          </div>
          <div className="product">
            <div className="product-image w-full min-w-full relative overflow-hidden">
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/product/fashion/1.jpg"
                alt=""
              />
              <span className="tracking-wide absolute top-7 -right-4 -rotate-90">
                ON SALE
              </span>
              <span className="tracking-wide absolute top-2 left-2 bg-[#FF4C3B] rounded-full w-10 h-10 text-sm leading-10 text-center text-white font-medium">
                NEW
              </span>

              <div className="product-buttons absolute bottom-3 space-y-3">
                <img src={shoppingcart} className="w-5 cursor-pointer" alt="" />
                <img src={heart} className="w-5 cursor-pointer" alt="" />
                <img src={search} className="w-5 cursor-pointer" alt="" />
              </div>
            </div>
            <div className="product-info space-y-1 py-2">
              <Rating rating={2.5} numberOfReviews="8" />
              <h4 className="text-xl text-[#333]">Belted Dress</h4>
              <p className="text-gray-500"> $87.50</p>
            </div>
          </div>
          <div className="product">
            <div className="product-image w-full min-w-full relative overflow-hidden">
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/product/fashion/3.jpg"
                alt=""
              />
              <span className="tracking-wide absolute top-2 left-2 bg-[#FF4C3B] rounded-full w-10 h-10 text-sm leading-10 text-center text-white font-medium">
                NEW
              </span>
              <div className="product-buttons absolute bottom-3 space-y-3">
                <img src={shoppingcart} className="w-5 cursor-pointer" alt="" />
                <img src={heart} className="w-5 cursor-pointer" alt="" />
                <img src={search} className="w-5 cursor-pointer" alt="" />
              </div>
            </div>
            <div className="product-info space-y-1 py-2">
              <Rating rating={4.5} numberOfReviews="9" />
              <h4 className="text-xl text-[#333]">Fitted Dress</h4>
              <p className="text-gray-500"> $87.50</p>
            </div>
          </div>
          <div className="product">
            <div className="product-image w-full min-w-full relative overflow-hidden">
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/product/fashion/4.jpg"
                alt=""
              />
              <div className="product-buttons absolute bottom-3 space-y-3">
                <img src={shoppingcart} className="w-5 cursor-pointer" alt="" />
                <img src={heart} className="w-5 cursor-pointer" alt="" />
                <img src={search} className="w-5 cursor-pointer" alt="" />
              </div>
            </div>
            <div className="product-info space-y-1 py-2">
              <Rating rating={5} numberOfReviews="3" />
              <h4 className="text-xl text-[#333]">Trim Dress</h4>
              <p className="text-gray-500"> $87.50</p>
            </div>
          </div>
          <div className="product">
            <div className="product-image w-full min-w-full relative overflow-hidden">
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/product/fashion/7.jpg"
                alt=""
              />
              <div className="product-buttons absolute bottom-3 space-y-3">
                <img src={shoppingcart} className="w-5 cursor-pointer" alt="" />
                <img src={heart} className="w-5 cursor-pointer" alt="" />
                <img src={search} className="w-5 cursor-pointer" alt="" />
              </div>
            </div>
            <div className="product-info space-y-1 py-2">
              <Rating rating={3.5} numberOfReviews="6" />
              <h4 className="text-xl text-[#333]">Trim Dress</h4>
              <p className="text-gray-500"> $87.50</p>
            </div>
          </div>
          <div className="product">
            <div className="product-image w-full min-w-full  relative overflow-hidden">
              <img
                src="https://angular.pixelstrap.com/multikart/assets/images/product/fashion/6.jpg"
                alt=""
              />
              <div className="product-buttons absolute bottom-3 space-y-3">
                <img src={shoppingcart} className="w-5 cursor-pointer" alt="" />
                <img src={heart} className="w-5 cursor-pointer" alt="" />
                <img src={search} className="w-5 cursor-pointer" alt="" />
              </div>
            </div>
            <div className="product-info space-y-1 py-2">
              <Rating rating={4.5} numberOfReviews="5" />
              <h4 className="text-xl text-[#333]">Trim Dress</h4>
              <p className="text-gray-500"> $87.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGrid
