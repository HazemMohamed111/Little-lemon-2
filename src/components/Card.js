function Card (props) {
    return (
        <div class= "flex mx-4 my-5 md:flex bg-[#EDEFEE] rounded-[10px] hover:bg-[#435334] ml-10 lg:flex-col lg:m-0   ">
            <img src={props.img} alt="product" class=" object-fill rounded-[10px] order-3 drop-shadow-xl w-1/4 h-full justify-self-center md:w-1/4 md:h-full lg:order-1  lg:w-full  " />
                <div className="w-3/4 lg:w-full lg:order-2">
                    <div className="w-full flex py-2 lg:flex">
                <p className=" order-1 text-[14px] w-4/6 font-bold font-Imprima justify-self-start md:text-[28px] md:p-3 md:w-5/6 lg:w-4/6 lg:text-[28px] lg:py-3 lg:px-3  ">{props.name}</p>
                <p className=" order-1 w-2/6 text-right text-[14px] font-semibold pr-1 md:text-[28px] md:p-4 md:text-left md:w-1/6 font-Inika text-[#CE9696] lg:text-left lg:w-2/6 lg:text-[28px] lg:px-3 lg:py-3 ">{props.price}</p>
                </div>
                <p class="text-[14px] font-Inika md:text-[24px] md:px-4 md:pb-4  md:w-full order-2 lg:order-3 lg:text-[20px] lg:pb-6 lg:px-3 ">{props.description}</p>
                </div>
        </div>
    );
}
export default Card