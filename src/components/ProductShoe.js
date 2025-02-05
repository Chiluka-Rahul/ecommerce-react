import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {BsPlus} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'

const ProductShoe = ({product}) => {
    const {addToCart} = useContext(CartContext)
    const {id,image,title,price,category} = product
    return (
        <div>
            <div className='border border-[#704e4e] h-[300px] mb-0.5 relative overflow-hidden group transition bg-white '>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-[200px] mx-auto flex justify-center items-center'>
                <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt=''/>
                </div>
                <div className='absolute top-6  -right-11 group-hover:right-5  p-2 flex flex-col items-center justify-center gap-y-20 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <button onClick={() => addToCart(product,id)}>
                    <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                        <BsPlus className='text-3xl'/>
                    </div>
                </button>
                
                {/* <Link to={`/product/${id}`} className='mt-20 w-12 h-12 bg-slate-700 flex justify-center items-center text-[#ffffff] drop-shadow-xl '>
                <BsEyeFill />
                </Link> */}
                </div>
            </div>
            </div>
            <div className='bg-white h-[31%] p-2 border border-[#704e4e]'>
            <div className='text-sm capitalize text-gray-500 mb-1'> {category}</div>
            <Link to={`./product/${id}`}>
                <h2 className='font-semibold mb-1'>{title}</h2>
            </Link>
            
            <div className='font-semibold'>$ {price}</div>
            </div>
        </div>
    )
}

export default ProductShoe