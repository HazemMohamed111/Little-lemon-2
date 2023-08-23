import './App.css';
import Header from'../src/components/Header.js';
import Undernav from './components/Undernav';
import Footer from'../src/components/Footer.js';
import Testm from './components/Testm';
import Card from '../src/components/Card';
import img1 from '../src/photos/greek salad.jpg';
import img2 from '../src/photos/bruchette.png';
import img3 from '../src/photos/lemon dessert.jpg';
import rating from './icons/rating.png'
import pic1 from './pic/1.jpg';
import pic2 from './pic/2.jpg';
import pic3 from './pic/4.jpg';
import pic4 from './pic/5.jpg';
import About from './components/About';
function App() {
  return (
  <>
    <Header />
    <Undernav />
    <Card img={img1} name ='Greek salad' price='11.99$' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?'/>
    <Card img={img2} name ='bruchetta' price='8.99$' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?'/>
    <Card img={img3} name ='Dessert' price='10.99$' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint delectus labore eum rerum quibusdam totam nemo nisi, omnis unde fuga enim sed animi, maiores necessitatibus mollitia facere velit. Debitis?'/>
    <Testm Rating={rating} img={pic1} name='ibrahem' comment='Great food' />
    <Testm Rating={rating} img={pic2} name='jean' comment='Great food' />
    <Testm Rating={rating} img={pic3} name='karla' comment='Great food' />
    <Testm Rating={rating} img={pic4} name='badr' comment='Great food' />
    <About />
    <Footer />
    
    </>

  
  );
}

export default App;
