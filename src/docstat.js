import React from 'react';
import './docstat.css';

//data
const theStats = [
    {
      title: 'Leader in 10 countries',
      image: require('./img/stat1.png'),
      desc:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
    },
    {
      title: '1.5 million appointments',
      image: require('./img/stat2.png'),
      desc:'booked last month',
      up:true
    },
    {
      title: '30 million unique patients',
      image: require('./img/stat3.png'),
      desc:'visit us every month'
    },
    {
      title: '2 million active doctors',
      image: require('./img/stat4.png'),
      desc:'trust in our solutions',
      up:true
      }
  ]

//Stat component
const DocStat = (props) => 
<div className ={props.stat.up ? 'stat-class up':'stat-class'}>
    <img src={props.stat.img}/>
    <h3>{props.stat.title}</h3>
    <p>{props.stat.desc}</p>
</div>

//List of Stat component
function DocStats(props){
    return props.statList.map((currentStat, i) =>
        <div key={i}>
          <DocStat stat={currentStat}/>
        </div>
      )
    }

function Stat() {
        return (
   <div className="stat">       
    <div className="stat-div">     
        <div className="offices-div">
            <h1>The world's 
                biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        </div>    
          <div className="numbers-div">
            <DocStats statList={theStats}/>
          </div>
    </div>
    </div>  
        );
}
      
export default Stat;