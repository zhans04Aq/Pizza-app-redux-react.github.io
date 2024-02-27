/* eslint-disable no-unused-vars */
import cheeseBurgerPizza from '../assets/img/cheese-burger-pizza.svg'
import cheesePizza from '../assets/img/cheese-pizza.svg'
import shrimpPizza from '../assets/img/shrimp-pizza.svg'
import cheeseChickenPizza from '../assets/img/cheese-chicken-pizza.svg'

import {React, useState } from 'react'

const pizzaImg = [
    {id:1, name: 'Чиз Бургер Пицца', url: cheeseBurgerPizza,price:395},
    {id:2, name: 'Сырная Пицца', url: cheesePizza, price:450},
    {id:3, name: 'Креветки по-азиатский', url: shrimpPizza, price:290},
    {id:4, name: 'Сырный Цыпленок', url: cheeseChickenPizza, price:385},                          
    
];
export default function PizzaList (){

    const [pizzaType, setPizzaType] = useState('Тонкое')
    const [pizzaSize, setPizzaSize] = useState('26cm')
    const [pizzaCount, setPizzaCount] = useState(0)

    const chooseType = (type) => {
        setPizzaType(type)
    }

    const chooseSize = (size) =>{
        setPizzaSize(size)
    }

    const addPizza = ()=>{
        setPizzaCount(pizzaCount+1)
    }



    return(
        <div className="w-full mt-12">
            <h1 className="font-bold text-center text-2xl md:text-start">Все пиццы</h1>
            <div className="flex flex-limit4 flex-row flex-wrap items-center justify-around">
                {pizzaImg.map((images)=>(
                <div key={images.id} className="flex flex-col flex-wrap items-center max-w-full">
                    <img src={images.url} alt={images.name} className='w-1/2 md:w-1/2 xl:w-56'/>
                    <h2 className='font-bold text-xs'>{images.name}</h2>
                    <div className='bg-pizzaFilterBg min-w-40 md:min-w-56 flex flex-col py-2 px-2 mt-1 font-bold rounded-lg space-y-1'>
                        <div className='grid grid-cols-2 justify-center gap-1 items-center'>
                            {['Тонкое', 'Традиционное'].map((type) => (
                                <p
                                    key={type}
                                    className={pizzaType === type ? 'text-xs text-center shadow-lg bg-white rounded-md text-pizzaFilterActiveText px-1.5 py-0.5' :  'cursor-pointer text-xs text-center'}
                                    onClick={() => chooseType(type)}
                                >
                                    {type}
                                </p>
                            ))}
                        </div>
                        <div className='grid grid-cols-3 justify-center gap-2 items-center'>
                            {['26cm','30cm','40cm'].map((size)=>(
                                <p
                                    key={size}
                                    className={pizzaSize === size ?'text-xs text-center shadow-lg bg-white rounded-md text-pizzaFilterActiveText px-1 py-0.5':'cursor-pointer text-xs text-center'}
                                    onClick={()=>chooseSize(size)}
                                >
                                    {size}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className='flex w-full justify-center space-x-12 items-center mt-2'>
                        <p>от {images.price} ₽</p>
                        <button  className=' flex items-center px-2 py-0.5 gap-1 min-w-2 group rounded-full bg-white lg:hover:bg-customOrange border border-customOrange' onClick={()=>addPizza()}>
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E" className='lg:group-hover:fill-white'/>
                            </svg>
                            <p className='text-customOrange lg:group-hover:text-white'>Добавить</p>
                            <p className='bg-customOrange px-1.5 rounded-full text-white lg:group-hover:text-customOrange'>{pizzaCount}</p>
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
