function Testm(props) {
    return (
        <div class= "grid grid-cols-4  ">
            <img class="w-[50px] h-[30px] col-start-2 col-span-1 order-1 justify-self-end md:w-[120px] md:h-[60px] lg:w-[120px] lg:h-[100px] lg:justify-self-start lg:col-span-2 lg:col-start-1  "  src={props.Rating} alt="rating" />
            <img class="w-[50px] h-[50px] col-start-2 col-span-1 order-2 justify-self-start md:h-[120px] md:w-[120px] lg:w-[150px] lg:h-[170px] lg:col-span-2 lg:col-start-1 " src={props.img} alt="people" />
            <div class="font-Inika text-[14px] col-start-3 order-2 py-4 px-2 md:text-[30px] lg:col-span-2 lg:col-start-3 lg:text-[24px] lg:justify-self-start lg:py-[60px] ">{props.name}</div>
            <div class="font-Inika text-[14px] col-start-2 col-span-2 order-3 justify-self-center md:text-[30px] lg:col-span-4 lg:justify-self-start lg:col-start-1 lg:text-[24px]">{props.comment}</div>
            <div></div>
        </div>
    );

}
export default Testm