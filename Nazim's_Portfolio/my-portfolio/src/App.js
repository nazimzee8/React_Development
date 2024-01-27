import './App.css';
import React from 'react';
import {useRef } from "react";

function Bar() {
  return (
    <div class="bar" id="page">
      <div class="section">
        <Socials />
        <Referral />
      </div>
    </div>
  )
}

function Title(props) {
  return (
    <div class="title">{props.name}'s Portfolio </div>
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
  const pageRef = useRef(null);
  function scrollToIndex(index) {
    const pageNodes = document.querySelectorAll("#page > div.section");
    pageRef.current = pageNodes[index];
    pageRef.current.scrollIntoView({behavior: 'instant', block: 'start'});
  }
  return (
    <div class="menu">
      <nav>
        <a onClick= {() => scrollToIndex(1)} id="about_page"> &ensp; &ensp; About</a> /
        <a onClick= {() => scrollToIndex(2)} id="skills_page"> Skills</a> /
        <a onClick = {() => scrollToIndex(3)} id="purpose_page"> Purpose</a> /
        <a onClick = {() => scrollToIndex(4)} id="tips_page"> Tips</a> /
        <a onClick = {() => scrollToIndex(5)}id="contacts_page"> Contacts &ensp; &ensp;</a>
      </nav>
    </div>
  )
}

function clickHandler(name) {
  const element = document.getElementsByClassName(name)[0];
  element.scrollIntoView({behavior: 'instant', block: 'center'});
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
        <button onClick={() => clickHandler(props.name)}> Read More </button>
      </div>
    </div>
  )
}

function Middle1() {
  const pageRef = useRef(null);
  function scrollToIndex(index) {
    const pageNodes = document.querySelectorAll("#page > div.section");
    pageRef.current = pageNodes[index];
    pageRef.current.scrollIntoView({behavior: 'instant', block: 'start'});
  }
  return (
    <div class="middle1">
      <div class="skills_caption">
        <h2>Hard Skills; Programming Languages</h2>
        <h1>Cultivating Skills from University of Washington and Self-Learning</h1>
        <h2> {currDate()} | By Nazim Zerrouki </h2>
        <img src="https://th.bing.com/th/id/OIP.yTTXFy8v6rxWZa5_UrH2zgHaEu?rs=1&pid=ImgDetMain" 
        onClick={() => scrollToIndex(2)}/>
      </div>
      <div class="about_caption">
        <h2>Learn More | Nazim Zerrouki</h2>
        <img src="https://th.bing.com/th/id/OIP.c4PlYExpbBZ_LezJEczzFAHaDt?rs=1&pid=ImgDetMain"
        onClick={() => scrollToIndex(1)}/>
      </div>
      <div class="tips_caption">
        <h2> Learn About What It Takes | Nazim Zerrouki </h2>
        <img src="https://thumbs.dreamstime.com/b/question-mark-6906191.jpg"
        onClick={() => scrollToIndex(4)}/>
      </div>
      <div class="purpose_caption">
        <h2> The Objective | Nazim Zerrouki </h2>
        <img src="https://www.goalcast.com/wp-content/uploads/2017/05/purpose.jpg"
        onClick={() => scrollToIndex(3)}/>
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
    <div class="purpose_page" id="page">
      <div class="section" id="purpose_section">
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
    </div>
  )
}

const AboutPage = (props) => {
  return (
    <div class="about_page" id="page"> 
      <div class="section">
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
    </div>
  )
}

const SkillsPage = () => {
  return (
    <div class="skills_page" id="page">
      <h2>Skills</h2>
      <br/>
      <div class="section" id="skills_section">
        <div class="hard_skills">
          <h3>Hard Skills</h3>
          <img src="https://static.vecteezy.com/system/resources/previews/014/541/527/original/administrator-system-icon-simple-style-vector.jpg"></img>
          <div class="hskill_container">
          <h4>Specific skills, competencies, knowledge, and abilities of programming languages, frameworks,
              and APIs that can be leveraged for developing software applications. </h4>
          </div>
          <div class="hard_skills_section">
            <h4 style={{fontWeight: "bold"}}> Hard Skills:</h4>
            <h4>
              <ul>
                <li>Object Oriented Programming (Java, Python, JavaScript, C)</li>
                <li>Algorithms (Dynammic Programming, Recursion) </li>
                <li>Database Design (Relational Databases, SQL, OracleDB, Microsoft Azure)</li>
                <li>Web Development (HTML/CSS, JavaScript, Node.js, Reactjs)</li>
                <li>Machine Learning (Neural Networks, Model-based, Model-free)</li>
                <li>Web Services (Node-red, Rest API (Java), Flask (Python))</li>
                <li>Data Science</li>
                <li>Full-Stack Development (HTML/CSS, JavaScript, Node.js, Reactjs, PHP) </li>
                <li>Artificial Intelligence</li>
                <li>Cloud Computing (GCP, AWS, Azure)</li>
                <li>Mobile App Development (Java)</li>
              </ul>
            </h4>
          </div>
        </div>

        <div class="soft_skills">
          <h3>Soft Skills</h3>
          <img src="https://i.pinimg.com/736x/d7/1b/70/d71b703a681d8674bec810570ab1809a.jpg"></img>
          <div class="sskill_container">
            <h4>Personality traits, behaviors, interpersonal skills, and social competencies that can be 
              used while managing tasks and interacting with others when developing projects.</h4>
          </div>
          <div class="soft_skills_section">
            <h4 style={{fontWeight: "bold"}}> Soft Skills:</h4>
            <h4>
              <ul>
                <li>Communication</li>
                <li>Collaboration</li>
                <li>Teamwork</li>
                <li>Research</li>
                <li>Friendliness</li>
                <li>Adaptability</li>
                <li>Prioritization</li>
                <li>Time Management</li>
                <li>Problem Solver</li>
                <li>Flexible</li>
                <li>Self-Motivated</li>
                <li>Leadership Skills</li>
              </ul>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

const TipsPage = () => {
  return (
    <div class="tips_page" id="page">
      <h2>Tips & Strategies</h2>
      <div class="section" id="tips_section">
        <img class="collab" src="https://nazimz99.github.io/UW-CS_Experience/img/teamwork.png"/>
        <ul>
          <li>
            <h3><u>Collaborate with others.</u>&ensp;
              Forming tight-knit groups using various different channels such as Zoom and Discord is an excellent way to gain additional support and learn from others. 
              This varies across schools, but as long as the work that is produced is your own, any collaborative work is welcome. 
              Through my experience, I found that collaboration has had a profound impact on the work that I produced. 
              It will also better prepare you for the real world.</h3>
          </li>
          <li>
            <h3><u>Don't take notes.</u> &ensp; It's more important to pay attention to the concepts that are taught in class rather than mindlessly writing everything down. Professors will typically record their lectures, so that crucial explanations can be revisited at your own leisure. 
            Paying attention to distinct words can help you uncover things that written notes couldn't.</h3>
          </li>
          <img class="break" src="https://nazimz99.github.io/UW-CS_Experience/img/break.png"/>
          <li>
            <h3><u>Break a problem into pieces.</u> &ensp; Compartmentalize. Understand what is required for the problem and think about what classes, interfaces, and functions are needed to accomplish the task. 
            If you need a data structure to return the game state of a board, write a function for it. 
            If you need to update the board, write a function for it. 
            This way, when you understand what needs to be done, you can simply call that function and focus your time on the next task. 
            This also makes it easier to focus and not be overwhelmed.</h3>
          </li>
          <li>
            <h3><u>Learn to be resourceful.</u> &ensp;  
            Collaboration is crucial, but one of the most important things I learned is that Google is your best friend. 
            In Computer Security, I was required to complete a variety of esoteric labs found on Seed Labs and the most important thing was not whether or not I understood Cybersecurity. 
            It's the fact that I was willing to learn and was willing to continue searching through the Web until I found the information that I needed. 
            This also enabled me to create a web page and connect it to an advanced relational database with the help of a partner despite having no prior experience.
            That can be located on my <a style = {{cursor: "pointer", textDecorationColor: "pink"}} href="https://github.com/nazimzee8">github</a>.</h3>
          </li>
          <img class="diagram" src="https://nazimz99.github.io/UW-CS_Experience/img/General-Tree-Structure.png"/>
          <li>
            <h3><u>Use visuals to help.</u> &ensp; 
            Creating visual diagrams is very useful for analyzing how a data structure works or discerning a pattern in an algorithm.</h3>
          </li>
          <li><h3><u>Use inductive reasoning. </u> &ensp; 
          Learning how to make generalizations by analyzing a sub-problem and 
          applying it to the entire problem as a whole 
          is very useful in simplifying and envisioning a problem. 
          Don't focus on the entire problem, create a sub-problem that is manageable.</h3></li>
        </ul>
      </div>
    </div>
  )
}

const ContactsPage = () => {
  return (
    <div class="contacts_page" id="page">
      <h4> Get Connected </h4>
      <h2>Contact Me</h2>
      <div class="section" id="contacts_section">
        <div class="email">
          <img src="https://th.bing.com/th/id/OIP.Z2lotQUlRFaoqY7m3Ma89QHaHa?rs=1&pid=ImgDetMain"></img>
          <a href = "mailto:nazerrouki@gmail.com"><h3>nazerrouki@gmail.com</h3></a>
        </div>
        <div class="linkedin">
          <img src="https://www.xenneotech.com/images/linked-in.png"></img>
          <a href = "https://www.linkedin.com/in/nazim-zerrouki-1966a51b7"><h3>LinkedIn</h3></a></div>
      </div>
    </div>
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
      <hr class="divider"/>
      <Title name="Nazim"/>
      <Menu />
      <Header name="about_page"/>
      <Middle1 />
      <br />
      <Content />
      <Footer />
    </div>
  ) 
}

function Footer() {
  const pageRef = useRef(null);
  function scrollToIndex(index) {
    const pageNodes = document.querySelectorAll("#page > div.section");
    pageRef.current = pageNodes[index];
    pageRef.current.scrollIntoView({behavior: 'instant', block: 'start'});
  }
  return (
    <footer class="footer">
      <div class="footer_container">
        <div class="footer_image">
          <img src="https://logodix.com/logo/564987.png"></img>
        </div>
        <div class="footer_section">
          <div class="footer_links">
            <nav>
              <a onClick={() => scrollToIndex(0)}>Home</a>
              <a onClick={() =>scrollToIndex(1)}>About</a>
              <a onClick={() =>scrollToIndex(2)}>Skills</a>
              <a onClick={() =>scrollToIndex(3)}>Purpose</a>
              <a onClick={() =>scrollToIndex(4)}>Tips</a>
              <a onClick={() =>scrollToIndex(5)}>Contact</a>
            </nav>
          </div>
          <div class="footer_logos">
            <Socials/>
          </div>
        </div>
        <div class="copyright">
          <h1>2024 Nazim Zerrouki | All Rights Reserved</h1>
        </div>
      </div>
    </footer>
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
