import { Route, Routes, Link } from "react-router-dom";


import CurrencyConverter from './pages/CurrencyConverter/CurrencyConverter';
import Gallery from './pages/Gallery/Gallery';
import Quiz from './pages/Quiz/Quiz';
import EmptyPage from "./pages/EmptyPage";

function App() {
  return (
    <div className="app h-[100vh] flex flex-col justify-start items-center">
      <ul className="w-full mt-[5vh] flex flex-row flex-wrap justify-center items-center text-2xl font-medium">
        <li className="hover:text-red-600">
          <Link to="/converter">Currency Converter</Link>
        </li>
        <li className="hover:text-red-600">
          <Link to="/quiz">Quiz</Link>
        </li>
        <li className="hover:text-red-600">
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
