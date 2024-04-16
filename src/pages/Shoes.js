import React from 'react'
import { useGSAP } from "@gsap/react"
import product from '../db/data'
import ProductShoe from '../components/ProductShoe'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger); 

const Shoes = () => { 
    const filteredData = product
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
    return (
        <section className='py-16 bg-black' style={{backgroundColor:"#FFF7EE"}} >
        <div>
          <h1 id='heading' className=' w-full h-[75px] p-5 mt-7 mb-6 text-center text-3xl bg-white z-10 text-black opacity-0 font-semibold uppercase'>- Shoes -</h1>
        </div>
        
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[50px] mx-w-sm mx-auto md:mx-w-none md:mx-0' id='products'>
              
              {filteredData.map((product) => {
                return <ProductShoe product={product} key={product.id}/>
              })}
          </div>
        </div>
      </section>
    )
}

export default Shoes