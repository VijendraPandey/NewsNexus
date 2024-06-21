import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import ParentButtons from "./components/ParentButtons";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <div className="font-poppins px-[3vw] bg-gradient-to-r w-full from-[#f8e1ce] via-[#f9f4ed] to-[#fbe2db]">
      <BrowserRouter>
        <ParentButtons />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/latest-news" element={<Body cat="Latest News" />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Business" element={<Body cat="Business" />} />
          <Route exact path="/Entertainment" element={<Body cat="Entertainment" />} />
          <Route exact path="/General" element={<Body cat="General" />} />
          <Route exact path="/Health" element={<Body cat="Health" />} />
          <Route exact path="/Science" element={<Body cat="Science" />} />
          <Route exact path="/Sports" element={<Body cat="Sports" />} />
          <Route exact path="/Technology" element={<Body cat="Technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
