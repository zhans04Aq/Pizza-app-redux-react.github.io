import { useState } from 'react';
import arrow from '../assets/icons/arrow-icon.svg';
import { motion } from "framer-motion";

export default function Filter() {
    const [activeFilter, setActiveFilter] = useState("Все");
    const [activeSort, setActiveSort] = useState("hidden");
    const [isArrowRotated, setIsArrowRotated] = useState(false);

    const handleClick = (filter) => {
        setActiveFilter(filter);
    };

    const handleSortClick = () => {
        setActiveSort(activeSort === "block" ? "hidden" : "block");
        setIsArrowRotated(!isArrowRotated); 
        
    };

    const [currentSortType, setCurrentType] = useState("По Пулярности")

    const handleSortOptionClick = (option) => {
        setActiveSort("hidden");
        setCurrentType(option);
    };

    return (
        <div className="flex flex-col xl:flex-row justify-between">
            <ul className="flex flex-row flex-wrap lg:flex-row w-full xl:w-2/3 items-start gap-2 text-black font-bold">
                {["Все", "Мясные", "Вегетариансие", "Гриль", "Острые", "Закрытые"].map((filter) => (
                    <li
                        key={filter}
                        className={activeFilter === filter ? "transition-all duration-200 basis-1 text-white bg-filterBgActive py-2 px-5 rounded-3xl" : "basis-1 text-black cursor-pointer bg-filterBgPassive py-2 px-5 rounded-3xl"}
                        onClick={() => handleClick(filter)}
                    >
                        {filter}
                    </li>
                ))}
            </ul>
            <div className="flex flex-col xl:w-1/4 w-full cursor-pointer items-end mt-4 xl:mt-0 relative">
                <div className='flex gap-1.5 items-center'>
                    <motion.img 
                        onClick={handleSortClick}
                        className='w-2.5'
                        src={arrow}
                        animate={{rotate: isArrowRotated ? 180 : 0}}
                        alt="" />
                    <p onClick={handleSortClick} className='w-full'>
                        Сортировка по: <span className=' text-customOrange decoration-dashed decoration-customOrange decoration-1 underline'>{currentSortType}</span>
                    </p>
                </div>
                <motion.div
                animate
                className={`w-44 q z-10 bg-white rounded-xl absolute top-8 py-4 text-start ${activeSort}`}>
                    <p className='hover:bg-sortHoverBg hover:text-customOrange pl-4 py-2' onClick={() => handleSortOptionClick("По Пулярности")}>По Пулярности</p>
                    <p className='hover:bg-sortHoverBg hover:text-customOrange pl-4 py-2' onClick={() => handleSortOptionClick("По Цене")}>По Цене</p>
                    <p className='hover:bg-sortHoverBg hover:text-customOrange pl-4 py-2' onClick={() => handleSortOptionClick("По Алфавиту")}>По Алфавиту</p>
                </motion.div>
            </div>
        </div>
    );
}
