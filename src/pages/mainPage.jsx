// import { Link } from "react-router-dom"

import Filter from "../components/filter";
import Header from "../components/header";
import PizzaList from "../components/pizzaList";

export default function Mainpage (){
    return(
        <div className="container rounded-xl bg-white mx-auto flex flex-col p-4 md:p-12"> 
            <Header/>
            <Filter/>
            <PizzaList/>

        </div>
    )
}