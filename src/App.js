import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="image" id="top">
          <div id="socialIcons">
            <a href="https://github.com/TMayweather" target="_blank" >
              <i className="fab fa-github-square icons animated pulse p-1"></i>
            </a>
            <a href="https://www.linkedin.com/in/tnea-mayweather" target="_blank">
              <i className="fab fa-linkedin icons animated pulse p-1"></i>
            </a>
            <a href="https://www.twitter.com/tneamayweather" target="_blank">
              <i className="fab fa-twitter-square icons animated pulse p-1"></i>
            </a>
          </div>
          <nav className="navbar-expand-sm navbar navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse" id="navbarNavAltMarkup">
              <ul className="nav navbar">
                <li>
                  <a className="nav-item nav-link linkHover" href="#about">About</a>
                </li>
                <li>
                  <a className="nav-item nav-link linkHover" href="#projects">Projects</a>
                </li>
                <li>
                  <a className="nav-item nav-link linkHover" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="animated fadeInLeft pl-4">
            <h1 className="name animated fadeInLeft">TNEA MAYWEATHER</h1>
            <h2>FREELANCE WEB DEVELOPER</h2>
            <p className="intro">Based out of Chattanooga, TN. I specialize in creating modern, responsive and user-friendly sites and apps.</p>
            <p className="intro">Currently avaliable for full-time job opportunities.</p>
            <p className="intro">
                <a href="mailto:tnea.mayweather@hotmail.com" className="contact">Contact me</a> and let's work together.</p>
            <a href="#about" className="btn btn-primary">More About Me</a>
          </div>
        </div>

        <section id="about">
          <div className="container">
            <div className="row w-100">
              <div className="col-lg-8 col-md-12 col-xs-12">
                <h3 className="headers">About Me</h3>
                <p>Self-taught Web Developer who is a problem solver, eager learner and critical thinker.
                    I have been fascinated with technology since a young age. One of my earliest memories in programming
                    is making conditional statements in a guessing game I was coding on my clunky VTech laptop at the
                    age of 6. I have always been a very curious person who loves to tinker with things and this curiosity is what lead me to a career in Web Developement.
                     My passion allows me to leverage various languages and frameworks into interactive sites
                    and apps that makes users lives easier. I am currently open to working in-house or remote full-time.</p>
              </div>
              <div className="col-lg-4 col-md-12 col-xs-12">
                <h3 className="headers">Skills</h3>
                <div className="skillIcons">
                  <i className="fab fa-html5 mr-2"></i>
                  <i className="fab fa-css3-alt mr-2"></i>
                  <i className="fab fa-js mr-2"></i>
                  <i className="fab fa-node mr-2"></i>
                  <i className="fab fa-react mr-2"></i>
                  <i className="fab fa-git-square mr-2"></i>
                </div>
              </div>
            </div>
            <div className="additional d-flex justify-content-center">
              <div className="row w-100">
                <div className="col-md-4 col-sm-12">
                  <h4>Additional Skills:</h4>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column">
                    <div className="p-2">Express.js</div>
                    <div className="p-2">MongoDB</div>
                    <div className="p-2">jQuery</div>
                    <div className="p-2">Bootstrap</div>
                    <div className="p-2">Semantic UI</div>
                    <div className="p-2">ES6+</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column">
                    <div className="p-2">REST</div>
                    <div className="p-2">Command Line/Terminal</div>
                    <div className="p-2">JSON</div>
                    <div className="p-2">AJAX</div>
                    <div className="p-2">Linux</div>
                    <div className="p-2">Customer Service & Quality Control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="imageTwo">
        </div>
        <section id="projects">
          <div className="container">
            <h3 className="headers">Projects</h3>
            <div className="row pb-4">
              <div className="col-md-4">
                <div className="card bg-dark text-white">
                  <img className="card-img" src={require("./images/FNBRS.png")} />
                  <div className="card-img-overlay">
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <h5>Fortnite Battle Royale Stats</h5>
                <p>FNBRS allows users access player stats regardless of platform, view recent news and leaderboards. I leveraged
                    Express.js for the server and API access and Semantic UI for the front end. Creating
                    this app reinforced my JS, HTML5 and CSS3 skills while also honing my ability to fetch data from
                        an API and sort through JSON to retrieve the data I need.</p>
                <div className="badges">
                  <span className="badge badge-primary">HTML</span>
                  <span className="badge badge-primary">CSS</span>
                  <span className="badge badge-primary">JavaScript</span>
                  <span className="badge badge-primary">Node.js</span>
                  <span className="badge badge-primary">Express.js</span>
                  <span className="badge badge-primary">Semantic UI</span>
                </div>
                <a href="https://github.com/TMayweather/Fortnite-Stats">Github</a>
              </div>
            </div>
            <div className="row pb-4 pt-4">
              <div className="col-md-4">
                <div className="card bg-dark text-white">
                  <img className="card-img" src={require("./images/mhealthtool.png")} />
                  <div className="card-img-overlay">
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <h5>Mayweather Health Tools</h5>
                <p>MHT provides users with various tools in order to faciliate a healthy lifestyle. It features a Meal Randomizer
                    that takes proteins, carbs and vegetables and randomize each into a meal, BMI, BMR and water intake
                    calculator and also a workout randomizer based on cardio, upper body and lower body exercises.</p>
                <div className="badges">
                  <span className="badge badge-primary">HTML</span>
                  <span className="badge badge-primary">CSS</span>
                  <span className="badge badge-primary">JavaScript</span>
                  <span className="badge badge-primary">jQuery</span>
                  <span className="badge badge-primary">Bootstrap</span>
                </div>
                <a href="https://github.com/TMayweather/MHT">Github</a>
              </div>
            </div>
            <div className="row pb-4 pt-4">
              <div className="col-md-4">
                <div className="card bg-dark text-white">
                  <img className="card-img" src={require("./images/portfolio.png")} />
                  <div className="card-img-overlay">
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <h5>My Portfolio</h5>
                <p>This site is used to provide more information about me as well as house my various projects. I decided to remake this portfolio and it has given me an opportunity to show newly learned
                        skills. The front-end was created with React and Bootstrap.</p>
                <div className="badges">
                  <span className="badge badge-primary">HTML</span>
                  <span className="badge badge-primary">CSS</span>
                  <span className="badge badge-primary">JavaScript</span>
                  <span className="badge badge-primary">jQuery</span>
                  <span className="badge badge-primary">React</span>
                  <span className="badge badge-primary">Bootstrap</span>
                </div>
                <a href="https://github.com/TMayweather/PortfolioProject">Github</a>
              </div>
            </div>
          </div>
        </section>
        <div className="imageThree">
        </div>
        <section id="contact">
          <h3 className="headers">Contact</h3>
          <div className="container">
            <div className="row w-100">
              <div className="col-sm-12 col-md-6">
                <h4>Get In Touch</h4>
                <div className="contactInfo">
                  <span>Phone: (423) 505-8603</span>
                  <span>Email: tnea.mayweather@hotmail.com</span>
                </div>
                <div className="contactIcons mt-4">
                  <a href="https://github.com/TMayweather" target="_blank">
                    <i className="fab fa-github-square icons animated pulse p-1"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/tnea-mayweather" target="_blank">
                    <i className="fab fa-linkedin icons animated pulse p-1"></i>
                  </a>
                  <a href="https://www.twitter.com/tneamayweather" target="_blank">
                    <i className="fab fa-twitter-square icons animated pulse p-1"></i>
                  </a>
                </div>

              </div>           
              <div className="col-sm-12 col-md-6">
                <h4>Leave A Message</h4>
                <form action="https://formspree.io/tnea.mayweather@hotmail.com" method="POST" className="needs-validation" novalidate>
                  <div className="input-group">
                    <label for="name">Name</label>
                    <input className="w-100" type="text" id="name" name="name" placeholder="Your Name" required />
                    <div className="invalid-feedback">
                      Please enter your name.
                            </div>
                  </div>
                  <div className="input-group">
                    <label for="email">Email</label>
                    <input className="w-100" type="text" id="email" name="email" placeholder="youremail@email.com" required />
                    <div className="invalid-feedback">
                      Please enter a valid email.
                            </div>
                  </div>
                  <div className="input-group">
                    <label for="message" className="mt-4">Message</label>
                    <textarea className="w-100" name="message" id="message" placeholder="What would you like to say?" cols="30" rows="5" required></textarea>
                    <div className="invalid-feedback">
                      Please enter a message.
                            </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <footer>
            <div className="copywrite">
              <span> &copy; 2018 T'NEA MAYWEATHER</span>
            </div>
            <div className="toTop">
              <a href="#top">
                <i className="fas fa-chevron-circle-up backToTop"></i>
              </a>
            </div>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
