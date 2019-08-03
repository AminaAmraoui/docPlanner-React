import React from 'react';
import logo from './logo.svg';
import './navmenu.css';
import { blockStatement } from '@babel/types';
//data
const nestedFirstLink = [
    {
      text: 'Makrketing & PR',
      link: '#',
      isActive: false
    },
    {
      text: 'Customer success & sales',
      link: '#',
      isActive: false
    },
    {
      text: 'IT, Product, Design & UX',
      link: '#',
      isActive: false
    },
    {
        text: 'Finance & Administration',
        link: '#',
        isActive: false
    },
    {
        text: 'HR & more',
        link: '#',
        isActive: false
    }
  ]
  
  const theLinks = [
    {
      text: 'About us',
      link: '#',
      isActive: true
    },
    {
      text: 'Career',
      link: '#',
      isActive: false
    },
    {
      text: 'Departments',
      link: '#',
      isActive: false,
      nestedList: nestedFirstLink
    }
  ]
  
  
  //Item li component
  const Item = (props) => 
        <li className ={props.item.nestedList ? 'nested':''}>
          <a href={props.item.link} 
             style={{color: props.item.isActive ? '#00b39b' : ''}}
             
          >            
          {props.item.text}
          </a>
  
          {props.item.nestedList ? <List content={props.item.nestedList} nameofclass="drop-list" /> : ''}
          
        </li>
  
  
  //List of the component : list of li
  function ListItems(props){
    return (
      props.itemList.map((currentItem, i) =>
        
          <Item item={currentItem} key={i}/>
       
      )
  )
  }
  
  // ul component
  const List = (props) =>
        <ul className={props.nameofclass}>
        <ListItems itemList={props.content}/>
        </ul>
  
  
  
  function NavMenu() {
    return (
      
        <List content={theLinks} nameofclass="menu-container"/>
     
    );
  }
  
  export default NavMenu;
  