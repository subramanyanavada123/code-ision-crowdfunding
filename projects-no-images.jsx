var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Projects - Subramanya Navada</title>
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
                <li className="nav-item"><a className="nav-link" href="cv.html">CV</a></li>
                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="hire-me.html">Hire me</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="page projets-page">
          <section className="portfolio-block project-no-images">
            <div className="container">
              <div className="heading">
                <h2>Recent Work</h2>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="project-card-no-image">
                    <h3>Lorem Ipsum</h3>
                    <h4>Lorem ipsum dolor sit amet</h4><a className="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div className="tags"><a href="#">Python</a></div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card-no-image">
                    <h3>Lorem Ipsum</h3>
                    <h4>Lorem ipsum dolor sit amet</h4><a className="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div className="tags"><a href="#">JavaScript</a></div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card-no-image">
                    <h3>Lorem Ipsum</h3>
                    <h4>Lorem ipsum dolor sit amet</h4><a className="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div className="tags"><a href="#">CSS</a></div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card-no-image">
                    <h3>Lorem Ipsum</h3>
                    <h4>Lorem ipsum dolor sit amet</h4><a className="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div className="tags"><a href="#">Ruby</a></div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card-no-image">
                    <h3>Lorem Ipsum</h3>
                    <h4>Lorem ipsum dolor sit amet</h4><a className="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div className="tags"><a href="#">PHP</a></div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="project-card-no-image">
                    <h3>Lorem Ipsum</h3>
                    <h4>Lorem ipsum dolor sit amet</h4><a className="btn btn-outline-primary btn-sm" role="button" href="#">See More</a>
                    <div className="tags"><a href="#">HTML</a></div>
                  </div>
                </div>
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
