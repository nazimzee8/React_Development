import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from "react";

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
  const listRef = useRef(null);
  function scrollHandler(index) {
    const listNode = listRef.current;
    const sectionNode = listNode.querySelectorAll('li > Element')[index];
    sectionNode.scrollIntoView({behavior: 'smooth', block:'nearest', inline: 'center'});
  }
  function queryHandler(listRef) {
    <ul ref={listRef}>
      <li><AboutPage/></li>
      <li><PurposePage/></li>
      <li><TipsPage/></li>
      <li><SkillsPage/></li>
      <li><ContactsPage/></li>
    </ul>
  }
  return (
    <div class="menu">
      <nav>
        <About onClick= {() => scrollHandler(0)} id="about_page"/> /
        <Purpose onClick= {() => scrollHandler(1)} id="purpose_page"/> /
        <Tips onClick = {() => scrollHandler(2)} id="tips_page"/> /
        <Skills onClick = {() => scrollHandler(3)} id="skills_page"/> /
        <Contact onClick = {() => scrollHandler(4)}id="contacts_page"/> 
      </nav>
      <script type="text/javascript">{queryHandler(listRef)}</script>
    </div>
  )
}

function clickHandler(props) {
  const element = document.getElementById(props.id);
  element.scrollIntoView({ behavior: "smooth"});
}

const currDate = () => {
  let today = new Date();
  const day = today.getDate();
  const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  const month = months[today.getMonth()];
	const year = today.getFullYear();
return month + " " + day + ", " + year;
}

function Header(props) {
  return (
    <div class="header">
      <img src="https://www.thoughtco.com/thmb/aS6zMjpwJyEsyMUBRLAq7cNkENE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/warning--data-transfer-in-progress-507065943-59c6d2a70d327a001141794d-5bb792f246e0fb0051a88f9c.jpg"/>
      <div class="caption">{currDate()}</div>
      <div class="intro">My Everchanging Portfolio</div>
      <div class="career_objective">
        <button> Read More </button>
      </div>
    </div>
  )
}

function Middle1() {
  return (
    <div class="middle1">
      <div class="skills_caption">
        <h2>Hard Skills; Programming Languages</h2>
        <h1>Cultivating Skills from University of Washington and Self-Learning</h1>
        <h2> {currDate()} | By Nazim Zerrouki </h2>
        <img src="https://th.bing.com/th/id/OIP.yTTXFy8v6rxWZa5_UrH2zgHaEu?rs=1&pid=ImgDetMain"/>
      </div>
      <div class="about_caption">
        <h2>Learn More | Nazim Zerrouki</h2>
        <img src="https://th.bing.com/th/id/OIP.c4PlYExpbBZ_LezJEczzFAHaDt?rs=1&pid=ImgDetMain"/>
      </div>
      <div class="tips_caption">
        <h2> Learn About What It Takes | Nazim Zerrouki </h2>
        <img src="https://thumbs.dreamstime.com/b/question-mark-6906191.jpg"/>
      </div>
      <div class="purpose_caption">
        <h2> The Objective | Nazim Zerrouki </h2>
        <img src="https://www.goalcast.com/wp-content/uploads/2017/05/purpose.jpg"/>
      </div>
    </div>
  )
}

function Home(props) {
  return (
  <div class="home"> <a>Home</a></div>
  )
}

function About(props) {
  return (
    <div class="about"><a>About</a></div>
  )
}

function Purpose(props) {
  return (
    <div class="purpose"><a>Purpose</a></div>
  )
}

function Tips(props) {
  return (
    <div class="tips"><a>Tips</a></div>
  )
}

function Skills(props) {
  return (
    <div class="skills"><a>Skills</a></div>
  )
}

function Contact(props) {
  return (
    <div class="contact"><a>Contact</a></div>
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

const PurposePage = () => {
  return (
    <div class="purpose_page" id="purpose_page">
      <h2>Purpose</h2>
      <h3> I enjoyed my time developing multiple skills </h3>
    </div>
  )
}

const AboutPage = () => {
  return (
    <div class="about_page" id="about_page"> 
      <h2> About Me </h2>
      <h3> I am a recent graduate who successfully completed the graduate program for Computer Science & Systems
      at University of Washington, Tacoma. I am an aspiring software developer ready to enter the industry 
      with a passion for developing new skills, working with big companies, and with the zeal to change the world.
      I am a very easy-going person who is very easy to communicate and collaborate with. On my spare time, I enjoy 
      learning new programming languages and frameworks to work on personal projects such as this, working out for 
      physical health and mental clarity, playing Chess, and playing video games from time to time. 
      <br/>
      <br/>
      For more information and inquiries, please contact me using my "contacts".
      </h3>
    </div>
  )
}

const SkillsPage = () => {
  return (
    <div class="skills_page" id="skills_page"></div>
  )
}

const TipsPage = () => {
  return (
    <div class="tips_page" id="tips_page"></div>
  )
}

const ContactsPage = () => {
  return (
    <div class="contacts_page" id="contacts_page"></div>
  )
}

function Content() {
  return (
    <div class="content">
      <AboutPage/>
      <PurposePage/>
      <SkillsPage/>
      <TipsPage/>
      <ContactsPage/>
    </div>
  )
}

function Main() {
  return (
    <div class="main"> 
      <Bar />
      <hr class="top"/>
      <Title name="Nazim"/>
      <Menu />
      <Header id="purpose_page"/>
      <Middle1 />
      <Content />
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
