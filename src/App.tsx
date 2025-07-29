import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Content from "./components/Content";
import Footer from "./components/Footer"

function App() {
const [dark,setDark]=useState(true);
  return (
    
    <div className="flex flex-col min-h-screen">
      <Header dark={dark} setDark={setDark}/>
      <Subheader/>
      <Content dark={dark}/>
      <Footer dark={dark}/>
     
      
    </div>
  );
}

export default App;