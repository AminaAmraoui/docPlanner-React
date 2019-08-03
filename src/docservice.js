import React from 'react';
import './docservice.css';

//data
const theServices = [
    {
        title: 'For patients',
        desc: 'Find a doctor, book a visit and solve any health-related doubt',
        img:require('./img/service1.png'), //to use local images
        color:'#00ccb1',
        content:<select class="select-countries">
                    <option>Choose country</option>
                    <option value="#">Argentina</option>
                    <option value="#">Australia</option>
                    <option value="#">Brazil</option>
                    <option value="#">Chile</option>
                </select>
    },
    {
        title: 'For doctors',
        desc: 'Find a doctor, book a visit and solve any health-related doubt',
        img:require('./img/service2.png'), //to use local images
        color:'#3d83df'
    }
  ]

//service component
const DocService = (props) =>
<div className="service" style={{backgroundColor: props.service.color}}>
    <h2>{props.service.title}</h2>
    <h1>{props.service.desc}</h1>
    <div className="service-container">
        {props.service.content ? props.service.content:''}
        <img src={props.service.img} className="img-service"/>
    </div>
</div>

//List of service component
function DocServices(props){
    return props.serviceList.map((currentService, i) =>
        <div key={i}>
          <DocService service={currentService}/>
        </div>
      )
    }

function Service() {
        return (
          <div className="services">
            <DocServices serviceList={theServices}/>
          </div>
        );
      }
      
export default Service;
      