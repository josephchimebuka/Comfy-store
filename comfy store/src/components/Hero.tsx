import image1 from '../assets/hero1.webp'
import image2 from '../assets/hero2.webp'
import image3 from '../assets/hero3.webp'
import image4 from '../assets/hero4.webp'
import { Link } from 'react-router-dom'

const cauroselImage =[ image1, image2, image3, image4]

const Hero = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
    <div>
      <h1 className='max-w-2xl text-2xl font-bold tracking-tight  sm:text-6xl mt-24'>
      Premier Accommodations and Seamless Comfort     </h1>

      <p className='mt-8 max-w-xl text-lg leading-8'>
      Welcome to a world of unparalleled comfort and hospitality! 
      At DER, we redefine the art of accommodations 
      to create an experience that transcends the ordinary. Immerse 
      yourself in a curated selection of thoughtfully designed spaces, 
      each crafted to cater to your unique preferences. 
      </p>
      <div className='mt-10 '>
        <Link to='products' className='btn btn-primary uppercase'>
          Our Products
        </Link>
      </div>
    </div>
    <div className='hidden  h-[30rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box'>
      { cauroselImage.map((image, index) => {
        return (
          <div key={index} className='carousel-item'>
            <img
              src={image}
              className='rounded-box h-full w-80  object-cover'
            />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Hero