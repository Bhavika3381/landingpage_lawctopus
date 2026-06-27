import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Courses from "./Components/Courses/Courses";
import About from "./Pages/About";
import Opportunities from "./Components/Opportunities/Opportunities";

import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="courses" element={<Courses />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="about" element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;