// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import name1, {name2, name3, name4, name5, name6} from "./module2.mjs";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import HandleCapitalize from './components/HandleCapitalize';


function App() {
  const [mode, setMode] = useState('dark'); // Whether dark mode is enabled or not
  // console.log(name1);
  // console.log(name2);
  return (
    <>
    {/* <HandleCapitalize /> */}
    <Navbar title="Text Utilities" mode={mode} />
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/>
      {/* <About heading="About us" /> */}
    </div>
    </> 
  );
}

export default App;
