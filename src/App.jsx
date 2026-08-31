import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Projects from "./Pages/projects/Projects";
import Blogs from "./Pages/Blogs";
import Services from "./Pages/Services";
// import Testimonials from "./Pages/Testimonials";
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import PageNotFound from "./Pages/PageNotFound";
import Contact from "./Pages/contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/services" element={<Services />}/>
          {/* <Route path="/testimonials" element={<Testimonials />}/> */}


          <Route path="*" element={<PageNotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
