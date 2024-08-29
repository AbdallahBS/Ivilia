import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import NavPrices from './NavPrices'

function Prices() {
  return (
    <div>
<NavPrices/>

<div className="container-xxl bg-white p-0" style={{marginTop : "100px"}}>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start  text-uppercase" style={{color :"#14bf98"}}></h6>
              <h1 className="mb-4">Tout pour vous <span className="text-uppercase" style={{color :"#14bf98"}}>mieux servi</span></h1>
              <p className="mb-4">Un domaine 100% bio respectant l'environnement et la planète.
              Une multitude de services afin de faire de votre séjour une expérience mémorable et unique en son genre</p>
              <div className="row g-3 pb-4">
                <div className="col-sm-4">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa fa-hotel fa-2x  mb-2"  style={{color :"#14bf98"}}/>
                      <h2 className="mb-1">1234</h2>
                      <p className="mb-0">Rooms</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa fa-users-cog fa-2x mb-2" style={{color :"#14bf98"}} />
                      <h2 className="mb-1">1234</h2>
                      <p className="mb-0">Staffs</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa fa-users fa-2x mb-2" style={{color :"#14bf98"}} />
                      <h2 className="mb-1">1234</h2>
                      <p className="mb-0">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            <div className="col-lg-6">
              <div className="row ">
                <div className="col-6 text-end" >
                  <img className="img-fluid rounded w-100" src="img/about-1.jpg" style={{ marginTop: '25%' }} />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100" src="img/about-2.jpg" />
                </div>
                <div className="col-6 text-end" style={{marginTop :"50px"}}> 
                  <img className="img-fluid rounded w-100" src="img/about-3.jpg" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100" src="img/about-4.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Room Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title text-center  text-uppercase" style={{color :"#14bf98"}}></h6>
            <h1 className="mb-5">Découvrez Nos  <span className="text-uppercase" style={{color :"#14bf98"}}>Chambres </span></h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/room-1.jpg" alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Junior Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star" />
                      <small className="fa fa-star " />
                      <small className="fa fa-star " />
                      <small className="fa fa-star " />
                      <small className="fa fa-star " />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-4 pe-4"><i className="fa fa-bed  me-3"  style={{color :"#14bf98"}}/> 3 Bed</small>
                    <small className="border-end me-4 pe-4"><i className="fa fa-bath  me-3" style={{color :"#14bf98",marginLeft:"20px"}}  /> 2 Bath </small>
                    <small><i className="fa fa-wifi  me-2" style={{color :"#14bf98",marginLeft:"20px"}} />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                  <button class="consulter" role="button">Consulter</button>
                    <button class="button-27" role="button">Reserver</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/room-1.jpg" alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Junior Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star" />
                      <small className="fa fa-star " />
                      <small className="fa fa-star " />
                      <small className="fa fa-star " />
                      <small className="fa fa-star " />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-4 pe-4"><i className="fa fa-bed  me-3"  style={{color :"#14bf98"}}/> 3 Bed</small>
                    <small className="border-end me-4 pe-4"><i className="fa fa-bath  me-3" style={{color :"#14bf98",marginLeft:"20px"}}  /> 2 Bath </small>
                    <small><i className="fa fa-wifi  me-2" style={{color :"#14bf98",marginLeft:"20px"}} />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                  <button class="consulter" role="button">Consulter</button>
                    <button class="button-27" role="button">Reserver</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/room-1.jpg" alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Junior Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star" />
                      <small className="fa fa-star " />
                      <small className="fa fa-star " />
                      <small className="fa fa-star " />
                      <small className="fa fa-star " />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-4 pe-4"><i className="fa fa-bed  me-3"  style={{color :"#14bf98"}}/> 3 Bed</small>
                    <small className="border-end me-4 pe-4"><i className="fa fa-bath  me-3" style={{color :"#14bf98",marginLeft:"20px"}}  /> 2 Bath </small>
                    <small><i className="fa fa-wifi  me-2" style={{color :"#14bf98",marginLeft:"20px"}} />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                  <button class="consulter" role="button">Consulter</button>
                    <button class="button-27" role="button">Reserver</button>
                  </div>
                </div>
              </div>
            </div>
     

          </div>
        </div>
      </div>
      {/* Room End */}

      {/* Video Start */}
    
      {/* Video End */}

      {/* Video Modal Start */}
  
      {/* Video Modal End */}
    </div>
  {/* Video Start */}





<Footer />
</div>



  )
}

export default Prices



