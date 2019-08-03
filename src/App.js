import React from 'react';
import './App.css';
import DocHeader from './docheader.js'
import sygnet from './img/sygnet.png'
import DocService from './docservice'
import DocBrand from './docbrand'
import DocStat from './docstat'
import DocOffice from './docoffice'
import DocFooter from './footer'

let text1 ="We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."
let text2 ="We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."

//introduction section: paragraph component
const DocIntroP = (props) =>
<div className="intro-p">
  <p>{props.text}</p>
</div>

const DocIntro = () =>
<div className="intro-doc">
  <img src={sygnet} alt="Docplanner Group"/>
  <h1>Making the healthcare experience more human</h1>
  <div className="p-container">
    <DocIntroP text={text1}/>
    <DocIntroP text={text2}/>
  </div>
</div>

function App() {
  return (
    <div>
      <DocHeader/>
      <DocIntro/>
      <DocService/>
      <DocBrand/>
      <DocStat/>
      <DocOffice/>
      <DocFooter/>
    </div>
  );
}

export default App;
