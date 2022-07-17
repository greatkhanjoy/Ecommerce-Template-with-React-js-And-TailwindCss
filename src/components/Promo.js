const Promo = () => {
  return (
    <div className="promo-section grid md:grid-cols-2 grid-cols-1 gap-6 pt-20 pb-10">
      <div className="relative overflow-hidden">
        <div className="absolute top-[35%] right-[10%] text-center z-20 promo-text">
          <h4 className="text-[#ff4c3b] text-xl font-semibold tracking-wider">
            SAVE 50%
          </h4>
          <h2 className="tracking-wider text-6xl font-bold">MEN</h2>
        </div>
        <img
          src="http://localhost:3000/images/promo1.jpg"
          className="zoom z-10"
          alt=""
        />
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute top-[35%] right-[5%] text-center z-20 promo-text">
          <h4 className="text-[#ff4c3b] text-xl font-semibold tracking-wider">
            SAVE 50%
          </h4>
          <h2 className="tracking-wider text-6xl font-bold">WOMEN</h2>
        </div>
        <img
          src="http://localhost:3000/images/promo2.jpg"
          className="zoom z-10"
          alt=""
        />
      </div>
    </div>
  )
}
export default Promo
