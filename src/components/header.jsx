import { Link } from 'react-router-dom'

import logo from '../assets/icons/logo.svg'
import cart from '../assets/icons/cart-icon.svg'

export default function Header(){
    return(
        <div className="w-full flex justify-between mb-12">
            <img src={logo} alt="" className=" w-3/5 md:w-2/5 lg:w-1/4"/>
            <Link to={"/cart"} className='min-w-20 rounded-3xl border-none bg-customOrange text-white flex items-center gap-3 px-5 md:py-2 font-bold text-xs'>
                <p>0 ₽</p>
                <div className="w-0.5 h-5 bg-vrBg"></div>
                <div className=' flex gap-1'>
                    <img className='w-1/2' src={cart} alt="" />
                    <p>0</p>
                </div>
            </Link>
        </div>
    )
}