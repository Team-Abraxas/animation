import "./App.css";

import {WiMoonAltFull ,WiMoonAltNew  ,WiMoonAltFirstQuarter ,WiMoonAltThirdQuarter ,WiMoonAltWaningGibbous3 ,WiMoonAltWaningCrescent5 ,WiMoonAltWaxingCrescent2 ,WiMoonAltWaxingGibbous3 } from "react-icons/wi";
function App() {
  return (
    <div className="container">
      <div className="content">
   <div className="animated">
  <img className="rotate" src="data:image/png;base64,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"></img>
   </div>
        <div className="moon" id="moon1"><WiMoonAltFull size={40} style={{ color: "#fff" }} /></div>

       
<div className="flex-moon">
        <div className="moon" id="moon3"><WiMoonAltFirstQuarter size= {40} style = {{color:"#fff"}}/></div>
        {/* <div className="flex-moon4">
            <div className="moon" id="moon7"><WiMoonAltWaningGibbous3 size= {40} style = {{color:"#fff"}}/></div>
            <div className="moon" id="moon8"><WiMoonAltWaningCrescent5 size= {40} style = {{color:"#fff"}}/></div>
          </div> */}
        <div className="flex-moon3">
        <div className="flex-moon4">
            <div className="moon" id="moon7"><WiMoonAltWaxingCrescent2 size= {40} style = {{color:"#fff"}}/></div>
            <div className="moon" id="moon8"><WiMoonAltWaxingGibbous3 size= {40} style = {{color:"#fff"}}/></div>
          </div>
      <div className="flex-moon5">
    
          <div className="moon" id="moon5"><WiMoonAltWaningGibbous3 size= {40} style = {{color:"#fff"}}/></div>
          <div className="moon" id="moon6"><WiMoonAltWaningCrescent5 size= {40} style = {{color:"#fff"}}/></div>
        </div></div>
        <div className="moon" id="moon4"><WiMoonAltThirdQuarter size= {40} style = {{color:"#fff"}}/></div>
</div>
        <div className="moon" id="moon2"><WiMoonAltNew size= {40} style = {{color:"#fff"}}/></div>
    </div>
    </div>
  );
}

export default App;
