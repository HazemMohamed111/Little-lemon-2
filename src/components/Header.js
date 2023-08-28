import LOGO from "../Logo.png"
import Basket from "../icons/basket.png"
import Ham from "../icons/Hamburger.png"
import X from "../icons/close.png"
import { useState } from "react";

function Header() {
    const [sidebar,setSidebar] = useState(false)
    const handelClick = (e) => {
        (sidebar===false) ? setSidebar(true) : setSidebar(false)
    }
    return (
        <>
        <header class= "lg:h-24 grid lg:grid-cols-12 gap-x-5 px-10 content-center md:grid-cols-8 md:h-20 grid-cols-4 mx-[-0px] ">
            <img src={LOGO} alt="Logo" className="lg:justify-self-start lg:col-start-3 lg:col-span-2 object-fill lg:order-1 md:order-2 md:col-start-2 justify-self-center  md:col-span-6 order-2 col-span-2 col-start-2 "></img>
            <nav className="lg:col-start-5 lg:col-end-10  lg:order-2 md:hidden hidden lg:block">
                <ul className=" lg:flex md:hidden hidden lg:items-center ">
                    <li class=" font-Intika text-xl text-[#495E57] hover:text-[#7091F5] lg:mr-16 lg:capitalize"><a href='/home' >home</a></li>
                    <li class=" font-Intika text-xl text-[#495E57] hover:text-[#7091F5] lg:mr-16 lg:capitalize"><a href='./about'  >About</a></li>
                    <li class=" font-Intika text-xl text-[#495E57] hover:text-[#7091F5] lg:mr-16 lg:capitalize"><a href='./special'  >Menu</a></li>
                    <li class=" font-Intika text-xl text-[#495E57] hover:text-[#7091F5] lg:mr-16 lg:capitalize"><a href='./rservation'>Reservations</a></li>
                    <li class=" font-Intika text-xl text-[#495E57] hover:text-[#7091F5] lg:mr-16 lg:capitalize"><a href='./orderonline'  >Order Online</a></li>
                    <li class=" font-Intika text-xl text-[#495E57] hover:text-[#7091F5] lg:mr-16 lg:capitalize"><a href='./login'  >Login</a></li>
                </ul>
            </nav>
            {
                (!sidebar)&&<button onClick={handelClick} className="order-1 col-span-1 col-start-1 lg:hidden md:order-1 md:col-start-1 md:col-span-1 justify-self-center"><img alt="burger" src={Ham}/></button>
            }
            <button className=" lg:hidden order-3 md:col-start-8 col-start-4 justify-self-center col-span-1"><img alt="Basket" src={Basket} /></button>
        </header>
        {
            (sidebar) && <aside className="w-[100%] h-[100%] z-50 absolute top-0 bg-white md:bg-opacity-80"> 
                <button onClick={handelClick} className="lg:hidden relative top-6 left-20 mx-[-40px] "><img alt="burger" src={X}/></button>
            <ul className=" lg:hidden md:flex flex flex-col items-center h-[100%]  w-[100%]  ">
                    <li class=" font-Intika text-xl font-bold mt-5  text-[#495E57] hover:text-[#7091F5] lg:capitalize "><a href='/home' >Home</a></li>
                    <li class=" font-Intika text-xl font-bold mt-5  text-[#495E57] hover:text-[#7091F5] lg:capitalize"><a href='./about'  >About</a></li>
                    <li class=" font-Intika text-xl font-bold mt-5  text-[#495E57] hover:text-[#7091F5] lg:capitalize"><a href='./special'  >Menu</a></li>
                    <li class=" font-Intika text-xl font-bold mt-5  text-[#495E57] hover:text-[#7091F5] lg:capitalize"><a href='./rservation'>Reservations</a></li>
                    <li class=" font-Intika text-xl font-bold mt-5  text-[#495E57] hover:text-[#7091F5] lg:capitalize"><a href='./orderonline'  >Order Online</a></li>
                    <li class=" font-Intika text-xl font-bold mt-5  text-[#495E57] hover:text-[#435334] lg:capitalize"><a href='./login'  >Login</a></li>
                </ul>
            </aside>
        }
        </>
    );

}
export default Header