import { Route, Routes  } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
// import Reserve from "./components/BookingPage"

function App() {
  return (
    <>
    {/* <Reserve/> */}
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Booking' element={<BookingPage />} />
    </Routes>
    </>
  );
}

export default App;
