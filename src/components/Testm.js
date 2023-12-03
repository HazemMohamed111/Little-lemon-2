function Testm(props) {
    return (
        <div class= " flex-col w-[250px] my-4 shadow-2xl md:w-[350px] md:h-[220px] lg:w-[400px] lg:h-[310px] lg:mx-4 lg:py-2 ">
            <img class=" rounded-full w-[80px] ml-[85px] md:w-[100px] md:ml-32 md:rounded-full lg:rounded-full lg:w-[150px] lg:ml-28  " src={props.img} alt="people" />
            <div class=" text-center text-[14px] py-3  md:text-center md:text-[14px] md:py-6 px-2 lg:text-[16px] lg:text-center lg:py-10 lg:px-2">{props.comment}</div>
        </div>
    );

}
export default Testm