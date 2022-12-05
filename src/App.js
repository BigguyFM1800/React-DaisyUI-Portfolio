import { GrLinkedin, GrGithub, GrMenu } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import assets from "./assets/react-homepage-screenshot.png";
import './App.css';
import { FaHtml5,FaReact,FaAngular,FaNodeJs,FaGitAlt,FaFigma } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io"
import { SiJavascript,SiPostgresql,SiPostman,SiTailwindcss } from "react-icons/si"
import { BsBootstrapFill } from "react-icons/bs";
import { AiFillGitlab } from "react-icons/ai";
import fhatuPic from './assets/photo2.jpg';
import fhatuCV from './assets/Fhatuwani_Martin_Raphalalani_CV.pdf';
import fhatuFB from './assets/fhatuFB.jpeg';

const toggleMenu = () => {
  let menu = document.getElementById("menuCheck");
  let drawer = document.getElementById("navigate");
  if(menu.checked){
    drawer.style.width = 0;
  }else{
    drawer.style.width = '13rem';
  }
};

const handleClickScroll = (value) => {
  const element = document.getElementById(value);
  console.log(value);
  if(element){
    element.scrollIntoView({behavior: 'smooth' });
  }
}

function App() {
  

  return (
    <>
 
   <div class="navbar bg-base-200">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-2xl font-bold" onClick={() => handleClickScroll('home')}>Fhatuwani.</a>
  </div>
  <div class="flex-none">

    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src={fhatuFB} />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between" onClick={() => handleClickScroll('home')}>
            Home
            <span class="badge" tabindex="1">New</span>
          </a>
        </li>
        <li><a onClick={() => handleClickScroll('about')}>About</a></li>
        <li><a onClick={() => handleClickScroll('skills')}>Skills</a></li>
        <li><a onClick={() => handleClickScroll('portfolio')}>Portfolio</a></li>
        <li><a onClick={() => handleClickScroll('contact')}>Contact</a></li>
      </ul>
    </div>
  </div>

</div>

   <section className="hero" id="home">

      <div className="hero min-h-screen heroDiv" >
      <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl">Hello There!</h1>
                  <p className="mb-5">I am Fhatuwani Raphalalani.</p>
                  <p className="mb-5">Full Stack Software Developer</p>
                  <button className="btn btn-primary" onClick={() => handleClickScroll('portfolio')}>Explore More</button>
                </div>
              </div>
      </div>

   </section>

   <section className="w-full glass p-4 aboutDiv" id="about">

      <div className="card lg:card-side bg-gray-200 shadow-2xl flex lg:flex-column p-2 w-fit rounded-lg aboutCard">
        <img src={fhatuPic} alt="Album" className="w-1/3 h-1/3 p-1 rounded-lg aboutImg"/>
        <div className="card-body p-4 h-auto ">
          <h2 className="card-title text-center p-5 text-4xl font-bold">A Bit About Me.</h2>
          <p className="font-bold"> I am a full stack software developer with 1 year of working experience in fields like frontend, backend, databases and APIs. I combine my interpersonal skills with technical skills and fully commit to consistency in meeting deadlines. I utilize all available resources and learn new technologies to achieve results. I enjoy creating beautiful, accessible, and responsive websites using HTML, CSS, Bootstrap, Angular, SCSS, Vanilla JavaScript, and React. Effective use of time, problem-solving and communication skills help me show a positive attitude in complex situations. I have passion for learning and my desire to learn quickly adapts me to changing situations.</p>
          <div>
            
          <div className="flex flex-col w-full lg:flex-row gap-2 mt-3">

                <div className="grid flex-grow h-80 card  rounded-lg place-items-center aboutInfoCards">
                    <h3 className="card-title text-center p-3 text-4xl font-black">Current Position.</h3>
                    <ul className="text-center text-2xl text-white">
                        <li>The Digital Academy</li>
                        <li>Full Stack Software Developer</li>
                        <li>Started June 2022</li>
                        <li>Auckland Park, Gauteng</li>
                    </ul>  
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow h-80 card bg-gray-200 rounded-lg place-items-center aboutInfoCards">
                <h3 className="card-title text-center p-2 text-4xl font-black">Education.</h3>
                    <ul className="text-center text-2xl text-white">
                        <li>University of Limpopo</li>
                        <li>BSc Mathematical Sciences</li>
                        <li>Graduated 2020</li>
                        <li>Polokwane, Limpopo</li>
                    </ul>  
                </div>
          </div>
            
          </div>
          <div className="card-actions mt-2 flex bg-green-200 w-fit align-end rounded-lg downloadBtn relative bottom-0 left-0">
            <a href={fhatuCV} download="Fhatuwani-Raphalalani" className="btn bg-green-800 w-fit bg-lg text-white rounded p-2">
              Download CV
            </a>
          </div>
        </div>
      </div>

   </section>

   <section className="w-full glass p-4 skillsDiv" id="skills">

      <h2 className="text-center p-2 text-4xl font-bold">What I Am Great At.</h2>
      <p className="text-center text-2xl p-4 font-bold">Here are the skills i have aquired while working on different projects.</p>

      <div className="flex flex-col w-full lg:flex-row p-4 text-3xl text-white gap-4">
          <div className="grid flex-grow h-64 card bg-purple-300 rounded-box place-items-center gap-28 rounded-2xl aboutCards">
            <ul>
              <li className="flex flex-row justify-start gap-6"><FaHtml5 style={{fill: "#E65100"}}/> <span>HTML5</span></li>
              <li className="flex flex-row justify-start gap-6"><BsBootstrapFill style={{fill: "#673AB7"}}/> <span>Bootstrap</span></li>
              <li className="flex flex-row justify-start gap-6"><IoLogoCss3 style={{fill: "#0277BD"}}/> <span>CSS3</span></li>
              <li className="flex flex-row justify-start gap-6"><SiTailwindcss style={{fill: "#00ACC1"}}/> <span>Tailwind CSS</span></li>
              <li className="flex flex-row justify-start gap-6"><SiJavascript style={{fill: "#FFD600"}}/> <span>JavaScript ES6+</span></li>
              <li className="flex flex-row justify-start gap-6"><FaReact style={{fill: "#80DEEA"}}/> <span>React.js</span></li>
            </ul>
          </div> 
          <div className="divider lg:divider-horizontal"></div> 
          <div className="grid flex-grow h-64 card bg-purple-300 rounded-box place-items-center gap-28 rounded-2xl aboutCards">
            <ul>
              <li className="flex flex-row justify-start gap-6"><FaAngular style={{fill: "#DD2C00"}}/> <span>Angular</span></li>
              <li className="flex flex-row justify-start gap-6"><FaNodeJs style={{fill: "#388E3C"}}/> <span>Node.js</span></li>
              <li className="flex flex-row justify-start gap-6"><SiPostgresql style={{fill: "#0277BD"}}/> <span>Postgresql</span></li>
              <li className="flex flex-row justify-start gap-6"><SiPostman style={{fill: "#f76836"}}/> <span>Postman</span></li> 
              <li className="flex flex-row justify-start gap-6"><FaGitAlt style={{fill: "#F4511E"}}/> <span>Git</span></li>
              <li className="flex flex-row justify-start gap-6"><FaFigma style={{fill: "#E64A19"}}/> <span>Figma</span></li>
            </ul>
          </div>
      </div>
      
   </section>

   <section className="projectDiv w-full glass p-4" id="portfolio">

      <h2 className="text-center p-2 text-4xl font-bold">Portfolio.</h2>
      <p className="text-center text-2xl p-4 font-bold">My Masterpiece Collection.</p>

      <div className="card card-compact w-full bg-base-100 shadow-xl projectCard mx-auto">
         
          <figure><img src={assets} alt="React portfolio" /></figure>
          <div className="card-body">
            <h2 className="card-title p-2 text-2xl">ReactJS Portfolio Website</h2>
            <p className="p-2 text-xl">Responsive portfolio website showcasing my skills and projects i have worked in. Built using reactjs, tailwind css.</p>
            <div className="card-actions justify-end">
              <a href="https://react-portfolio-online.vercel.app/" className="btn bg-lg bg-green-800 rounded p-2">Live Demo</a>
            </div>
          </div>

      </div>

   </section >

   <div className="contactDiv w-full glass p-4" id="contact">

          <h2 className="text-center p-5 text-4xl font-bold">Let's Talk.</h2>
          <p className="text-center text-2xl font-bold">Get in touch via the form below, or emailing fm.raphalalani29@gmail.</p>
     
          <form className="contactform text-xl text-white" action="https://formsubmit.co/fm.raphalalani29@gmail.com" method="POST">

            <div className="form-control w-full max-w-full flex flex-column flex-wrap gap-2 mt-4">
                <label className="label">
                  <span className="label-text font-bold">Name:</span>
                </label>
                <input type="text" placeholder="Enter your name" name="name" className="input input-md input-bordered bg-gray-200 w-full max-w-full rounded-lg p-2" />
            </div>
            <div className="form-control w-full max-w-full flex flex-column flex-wrap gap-2 mt-4">
                <label className="label">
                  <span className="label-text font-bold">Surname:</span>
                </label>
                <input type="text" placeholder="Enter your surname" name="surname" className="input input-bordered input-md  bg-gray-200 w-full max-w-full rounded-lg p-2" />
            </div>
            <div className="form-control w-full max-w-full flex flex-column flex-wrap gap-2 mt-4">
                <label className="label">
                  <span className="label-text font-bold">Email Address:</span>
                </label>
                <input type="text" placeholder="Enter your email address" name="email" className="input input-md input-bordered w-full bg-gray-200 max-w-full rounded-lg p-2" />
                <input type="hidden" name="_subject" value="DaisyUI React Portfolio Message"></input>
            </div>
            <div className="form-control w-full max-w-full flex flex-column flex-wrap gap-2 mt-4">
                <label className="label w-full">
                  <span className="label-text font-bold">Message:</span>
                </label>
                <textarea className="textarea textarea-bordered textarea-md h-24 w-full rounded-lg  bg-gray-200 p-2" name="message" placeholder="Enter your message"></textarea>
            </div>
            <button className="btn p-2 bg-lg bg-green-800 rounded mt-4 font-bold" type="submit">Send Message</button>

          </form>

      
  </div>

   <footer className="footer footer-center p-8 bg-base-200 font-bold text-base-content rounded">
      
      <div>
        <div className="flex flex-row justify-center gap-x-4 text-xl">

          <a href="https://www.linkedin.com/in/fhatuwani-raphalalani-51bb98172/"><GrLinkedin style={{fill: "#fff"}}/></a>
          <a href="https://github.com/BigguyFM170/"><GrGithub style={{fill: "#fff"}}/></a>
          <a href="https://gitlab.com/BigguyFM170"><AiFillGitlab style={{fill: "#fff"}}/></a>

        </div>
      </div> 
      <div className="flex justify-center flex-row p-2">
        <p className="text-center text-white text-xl">Copyright © 2022 - Created by Fhatuwani Raphalalani</p>
      </div>
    </footer>
</>
  );
}

export default App;
