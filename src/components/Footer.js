import LOGO1 from "../Logo.png"
function Footer() {
    return (
    <footer class= "grid grid-cols-4 py-8 pl-10 lg:grid-cols-12 bg-[#EE9972] text-[#495e57]">
            <img class="col-span-2 md:col-span-1 justify-self-center lg:col-start-3 lg:col-span-2 " src={LOGO1} alt="Logo"></img>
        <div class=" col-span-2 md:col-span-1 justify-self-center lg:col-span-2">
            <ul class=" ">
                <li class="font-Inika text-[16px] md:text-[28px] "><p>Navigation</p></li>
                <li class="font-Inika text-[14px] md:text-[24px] hover:text-[#7091F5]   "><a href='/home'>Home</a></li>
                <li class="font-Inika text-[14px] md:text-[24px] hover:text-[#7091F5]   "><a href='./about'>Specials</a></li>
                <li class="font-Inika text-[14px] md:text-[24px] hover:text-[#7091F5]   "><a href='./special'>Testimonials</a></li>
                <li class="font-Inika text-[14px] md:text-[24px] hover:text-[#7091F5]   "><a href='./rservation'>About</a></li>
            </ul>
        </div>
        <div class="col-span-2 md:col-span-1 justify-self-center lg:col-span-2">
            <ul class=" ">
                <li class="font-Inika text-[16px] md:text-[28px] "><p>Contacts</p></li>
                <li class="font-Inika text-[14px] md:text-[24px] hover:text-[#7091F5] "><a href='./Address'>Address</a></li>
                <li class="font-Inika text-[14px] md:text-[24px] hover:text-[#7091F5] "><a href='./Phone'>Phone</a></li>
                <li class="font-Inika text-[14px] md:text-[24px] hover:text-[#7091F5] "><a href='./Email'>Email</a></li>
            </ul>
        </div>
        <div class="col-span-2 md:col-span-1 justify-self-center lg:col-span-2" >
            <ul class=" ">
                <li class="font-Inika text-[16px] md:text-[26px]  "><p>Social Media</p></li>
                <li class="font-Inika text-[14px] md:text-[24px] hover:text-[#7091F5] "><a href='./Facebok'>Facebook</a></li>
                <li class="font-Inika text-[14px] md:text-[24px] hover:text-[#7091F5] "><a href='./Instagram'>Instagrm</a></li>
                <li class="font-Inika text-[14px] md:text-[24px] hover:text-[#7091F5] "><a href='./whatsapp'>Whats App</a></li>
            </ul>
        </div>
    </footer>
    );

}
export default Footer