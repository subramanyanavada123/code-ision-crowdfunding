var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Hire me - Subramanya Navada</title>
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
                <li className="nav-item"><a className="nav-link active" href="hire-me.html">Hire me</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="page hire-me-page">
          <section className="portfolio-block hire-me">
            <div className="container">
              <div className="heading">
                <h2>Hire Me</h2>
              </div>
              <form>
                <div className="mb-3"><label className="form-label" htmlFor="subject">Subject</label><select className="form-select" id="subject">
                    <optgroup label="This is a group">
                      <option value={12} selected>This is item 1</option>
                      <option value={13}>This is item 2</option>
                      <option value={14}>This is item 3</option>
                    </optgroup>
                  </select></div>
                <div className="mb-3"><label className="form-label" htmlFor="email">Email</label><input className="form-control" type="email" id="email" /></div>
                <div className="mb-3"><label className="form-label" htmlFor="message">Message</label><textarea className="form-control" id="message" defaultValue={""} /></div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-6"><label className="form-label" htmlFor="hire-date">Date</label><input className="form-control" id="hire-date" type="date" /></div>
                    <div className="col-md-6 button"><button className="btn btn-primary d-block w-100" type="submit">Hire Me</button></div>
                  </div>
                </div>
              </form>
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
