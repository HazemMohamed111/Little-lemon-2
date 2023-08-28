function Card (props) {
    return (
        <div class= "grid grid-cols-4 my-5 md:grid-cols-8 bg-[#EDEFEE] rounded-[10px] hover:bg-[#435334] ml-10 lg:grid-cols-4    ">
            <img src={props.img} alt="product" class="h-[70px] w-[70px] object-fill rounded-[10px] order-3 drop-shadow-xl col-start-4 col-span-1 justify-self-center md:w-[175px] md:h-[175px] md:col-span-2 md:col-start-7 lg:order-1 lg:col-span-4 lg:w-[300px]  " />
                <p className=" order-1 col-start-1 col-span-2 text-[14px] font-Imprima justify-self-start md:text-[30px] md:col-start-1 lg:order-2 lg:col-span-3 lg:col-start-1 lg:text-[32px]   ">{props.name}</p>
                <p className=" order-1 col-span-1 col-start-3 justify-self-end text-[14px] md:text-[30px] md:col-start-5 font-Inika text-[#CE9696] lg:order-2 lg:col-start-4 lg:text-[32px] ">{props.price}</p>
                <p class="text-[14px] font-Inika md:text-[30px] md:col-span-6 order-2 col-span-3 lg:order-3 lg:text-[24px] ">{props.description}</p>
        </div>
    )
}
export default Card