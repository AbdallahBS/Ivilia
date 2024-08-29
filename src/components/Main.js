import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Gallery from './Gallery';
import Prices from './Prices';
import Footer from './Footer';
function Main() {
  return (
    <div>
      <a href="/reserve" className="reserve-button">
        Réserver maintenant
      </a>


  <Header/>
  {/* Intro */}
  <Intro />
  {/* Description */}
  <div className="cards-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Card */}
          <div className="card">
            <span className="fa-stack">
              <span className="hexagon" />
              <i className="fas fa-binoculars fa-stack-1x" />
            </span>
            <div className="card-body">
              <h4 className="card-title">Environment Analysis</h4>
              <p>The starting point of any success story is knowing your current position in the business environment</p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <span className="fa-stack">
              <span className="hexagon" />
              <i className="fas fa-list-alt fa-stack-1x" />
            </span>
            <div className="card-body">
              <h4 className="card-title">Development Planning</h4>
              <p>After completing the environmental analysis the next stage is to design and  plan your development strategy</p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <span className="fa-stack">
              <span className="hexagon" />
              <i className="fas fa-chart-pie fa-stack-1x" />
            </span>
            <div className="card-body">
              <h4 className="card-title">Execution &amp; Evaluation</h4>
              <p>In this phase you will focus on executing the actions plan and evaluating the results after each marketing campaign</p>
            </div>
          </div>
          {/* end of card */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of cards-1 */}
  {/* end of description */}
  {/* Services */}
  <div id="services" className="cards-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">SERVICES</div>
          <h2>Choose The Service Package<br /> That Suits Your Needs</h2>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img className="img-fluid" src="images/services-1.jpg" alt="alternative" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Off The Ground Off The Ground</h3>
              <p>Perfect for fresh ideas or young startups, this package will help get the business off the ground</p>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">Environment and competition</div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">Designing the marketing plan</div>
                </li>
              </ul>
              <p className="price">Starting at <span>$199</span></p>
            </div>
            <div className="button-container">
              <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
            </div> {/* end of button-container */}
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img className="img-fluid" src="images/services-2.jpg" alt="alternative" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Accelerated Growth</h3>
              <p>Use this service pack to give your company the necessary impulse to become an industry leader</p>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">Business strategy planning</div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">Taking the planned actions</div>
                </li>
              </ul>
              <p className="price">Starting at <span>$299</span></p>
            </div>
            <div className="button-container">
              <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
            </div> {/* end of button-container */}
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img className="img-fluid" src="images/services-3.jpg" alt="alternative" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Market Domination</h3>
              <p>You already are a reference point in your industry now you need to learn about acquisitions</p>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">Maintaining the leader status</div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">Acquisitions the right way</div>
                </li>
              </ul>
              <p className="price">Starting at <span>$299</span></p>
            </div>
            <div className="button-container">
              <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
            </div> {/* end of button-container */}
          </div>
          {/* end of card */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of cards-2 */}
  {/* end of services */}

  
{/* about section */}
<Services />

<section className="client_section layout_padding" style={{marginTop : "50px"}}>
  <div className="container ">
    <div className="heading_container heading_center">
      <h2>
        Testimonial
      </h2>
      <hr />
    </div>
    <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-lg-7 col-md-9 mx-auto">
              <div className="client_container ">
                <div className="img-box">
                  <img src="images/about.jpg" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    Jone Mark
                  </h5>
                  <p>
                    Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                  </p>
                  <span>
                    <i className="fa fa-quote-left" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-7 col-md-9 mx-auto">
              <div className="client_container ">
                <div className="img-box">
                  <img src="images/about.jpg" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    Jone Mark
                  </h5>
                  <p>
                    Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                  </p>
                  <span>
                    <i className="fa fa-quote-left" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-7 col-md-9 mx-auto">
              <div className="client_container ">
                <div className="img-box">
                  <img src="images/about.jpg" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    Jone Mark
                  </h5>
                  <p>
                    Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                  </p>
                  <span>
                    <i className="fa fa-quote-left" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel_btn-box">
        <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
          <span>
            <i className="fa fa-arrow-left" aria-hidden="true" />
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
          <span>
            <i className="fa fa-arrow-right" aria-hidden="true" />
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</section>




  {/* Projects */}
<Gallery/>
  {/* Team */}
  <div className="basic-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Our Team Of Consultants</h2>
          <p className="p-heading">We're only as strong and as knowledgeable as our team. So here are the men and women which help customers meet goals and grow companies</p>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          {/* Team Member */}
          <div className="team-member">
            <div className="image-wrapper">
              <img className="img-fluid" src="images/team-1.png" alt="alternative" />
            </div> {/* end of image-wrapper */}
            <p className="p-large">John Whitelong</p>
            <p className="job-title">General Manager</p>
            <span className="social-icons">
              <span className="fa-stack">
                <a href="#your-link">
                  <span className="hexagon" />
                  <i className="fab fa-facebook-f fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <span className="hexagon" />
                  <i className="fab fa-twitter fa-stack-1x" />
                </a>
              </span>
            </span>
          </div> {/* end of team-member */}
          {/* end of team member */}
          {/* Team Member */}
          <div className="team-member">
            <div className="image-wrapper">
              <img className="img-fluid" src="images/team-2.png" alt="alternative" />
            </div> {/* end of image wrapper */}
            <p className="p-large">Veronique Smith</p>
            <p className="job-title">Business Developer</p>
            <span className="social-icons">
              <span className="fa-stack">
                <a href="#your-link">
                  <span className="hexagon" />
                  <i className="fab fa-facebook-f fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <span className="hexagon" />
                  <i className="fab fa-twitter fa-stack-1x" />
                </a>
              </span>
            </span>
          </div> {/* end of team-member */}
          {/* end of team member */}
          {/* Team Member */}
          <div className="team-member">
            <div className="image-wrapper">
              <img className="img-fluid" src="images/team-3.png" alt="alternative" />
            </div> {/* end of image wrapper */}
            <p className="p-large">Chris Zimerman</p>
            <p className="job-title">Online Marketer</p>
            <span className="social-icons">
              <span className="fa-stack">
                <a href="#your-link">
                  <span className="hexagon" />
                  <i className="fab fa-facebook-f fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <span className="hexagon" />
                  <i className="fab fa-twitter fa-stack-1x" />
                </a>
              </span>
            </span>
          </div> {/* end of team-member */}
          {/* end of team member */}
          {/* Team Member */}
          <div className="team-member">
            <div className="image-wrapper">
              <img className="img-fluid" src="images/team-4.png" alt="alternative" />
            </div> {/* end of image wrapper */}
            <p className="p-large">Mary Villalonga</p>
            <p className="job-title">Community Manager</p>
            <span className="social-icons">
              <span className="fa-stack">
                <a href="#your-link">
                  <span className="hexagon" />
                  <i className="fab fa-facebook-f fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <span className="hexagon" />
                  <i className="fab fa-twitter fa-stack-1x" />
                </a>
              </span>
            </span>
          </div> {/* end of team-member */}
          {/* end of team member */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-2 */}
  {/* end of team */}
  {/* About */}
  <div id="about" className="counter">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-xl-6">
          <div className="image-container">
            <img className="img-fluid" src="images/about.jpg" alt="alternative" />
          </div> {/* end of image-container */}
        </div> {/* end of col */}
        <div className="col-lg-7 col-xl-6">
          <div className="text-container">
            <div className="section-title">ABOUT</div>
            <h2>We're Passionate About Delivering Growth Services</h2>
            <p>Our goal is to provide the right business growth services at the appropriate time so companies can benefit from the created momentum and thrive for a long period of time</p>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">Everything we recommend has direct positive impact</div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">You will become an important partner of our company</div>
              </li>
            </ul>
            {/* Counter */}
            <div id="counter">
              <div className="cell">
                <div className="counter-value number-count" data-count={231}>1</div>
                <div className="counter-info">Happy<br />Users</div>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count={121}>1</div>
                <div className="counter-info">Issues<br />Solved</div>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count={159}>1</div>
                <div className="counter-info">Good<br />Reviews</div>
              </div>
            </div>
            {/* end of counter */}
          </div> {/* end of text-container */}      
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of counter */}
  {/* end of about */}
  {/* Contact */}
  <div id="contact" className="form-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="text-container">
            <div className="section-title">CONTACT</div>
            <h2>Contacter nous</h2>
            <p>contactez nous pour plus d'info
ou pour reserver votre séjour
dès maintenant !</p>
            <ul className="list-unstyled li-space-lg">
              <li className="address"><i className="fas fa-map-marker-alt" />à moins de 1h 15 de tunis un pas vers
              un héritage historique</li>
              <li><i className="fas fa-phone" /><a href="tel:003024630820">+216 26 886 536</a></li>
              <li><i className="fas fa-phone" /><a href="tel:003024630820">+216 26 200 111</a></li>
              <li><i className="fas fa-envelope" /><a href="mailto:office@aria.com">rawia@tunisianatura.com</a></li>
            </ul>
            <h3>Suivez IVLIA sur les réseaux sociaux</h3>
            <span className="fa-stack">
              <a href="#your-link">
                <span className="hexagon" />
                <i className="fab fa-facebook-f fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <span className="hexagon" />
                <i className="fab fa-twitter fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <span className="hexagon" />
                <i className="fab fa-pinterest fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <span className="hexagon" />
                <i className="fab fa-instagram fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <span className="hexagon" />
                <i className="fab fa-linkedin-in fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <span className="hexagon" />
                <i className="fab fa-behance fa-stack-1x" />
              </a>
            </span>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-lg-6">
          {/* Contact Form */}
          <form id="contactForm" data-toggle="validator" data-focus="false">
  <div className="form-group">
    <input type="text" className="form-control-input" id="cname" required />
    <label className="label-control" htmlFor="cname">Nom</label>
    <div className="help-block with-errors" />
  </div>
  <div className="form-group">
    <input type="email" className="form-control-input" id="cemail" required />
    <label className="label-control" htmlFor="cemail">Email</label>
    <div className="help-block with-errors" />
  </div>
  <div className="form-group">
    <textarea className="form-control-textarea" id="cmessage" required defaultValue={""} />
    <label className="label-control" htmlFor="cmessage">Votre message</label>
    <div className="help-block with-errors" />
  </div>
  <div className="form-group checkbox">
    <input type="checkbox" id="cterms" defaultValue="Agreed-to-Terms" required />
    J'accepte les <a href="privacy-policy.html">Politique de Confidentialité</a> et les <a href="terms-conditions.html">Conditions Générales</a> d'Aria
    <div className="help-block with-errors" />
  </div>
  <div className="form-group">
    <button type="submit" className="form-control-submit-button">ENVOYER LE MESSAGE</button>
  </div>
  <div className="form-message">
    <div id="cmsgSubmit" className="h3 text-center hidden" />
  </div>
</form>

          {/* end of contact form */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of form-2 */}
  {/* end of contact */}
  {/* Footer */}

< Footer/>
</div>




  )
}

export default Main