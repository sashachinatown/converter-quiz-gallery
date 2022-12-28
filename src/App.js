import { Route, Routes, Link } from "react-router-dom";


import CurrencyConverter from './pages/CurrencyConverter/CurrencyConverter';
import Gallery from './pages/Gallery/Gallery';
import Quiz from './pages/Quiz/Quiz';
import EmptyPage from "./pages/EmptyPage";

function App() {
  return (
    <div className="app h-[100vh] flex flex-col justify-start items-center">
      <ul className="md:w-full w-[90%] mt-[5vh] mb-[3vh] flex md:flex-row flex-col flex-wrap justify-center items-center md:text-2xl text-lg font-medium">
        <li className="hover:text-red-600 list-none">
          <Link to="/converter">Currency Converter</Link>
        </li>
        <li className="hover:text-red-600 list-none md:ml-20 md:mt-0 mt-2">
          <Link to="/quiz">Quiz</Link>
        </li>
        <li className="hover:text-red-600 list-none md:ml-20 md:mt-0 mt-2">
          <Link to="/gallery">Photo Gallery</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/converter" element={<CurrencyConverter/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="*" element={<EmptyPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
