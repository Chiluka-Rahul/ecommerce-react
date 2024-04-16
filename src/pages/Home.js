import React,{useContext} from 'react'
import { useGSAP } from "@gsap/react"
import { ProductContext } from '../contexts/ProductContexts'
import Product from '../components/Product'
import Hero from '../components/Hero';
import gsap from 'gsap'

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger); 

const Home = () => {
  useGSAP(() => {
    gsap.to('#heading', {
      y:-15,
      opacity:1,
      delay:0.2,
      scrollTrigger: {
        trigger: '#heading',
        toggleActions: 'restart reverse restart reverse',
        start: 'top 85%',
      },
    
    })
  }, []);
  

  const {products} = useContext(ProductContext)
  // console.log(products)
  const filterProducts = products.filter((item) => {
    return(
      item.category === "men's clothing" || item.category ===  "women's clothing"
    )
  })
  return (
    <div>
      <Hero />
      <section className='py-16 bg-black' style={{backgroundColor:"#FFF7EE"}} >
        <div>
          <h1 id='heading' className=' w-full h-[75px] p-5 mb-6 text-center text-3xl bg-white z-10 text-black font-medium opacity-0'>Men's & Women's</h1>
        </div>
        
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[50px] mx-w-sm mx-auto md:mx-w-none md:mx-0' id='products'>
              
              {filterProducts.map((product) => {
                return <Product product={product} key={product.id}/>
              })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home