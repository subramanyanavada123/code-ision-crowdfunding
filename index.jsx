var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Home - Subramanya Navada</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700" />
        <link rel="stylesheet" href="assets/fonts/ionicons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/css/pikaday.min.css" />
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
          <div className="container"><a className="navbar-brand logo" href="#">Subramanya Navada</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="projects-grid-cards.html">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="cv.html">CV</a></li>
                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="hire-me.html">Hire me</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="page lanidng-page">
          <section className="portfolio-block block-intro">
            <div className="container">
              <div className="avatar" style={{backgroundImage: 'url("assets/img/avatars/avatar.jpg")'}} />
              <div className="about-me">
                <p>Hello! I am <strong>John Smith</strong>. I work as interface and front end developer. I have passion for pixel perfect, minimal and easy to use interfaces.</p><a className="btn btn-outline-primary" role="button" href="#">Hire me</a>
              </div>
            </div>
          </section>
          <section className="portfolio-block photography">
            <div className="container">
              <div className="row g-0">
                <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"><img className="img-fluid image" src="assets/img/nature/image5.jpg" /></a></div>
                <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"><img className="img-fluid image" src="assets/img/nature/image2.jpg" /></a></div>
                <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"><img className="img-fluid image" src="assets/img/tech/image4.jpg" /></a></div>
              </div>
            </div>
          </section>
          <section className="portfolio-block call-to-action border-bottom">
            <div className="container">
              <div className="d-flex justify-content-center align-items-center content">
                <h3>Like what you see?</h3><button className="btn btn-outline-primary btn-lg" type="button">Hire me</button>
              </div>
            </div>
          </section>
          <section className="portfolio-block skills">
            <div className="container">
              <div className="heading">
                <h2>Special Skills</h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0"><i className="icon ion-ios-star-outline" /></div>
                    <div className="card-body">
                      <h3 className="card-title">Web Design</h3>
                      <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0"><i className="icon ion-ios-lightbulb-outline" /></div>
                    <div className="card-body">
                      <h3 className="card-title">Interface Design</h3>
                      <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0"><i className="icon ion-ios-gear-outline" /></div>
                    <div className="card-body">
                      <h3 className="card-title">Photography and Print</h3>
                      <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <section className="portfolio-block website gradient" />
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
