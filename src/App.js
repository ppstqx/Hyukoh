import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Music from './components/Music';
import Video from './components/Video';
import Contact from './components/Contact';
import React, {useState, useEffect} from "react";
import { css } from "@emotion/react";
import { ScaleLoader } from "react-spinners";


function App() {

  const[loading,setLoading] = useState(false);
  const override = css`
  display: block;
  border-color: black;
  margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
       setLoading(false)
    }, 2000);
  },[])

  return (
    <div className="App">
{
        loading ? <ScaleLoader color={"black"} Loading={loading} css={override} size={40}/>
        :
    <>
     <Navbar />
     <Banner />
     <Music />
     <Video />
     <Contact />
    </>
}
    </div>
  );
}

export default App;
