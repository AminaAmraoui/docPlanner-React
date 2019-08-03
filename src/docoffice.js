import React from 'react';
import './docoffice.css';

let btnText ='See openings'

//data
const theOffices = [
    {
      img: require('./img/warsaw.png'),
      cityname: 'Warsaw',
      btnname:btnText
    },
    {
        img: require('./img/barcelona.png'),
        cityname: 'Barcelona',
        btnname:btnText
    },
    {
        img: require('./img/istanbul.png'),
        cityname: 'Istanbul',
        btnname:btnText
    },
    {
        img: require('./img/rome.png'),
        cityname: 'Rome',
        btnname:btnText
    },
    {
        img: require('./img/mexico-city.png'),
        cityname: 'Mexico City',
        btnname:btnText
    },
    {
        img: require('./img/curitiba.png'),
        cityname: 'Curitiba',
        btnname:btnText
    }
  ]

//Office component
const DocOffice = (props) => 
<div class="city">
    <img src={props.office.img}/>
        <div class="btn-city">
            <h4>{props.office.cityname}</h4>
            <button>{props.office.btnname}</button>
        </div>
</div>

//List of Office component
function DocOffices(props){
    return props.officeList.map((currentOffice, i) =>
        <div key={i}>
          <DocOffice office={currentOffice}/>
        </div>
      )
    }

    function Office() {
        return (
          <div className="offices">
            <h1>Improve the lives of millions. <br/>Change yours forever</h1>
            <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>          
             <div className="cities">
              <DocOffices officeList={theOffices}/>
              </div>
            </div>
        );
      }
      
      export default Office;
