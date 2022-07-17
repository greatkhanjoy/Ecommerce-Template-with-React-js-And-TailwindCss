import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'
import Promo from '../components/Promo'
import Slideshow from '../components/Slider'
const HomeScreen = () => {
  return (
    <>
      <Header />
      <Slideshow />
      <main>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <Promo />
            <ProductGrid />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HomeScreen
