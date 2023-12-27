import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";

function Bar() {
  return (
    <div class="bar"><Socials />
    </div>
  )
}

function Title(props) {
  return (
    <div class="title">{props.name}'s Blog</div>
  )
}

const LinkedIn = (props) => {
  return (
    <div class="linkedin">
      <img src="https://th.bing.com/th/id/OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa?rs=1&pid=ImgDetMain" 
      onClick={() => window.location.replace(props.link)}/>
    </div>
  )
}

const FaceBook = (props) => {
  return (
    <div class="facebook">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
      onClick={() => window.location.href = props.link}/>
    </div>
  )
}

const Twitter = (props) => {
  return (
    <div class="twitter">
      <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
      onClick={() => window.location.href = props.link}/>
    </div>
  )
}

const GitHub = (props) => {
  return (
    <div class="github">
      <img src="https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg"
      onClick={() => window.location.href = props.link}/>
    </div>
  )
}

function Socials() {
  return (
    <div class="socials"> 
        <LinkedIn link="https://linkedin.com/in/nazim-zerrouki-1966a51b7"/>
        <FaceBook link="https://www.facebook.com/nazerrouki/"/>
        <Twitter link="https://twitter.com/NaZerrouki"/>
        <GitHub link="https://github.com/nazimzee8"/>
    </div>
  )
}

function Menu() {
  return (
    <div class="menu">
      <Home /> /
      <About /> /
      <Purpose /> /
      <Tips /> /
      <Skills /> /
      <Contact /> 
    </div>
  )
}

const currDate = () => {
  let today = new Date();
  const day = today.getDate();
  const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  const month = months[today.getMonth()];
	const year = today.getFullYear();
return month + " " + day + ", " + year;
}

function Header() {
  return (
    <div class="header">
      <img src="https://www.thoughtco.com/thmb/aS6zMjpwJyEsyMUBRLAq7cNkENE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/warning--data-transfer-in-progress-507065943-59c6d2a70d327a001141794d-5bb792f246e0fb0051a88f9c.jpg"/>
      <div class="caption">{currDate()}</div>
    </div>
  )
}

function Home() {
  return (
  <div class="home">Home</div>
  )
}

function About() {
  return (
    <div class="about">About</div>
  )
}

function Purpose() {
  return (
    <div class="purpose">Purpose</div>
  )
}

function Tips() {
  return (
    <div class="tips">Tips</div>
  )
}

function Skills() {
  return (
    <div class="skills">Skills</div>
  )
}

function Contact() {
  return (
    <div class="contact">Contact</div>
  )
}

function LeftBorder() {
  return (
    <div class="leftBorder"></div>
  )
}

function RightBorder() {
  return (
    <div class="rightBorder"></div>
  )
}

function Main() {
  return (
    <div class="main"> 
      <Bar />
      <hr class="top"/>
      <Title name="Nazim"/>
      <Menu />
      <Header />
       <div class="body"></div>
    </div>
  ) 
}

function App() {
  return (
    <div className="App">
      <LeftBorder/>
      <Main />
      <RightBorder/>
    </div>
  );
}

export default App;
