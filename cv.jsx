var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>CV - Subramanya Navada</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700" />
        <link rel="stylesheet" href="assets/fonts/ionicons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/css/pikaday.min.css" />
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
          <div className="container"><a className="navbar-brand logo" href="#">Subramanya Navada</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="projects-grid-cards.html">Projects</a></li>
                <li className="nav-item"><a className="nav-link active" href="cv.html">CV</a></li>
                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="hire-me.html">Hire me</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="page cv-page">
          <section className="portfolio-block block-intro border-bottom">
            <div className="container">
              <div className="avatar" style={{backgroundImage: 'url("assets/img/avatars/avatar.jpg")'}} />
              <div className="about-me">
                <p>Hello! I am <strong>John Smith</strong>. I work as interface and front end developer. I have passion for pixel perfect, minimal and easy to use interfaces.</p><a className="btn btn-outline-primary" role="button" href="#">Hire me</a>
              </div>
            </div>
          </section>
          <section className="portfolio-block cv">
            <div className="container">
              <div className="work-experience group">
                <div className="heading">
                  <h2 className="text-center">Work Experience</h2>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Web Developer</h3>
                      <h4 className="organization">Amazing Co.</h4>
                    </div>
                    <div className="col-md-6"><span className="period">10/2013 - 04/2015</span></div>
                  </div>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-6">
                      <h3>Front End Developer</h3>
                      <h4 className="organization">Innovative Org.</h4>
                    </div>
                    <div className="col-md-6"><span className="period">05/2015 - 12/2017</span></div>
                  </div>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Web Developer</h3>
                      <h4 className="organization">Special Inc.</h4>
                    </div>
                    <div className="col-md-6"><span className="period">12/2017 - Present</span></div>
                  </div>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
                </div>
              </div>
              <div className="education group">
                <div className="heading">
                  <h2 className="text-center">Education</h2>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>High School</h3>
                      <h4 className="organization">Albert Einstein School</h4>
                    </div>
                    <div className="col-6"><span className="period">09/2005 - 05/2010</span></div>
                  </div>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Applied Physics</h3>
                      <h4 className="organization">Stephen Hawking College</h4>
                    </div>
                    <div className="col-md-6"><span className="period">09/2010 - 06/2015</span></div>
                  </div>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
                </div>
              </div>
              <div className="group">
                <div className="row">
                  <div className="col-md-6">
                    <div className="skills portfolio-info-card">
                      <h2>Skills</h2>
                      <h3>HTML</h3>
                      <div className="progress">
                        <div className="progress-bar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}><span className="visually-hidden">100%</span></div>
                      </div>
                      <h3>PHP</h3>
                      <div className="progress">
                        <div className="progress-bar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}><span className="visually-hidden">90%</span></div>
                      </div>
                      <h3>JavaScript</h3>
                      <div className="progress">
                        <div className="progress-bar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}><span className="visually-hidden">80%</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-info portfolio-info-card">
                      <h2>Contact Info</h2>
                      <div className="row">
                        <div className="col-1"><i className="icon ion-android-calendar icon" /></div>
                        <div className="col-9"><span>10/10/1990</span></div>
                      </div>
                      <div className="row">
                        <div className="col-1"><i className="icon ion-person icon" /></div>
                        <div className="col-9"><span>John Smith</span></div>
                      </div>
                      <div className="row">
                        <div className="col-1"><i className="icon ion-ios-telephone icon" /></div>
                        <div className="col-9"><span>+235 3217 424</span></div>
                      </div>
                      <div className="row">
                        <div className="col-1"><i className="icon ion-at icon" /></div>
                        <div className="col-9"><span>lorem@email.com</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hobbies group">
                <div className="heading">
                  <h2 className="text-center">Hobbies</h2>
                </div>
                <p className="text-center text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras risus ligula, iaculis ut metus sit amet, luctus pharetra mauris. Aliquam purus felis, pretium vel pretium vitae, dapibus sodales ante. Suspendisse potenti. Duis nunc eros.</p>
              </div>
            </div>
          </section>
        </main>
        <footer className="page-footer">
          <div className="container">
            <div className="links"><a href="#">About me</a><a href="#">Contact me</a><a href="#">Projects</a></div>
            <div className="social-icons"><a href="#"><i className="icon ion-social-facebook" /></a><a href="#"><i className="icon ion-social-instagram-outline" /></a><a href="#"><i className="icon ion-social-twitter" /></a></div>
          </div>
        </footer>
      </div>
    );
  }
});
