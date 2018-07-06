import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

class App extends Component {
  render() {
    return (
              <div className = "wrapper">
                <SayFullName name = "Kate" surname = "Smolyar" link = "https://vk.com/smolyar_k" />
                <SayFullName name = "Marina" surname = "Sadakova" link = "https://vk.com/marsadakove" />
                <SayFullName name = "Ivan" surname = "Fomochkin" link = "https://vk.com/iwanteat0405" />
              </div>     
    );
  }
} 


function SayFullName (props) {
  return (
      <div>
      <h1> Моё имя {props.name}, фамилия - {props.surname} </h1>
      <a href = {props.link}> Ссылка на мой профиль </a>
      </div>  
    )
}


export default App;
