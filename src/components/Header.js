import React,{useContext,useEffect,useState} from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isactive, setIsactive] = useState(false)
  const {isOpen , setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)
  const [query, setQuery] = useState("")
  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  useEffect(() => {
    window.addEventListener('scroll',() => {
      window.scrollY > 60 ? setIsactive(true) : setIsactive(false)
    }) 
  })
  

  return (
    <header className={`${isactive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}  >
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
            <div>
              <h1 className='text-[20px]'>NewCart</h1>
            </div>
        </Link>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative '>
          <BsBag className='text-2xl'/>
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center '>
            {itemAmount }
          </div>
        </div>
      </div>
      
    </header>
    
  )
}

export default Header