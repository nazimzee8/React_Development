import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from "react";

function Bar() {
  return (
    <div class="bar">
      <Socials />
      <Referral />
    </div>
  )
}

function Title(props) {
  return (
    <div class="title">{props.name}'s Portfolio</div>
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
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      onClick={() => window.location.href = props.link}/>
    </div>
  )
}

const Referral = () => {
  return (
    <div class="referral"> 
      <a> Contact Me </a>
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
      <li><SkillsPage/></li>
      <li><PurposePage/></li>
      <li><TipsPage/></li>
      <li><ContactsPage/></li>
    </ul>
  }
  return (
    <div class="menu">
      <nav>
        <a onClick= {() => scrollHandler(0)} id="about_page"/> About /
        <a onClick= {() => scrollHandler(1)} id="skills_page"/> Skills /
        <a onClick = {() => scrollHandler(2)} id="purpose_page"/> Purpose /
        <a onClick = {() => scrollHandler(3)} id="tips_page"/> Tips /
        <a onClick = {() => scrollHandler(4)}id="contacts_page"/> Contacts
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
      <div class="intro">Nazim's Graduate Portfolio</div>
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

/*function Home(props) {
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
}*/

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
      <br/>
      <h3> <p>I enjoyed my time developing multiple programming skills at Univerisity of Washington, Tacoma.
        However, there were also numerous difficulties that I had to overcome; some of which left me questioning
        if I was ever going to graduate and succeed. This feeling of doubt and unieasiness was something that he begun 
        during my first year at University of Washington which had persisted during the time I was enrolled in their
        Computer Science program. My first programming course was an introduction to programming where I first learned 
        how to program in python. There were some students that also struggled but many others who grasped these concepts
        relatively quickly whereas for me, it felt like a foreign language; incomprehensible. </p>

        <p>I was typically an A student who made it to the Deans' list within the majority of my academic career and yet 
        I scored one of the lowest grades I had ever received in a class, a 3.0. Towards the end of the class, I was actually
        relieved that it was finally over. None of the material that was discussed in the class made any sense to me.
        Creating my own for loops to solve a problem without hardcoding it was perplexing to me, I didn't even remotely understand
        how to parse through a file, and I didn't understand how to construdct my own functions to effectively solve a problem
        in respect to different parameters.</p>

        <p>While I didn't understand it at the time, programming is very similar to math; not in the sense of rationalizing
        complex problems using a set of rules. It's all about comparmentalizing a problem and interpreting each piece in a way
        that is understandable to you via pseudocode. This is often done by thinking simplistically about what needs to be done before
        translating it into code.</p>

        <p>This wasn't the only time I struggled. My last year at University of Washington was especially a difficult one where
        I worked in a group on a big project that was especially difficult to work with. There are things that I had learned
        throughout my academic career to help me succeed throughout my undergraduate and graduate ventures at University of Washington.</p>
        </h3>
    </div>
  )
}

const AboutPage = (props) => {
  return (
    <div class="about_page" id="about_page"> 
      <h2> About Me </h2>
      <br/>
      <div class="about_img">
        <img src="https://i.imgur.com/FpV5ylC.jpg?1" alt="Profile pic"/>
      </div>
      <div class="about_section">
        <h3> I am a recent graduate who successfully completed the graduate program for Computer Science & Systems
        at University of Washington, Tacoma. I am an aspiring software developer ready to enter the industry 
        with a passion for developing new skills, working with big companies, and with the zeal to change the world.
        I am a very easy-going person who is very easy to communicate and collaborate with. On my spare time, I enjoy 
        learning new programming languages and frameworks to work on personal projects such as this, working out for 
        physical health and mental clarity, playing Chess, and playing video games from time to time. 
        <br/>
        <br/>

        Education:

        <ul>
          <li>University of Washington, Tacoma. Bachelors' of Science in Computer Science and Systems, Sept 2016-June 2020.</li>
          <li>University of Washington, Tacoma. Masters' of Science in Computer Science and Systems, Sept 2020-Mar 2023.</li>
        </ul>

        <br/>
        <br/>
        For more information and inquiries, please get in touch with me. &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => (window.location.replace(props.link))}>Contact Me</button>
        </h3>
      </div>
    </div>
  )
}

/*const SkillsPage = () => {
  return (
    <div class="skills_page" id="skills_page">
      <h2>Skills</h2>
      <br/>
      <h3>
        <ul>
          <li>Object Oriented Programming (Java, JavaScript, Python)</li>
          <li>Algorithms (Dynammic Programming & Recursion) </li>
          <li>Machine Learning (Model-Free, Model-Based, Deep Learning)</li>
          <li>Data Science</li>
          <li>Web Programming (HTML, CSS, Node.js, React)</li>
          <li>Database Design (SQL, Oracle) </li>
          <li>Full Stack Development (HTML, CSS, Node.js, PHP, React) </li>

        </ul>
      </h3>
    </div>
  )
}*/

const SkillsPage = () => {
  return (
    <div class="skills_page" id="skills_page">
      <h2>Skills</h2>
      <br/>
      <div class="skills_section">

        <div class="hard_skills">
          <div class="h_block">Hard Skills</div>
        </div>

        <div class="soft_skills">
          <div class="s_block">Soft Skills</div>
        </div>
      </div>
    </div>
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
      <AboutPage link="https://linkedin.com/in/nazim-zerrouki-1966a51b7"/>
      <SkillsPage/>
      <PurposePage/>
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
      <br />
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
