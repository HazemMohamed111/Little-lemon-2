import Header from'../components/Header.js';
import Undernav from '../components/Undernav.js';
import Footer from'../components/Footer.js';
import Testm from '../components/Testm.js';
import Card from '../components/Card.js';
import img1 from '../photos/greek salad.jpg';
import img2 from '../photos/bruchette.png';
import img3 from '../photos/lemon dessert.jpg';
import pic1 from '../pic/1.jpg';
import pic2 from '../pic/2.jpg';
import pic3 from '../pic/4.jpg';
import pic4 from '../pic/5.jpg';
import About from '../components/About.js';
import Marquee from "react-fast-marquee";
import './HP.css'


function HomePage() {
  return (
  <>
    <Header />
    <Undernav />
    <div class="grid grid-cols-4 pt-[12px] md:grid-cols-8 md:my-4 lg:grid-cols-12 lg:my-8 lg:mt-24">
    <div class="col-start-1 col-span-2 font-Inika text-[24px] justify-self-center md:col-span-3 md:text-[60px] lg:col-start-3 lg:text-[64px]  ">Specials</div>
    <button class="h-[25px] w-[70px] bg-[#F4CE14] justify-self-center rounded-[50px] text-[14px] font-Inter col-start-3 col-span-2 md:col-start-6 md:col-span-3 md:w-[150px] my-3 md:h-[50px] md:text-[24px]  hover:bg-[#435334] md:order-2 lg:col-start-9 lg:text-[40px] lg:w-[200px] lg:h-[60px] lg:mt-6  ">Menu</button>
    </div>
    <div class=" md:mx-10 lg:flex lg:mx-40 scroll-smooth	 ">
    <div class=" md:hover:scale-105 ease-in duration-300 lg:hover:scale-110 mx-3 transition-all lg:w-1/3 "><Card img={img1} name ='Greek salad' price='11.99$' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?'/></div>
    <div class=" md:hover:scale-105 ease-in duration-300 lg:hover:scale-110 mx-3 transition-all lg:w-1/3"><Card img={img2} name ='bruchetta' price='8.99$' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?'/></div>
    <div class=" md:hover:scale-105 ease-in duration-300 lg:hover:scale-110 mx-3  lg:w-1/3 transition-all"><Card img={img3} name ='Dessert' price='10.99$' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?'/></div>
    </div>
    
    <div class="grid grid-cols-4 pt-[20px] md:mb-10 lg:grid lg:grid-cols-12 lg:my-12  ">
    <div class="col-start-1 font-Inika text-[20px] col-span-4 justify-self-center md:text-[48px] lg:col-start-3 lg:col-end-12 lg:justify-self-center  ">Testimonials</div>
    </div>
    <div class=" md:w-full md:h-[260px] lg:w-full lg:my-10 lg:bg-grey lg:h-[350px] ">
    <Marquee speed={50} autoFill={true} >
    <div class="mx-6"><Testm img={pic1} comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' /></div>
    <div class="mx-6"><Testm img={pic2} comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' /></div>
    <div class="mx-6"><Testm img={pic3} comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' /></div>
    <div class="mx-6"><Testm img={pic4} comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' /></div>
     </Marquee>
    </div>

    <About />
    <Footer />
    
    </>

  
  );
}

export default HomePage;
