import photo1 from '../photos/restauranfood.jpg';
function Undernav() {
    return (
        <div class= " bg-[#495e57] py-4 grid grid-cols-4 md:grid-cols-8 md:h-[430px] lg:grid-cols-12 lg:h-[650px]    ">
            <div class="col-span-2 px-6 md:col-span-5 lg:col-start-3 ">
            <p class="font-Martel text-[20px] text-[#F4CE14] py-[10px] col-start-1 col-span-2 md:text-[40px] lg:text-[60px]	">Little Lemon</p>
            <p class="font-karla text-[16px] text-white md:text-[32px] lg:text-[40px]	">Chicago</p>
            <p class="font-Intika text-[14px] text-white py-[10px] pb-[10px] md:text-[24px] lg:text-[30px] lg:my-[20px] 	">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?</p>
            <button class="h-[26px] w-[130px] bg-[#F4CE14] rounded-[50px] text-[14px] font-Inter lg:text-[30px] lg:h-[60px] lg:w-[300px] hover:bg-[#435334] md:h-[50px] md:w-[220px] md:my-4 md:text-[22px] ">Reserve Table Now</button>
            </div>
            <div class="w-full px-2 col-start-3 col-span-2 mt-[100px] md:w-[200px] md:h-[300px] md:col-span-3 md:order-2 lg:w-[370px] lg:mt-20 lg:ml-[40px] lg:col-start-8">
                <img src={photo1} alt="main"/>
                </div>
        </div>
    );
}
export default Undernav