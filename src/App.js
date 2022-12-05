import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Menu from "./pages/menu/Menu";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";
import Page4 from "./pages/page4/Page4";
import Page5 from "./pages/page5/Page5";

function App() {
  return (
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path='/two' element={<Page2/>}/>
          <Route path='/three' element={<Page3/>}/>
          <Route path='/four' element={<Page4/>}/>
          <Route path='/five' element={<Page5/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

