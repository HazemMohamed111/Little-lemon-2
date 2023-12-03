import photo1 from '../photos/Mario and Adrian A.jpg'
import photo2 from '../photos/Mario and Adrian b.jpg'
function About() {
    return (
        <div class= "grid grid-cols-4 py-5 bg-[#495E57] mt-[20px] pl-10 lg:grid-cols-12 ">
        <div class=" col-start-1 col-span-2 lg:col-start-3 lg:col-span-6 lg:py-8">
        <p class=" text-[20px] col-span-2 text-[#F4CE14] font-Martel md:py-3 md:text-[46px] lg:text-[64px] lg:col-span-4 ">Little lemon</p>
        <p class=" text-[16px] font-Inika text-white py-[10px] md:text-[36px] md:pb-4 lg:text-[32px] lg:col-span-4 ">Chicago</p>
        <p class="text-[14px] font-Inika text-white md:text-[20px] lg:text-[20px] lg:col-span-4  ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?</p>
        </div>
        <div class=" col-span-2 ml-[20px] mt-[40px] md:mt-[0px] lg:col-start-9 ">
        <img class="w-[100px] h-[100px] ml-[20px] mb-[-20px] md:w-[230px] md:h-[230px] md:ml-[60px] md:mb-[-20px] lg:w-[300px] lg:col-span-3 lg:mb-[-100px]  " src={photo1} alt="owners" />
        <img class="w-[100px] h-[100px] md:w-[230px] md:h-[230px]  " src={photo2} alt="owners" />
        </div>
        </div>
    );

}
export default About