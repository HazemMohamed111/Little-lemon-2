import photo1 from '../photos/restauranfood.jpg';
function Undernav() {
    return (
        <div class= " bg-[#495e57] h-[340px] grid grid-cols-4 md:grid-cols-8 md:h-[420px] lg:grid-cols-12 lg:h-[700px]    ">
            <div class="col-span-2 pl-[30px] md:col-span-5 lg:col-start-3 ">
            <p class="font-Martel text-[20px] text-[#F4CE14] pt-[10px] col-start-1 col-span-2 md:text-[40px] lg:text-[64px]	">Little Lemon</p>
            <p class="font-karla text-[16px] text-white pt-[10px] md:text-[32px] lg:text-[40px]	">Chicago</p>
            <p class="font-Intika text-[14px] text-white pt-[10px] pb-[10px] md:text-[24px] lg:text-[36px] lg:mb-[10px] 	">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?</p>
            <button class="h-[26px] w-[130px] animate-pulse bg-[#F4CE14] rounded-[50px] text-[14px] font-Inter lg:text-[40px] lg:h-[80px] lg:w-[400px] hover:bg-[#435334] md:h-[60px] md:w-[275px] md:text-[26px] ">Reserve Table Now</button>
            </div>
            <div class="w-[100px] h-[135px] col-start-3 col-span-2 mt-[100px] ml-8 md:w-[200px] md:h-[300px] md:col-span-3 md:order-2 lg:h-[350px] lg:w-[350px] lg:col-start-8">
                <img src={photo1} alt="main"/>
                </div>
        </div>
    );
}
export default Undernav