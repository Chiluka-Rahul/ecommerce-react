import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"

const Hero = () => {
  useGSAP(() => {
    gsap.to('#section', {
      y:-15,
      opacity:1,
      delay:0.2,
      duration:1
    })
  }, []);

  return (
    <section className='bg-pink-200 h-[1000px] bg-hero bg-no-repeat bg-cover bg-center py-24' >
      <div className='container mx-auto h-full ' >
        <div className='flex flex-col justify-center h-full opacity-0' id='section'>
          <div className='flex  border-b-2 border-primary text-[25px]'>
            <div>New Trend</div>
          </div>
          <h1 className='uppercase text-[70px] loading-[1.1] font-light mb-4 '>Get The Best Products</h1>
          <Link 
            to={'/shoes'}
            className='self-start uppercase font-bold hover:underline '

          >
              Discover More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero