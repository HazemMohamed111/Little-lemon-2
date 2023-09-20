import Header from'../components/Header.js';
import Undernav from '../components/Undernav.js';
import Footer from'../components/Footer.js';
import Testm from '../components/Testm.js';
import Card from '../components/Card.js';
import img1 from '../photos/greek salad.jpg';
import img2 from '../photos/bruchette.png';
import img3 from '../photos/lemon dessert.jpg';
import rating from '../icons/rating.png'
import pic1 from '../pic/1.jpg';
import pic2 from '../pic/2.jpg';
import pic3 from '../pic/4.jpg';
import pic4 from '../pic/5.jpg';
import About from '../components/About.js';
function HomePage() {
  return (
  <>
    <Header />
    <Undernav />
    <div class="grid grid-cols-4 pt-[12px] md:grid-cols-8 lg:grid-cols-12">
    <div class="col-start-1 col-span-2 font-Inika text-[24px] justify-self-center md:col-span-3 md:text-[60px] lg:col-start-3 lg:text-[64px]  ">Specials</div>
    <button class="h-[25px] w-[70px] bg-[#F4CE14] justify-self-center rounded-[50px] text-[14px] font-Inter col-start-3 col-span-2 md:col-start-6 md:col-span-3 md:w-[175px] md:h-[65px] md:text-[28px]  hover:bg-[#435334] md:order-2 lg:col-start-9 lg:text-[40px] lg:w-[250px] lg:h-[70px]  ">Menu</button>
    </div>
    <div class=" lg:grid lg:grid-cols-12 ">
    <div class="lg:col-start-3 lg:col-span-3"><Card img={img1} name ='Greek salad' price='11.99$' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?'/></div>
    <div class=" lg:col-span-3"><Card img={img2} name ='bruchetta' price='8.99$' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?'/></div>
    <div class=" lg:col-span-3"><Card img={img3} name ='Dessert' price='10.99$' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?'/></div>
    </div>
    
    <div class="grid grid-cols-4 pt-[20px] md:mt-[-30px] lg:grid lg:grid-cols-12  ">
    <div class="col-start-1 font-Inika text-[20px] col-span-4 justify-self-center md:text-[48px] lg:col-start-3 lg:col-end-12 lg:justify-self-center  ">Testimonials</div>
    </div>
    <div class="grid grid-cols-4 lg:grid lg:grid-cols-12  ">
    <div class="col-span-2 lg:col-start-3 lg:col-span-3 lg:order-1 "><Testm Rating={rating} img={pic1} name='ibrahem' comment='Great food' /></div>
    <div class=" col-span-2 lg:col-span-3 lg:order-1 "><Testm Rating={rating} img={pic2} name='jean' comment='Great food' /></div>
    <div class=" col-span-2 lg:col-span-3 lg:order-1 "><Testm Rating={rating} img={pic3} name='karla' comment='Great food' /></div>
    <div class=" col-span-2 lg:col-span-3 lg:order-2 lg:col-start-3"><Testm Rating={rating} img={pic4} name='badr' comment='Great food' /></div>
    </div>
    <About />
    <Footer />
    
    </>

  
  );
}

export default HomePage;
