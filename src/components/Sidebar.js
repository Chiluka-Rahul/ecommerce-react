import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {IoMdArrowForward} from   "react-icons/io"
import {FiTrash2}  from "react-icons/fi";
import CartItem  from './CartItem';

import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  const {cart, clearCart,total,itemAmount} = useContext(CartContext)

  return (
    <div className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duartion-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'> Shopping Bag({itemAmount}) </div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center' onClick={handleClose}>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-x-hidden overflow-y-auto border-b'>
        {cart.map(item => {
          return <CartItem item={item} key={item.id}/>
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={clearCart} className='cursor-pointer py-5 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'><FiTrash2 /></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar