
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar bg-body-tertiary bg-warning">
        <div className="container">
        <a className="navbar-brand logo">FurnitureZone</a>
        <div >
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success " type="submit">Search</button>
            </form>
        </div>
        </div>
        
    </nav>
    <div className="row bg-warning">
      <nav className=" navbar navbar-expand-lg bg-wawning ">
        <div className="container bg-warning gap-4">
          <a className="navbar-brand btn border-0 btn-outline-success" href="">FurnitureZone</a>
          <div className="collapse navbar-collapse" >
            <div className="navbar-nav gap-5">
            <a className="nav-link active gap-5 btn border-0 btn-outline-success" aria-current="page" href="#slid-image">Home</a>
            <a className="nav-link gap-5 btn border-0 btn-outline-success" href="#contect">About</a>
            <a className="nav-link gap-5 btn border-0 btn-outline-success" href="#">Category</a>
            <a className="nav-link gap-5 btn border-0 btn-outline-success">Review</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
      

      {/* <!-- start --> */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../assets/image/image-10.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fw-1">Multi color collection</h5>
<span className="fs-1 fw-1">SIMPLE PRODUCT</span>
<div className="card-body">
  <a href="#!" className="btn btn-success">BYE NOW</a>
</div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../assets/image/image-12.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fw-1">Multi color collection</h5>
<span className="fs-1 fw-1">SIMPLE PRODUCT</span>
<div className="card-body">
  <a href="#!" className="btn btn-success">BYE NOW</a>
</div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../assets/image/image-10.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
<h5 className="fw-1">Multi color collection</h5>
<span className="fs-1 fw-1">SIMPLE PRODUCT</span>
<div className="card-body">
  <a href="#!" className="btn btn-success">BYE NOW</a>
</div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- end --> */}

      {/* <!-- start --> */}
      <div className="container-fluid icon-div-1"> 
        <div className="row mx-5 justify-content-center icon-div text-center">
          <div className="col "><img src="../assets/icon/bed.png" alt=""/></div>
          <div className="col "><img src="../assets/icon/bookshelf.png" alt=""/></div>
          <div className="col "><img src="../assets/icon/chair.png" alt=""/></div>
          <div className="col "><img src="../assets/icon/fan.png" alt=""/></div>
          <div className="col "><img src="../assets/icon/lamp.png" alt=""/></div>
          <div className="col "><img src="../assets/icon/table-box.png" alt=""/></div>
          <div className="col "><img src="../assets/icon/table.png" alt=""/></div>
        </div>
      </div>
      {/* <!-- end --> */}

      {/* <!-- start --> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col text-start">
            <h3>NEW ARRIVALS</h3>
          </div>
          <div className="col"></div>
          <div className="col d-flex text-center gap-5 pt-4 justify-content-left mx-5">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled">Disabled</a> 
        </div>
        <div className="col"></div>
        </div>
      </div>
      {/* <!-- end --> */}
      {/* <!-- image-section-start--> */}
      <div className="container-fliuid">
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <img src="../assets/image/image-9.jpg" className=" w-100 image-9-1 " alt=""/>
          </div>
          <div className="col-3">
            <img src="../assets/image/image-3.jpg" className="w-100 image-3" alt=""/>
          </div>
          <div className="col"></div>
        </div>
      </div>
      {/* <!-- image-section-end --> */}
      {/* <!-- start--> */}
      <div className="container-fliuid my-4">
        <div className="row">
          <div className="col"></div>
          <div className="col-3">
            <img src="../assets/image/image-3.jpg" className=" w-100 image-3 " alt=""/>
          </div>
          <div className="col-3">
            <img src="../assets/image/image-3.jpg" className="w-100 image-3" alt=""/>
          </div>
          <div className="col-3">
            <img src="../assets/image/image-3.jpg" className="w-100 image-3" alt=""/>
          </div>
          <div className="col"></div>
        </div>
      </div>
      {/* <!-- end --> */}
      {/* <!-- start --> */}
      <div className="container-fluid">
      <div className="card text-bg-dark">
        <img src="../assets/image/image14.jpg " className="card-img image-14" alt="..."/>
        <div className="card-img-overlay text-center ">
          <h4 className="fw-bold">SUPER SALE</h4>
          <span className="fs-1 fw-bold">Up To 50%</span>
          <div className="row mx-auto gap-4 text-center justify-content-center pt-4">
            <div className="col-1 bg-warning">
              <h3>28</h3>
              <h3>DAYS</h3>
            </div>
            <div className="col-1 bg-warning">
              <h3>28</h3>
              <h3>HRS</h3>
            </div>
            <div className="col-1 bg-warning">
              <h3>28</h3>
              <h3>MINT</h3>
            </div>
            <div className="col-1 bg-warning">
              <h3>25</h3>
              <h3>SEC</h3>
            </div>
            <div className="row justify-content-center my-5">
              <button className="col-2 btn btn-success " type="submit">SHOP NOW</button>
            </div>
          </div>
        </div>
        </div>
        </div>
      {/* <!-- end --> */}
      {/* <!-- start --> */}
      <div className="card-group gap-2 my-5">
        <div className="card">
          <img src="../assets/image/image-4.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#!" className="btn btn-success">BYE NOW</a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="../assets/image/image-9.jpg" className="card-img-top image-9" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#!" className="btn btn-success">BYE NOW</a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="../assets/image/image-9.jpg" className="card-img-top image-9" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#!" className="btn btn-success">BYE NOW</a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="../assets/image/image-6.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#!" className="btn btn-success">BYE NOW</a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>

      {/* <!-- end --> */}
      {/* <!-- start --> */}
      {/* <!-- start --> */}
      <div className="card-group gap-2 my-5">
        <div className="card">
          <img src="../assets/image/image-4.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#!" className="btn btn-success">BYE NOW</a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="../assets/image/image-9.jpg" className="card-img-top image-9" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#!" className="btn btn-success">BYE NOW</a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="../assets/image/image-9.jpg" className="card-img-top image-9" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#!" className="btn btn-success">BYE NOW</a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="../assets/image/image-6.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#!" className="btn btn-success">BYE NOW</a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      {/* <!-- end --> */}
      {/* <!-- start --> */}
      <div className="container-fluid">
      <div className="card text-bg-dark rounded-0">
        <img src="../assets/image/image14.jpg " className="card-img image-16" alt="..."/>
            <div className="card-img-overlay text-center my-5  ">
          <h4 className="fw-bold pt-5">Build Work</h4>
          <span className="fs-1 fw-bold pt-5">Custom Furniture Design </span>
            </div>
        </div>
      </div>
      {/* <!-- end --> */}

      {/* <!-- start --> */}
      <div className="container-fluid">
        <div className="row justify-content-center pt-4">
          <div className="col-4">
            <span className="fs-4 fw-bold ">SPECIAL PRODUCT</span>
          </div>
          <div className="col-4 text-end fw-bold fs-2 px-4 ">
            <i className="bi bi-skip-backward px-4 "></i>
            <i className="bi bi-skip-forward"></i>
          </div>
        </div>
        <div className="row justify-content-center my-3">
          <div className="col-4">
            <img src="../assets/image/image-17.jpg" className="w-100 image-17" alt=""/>
          </div>
          <div className="col-4">
            <div className="row">
              <img src="../assets/image/image-18.jpg" className="w-100" alt=""/>
            </div>
            <div className="row">
              <div className="col-6">
                <img src="../assets/image/image-16.jpg" className=" my-3 image-16" alt=""/>
              </div>
            <div className="col-6">
              <img src="../assets/image/image-19.jpg" className=" my-3 image-19 w-100 " alt=""/>
            </div>
            </div>
          </div>
        </div>

      </div>
      {/* <!-- end --> */}

      {/* <!--start--> */}
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-10 pb-3">
            <span className="fs-3 fw-3">Our Blogs</span>
          </div>
        </div>
      </div>
      {/* <!--end--> */}

      {/* <!--start--> */}
      <div className="container ">
        <div className="row-8 mx-5">
          <div className="card-group mx-5 gap-2">
            <div className="card">
              <img src="../assets/image/image1.jpeg" className="card-img-top w-100 image1" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <a href="#!" className="btn btn-success">Read More</a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img src="../assets/image/image-5.jpg" className="card-img-top w-100 image-5" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <a href="#!" className="btn btn-success">Read More</a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img src="../assets/image/image-8.jpg" className="card-img-top image-8 " alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <a href="#!" className="btn btn-success">Read More</a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
        </div>
        </div>
      </div>
      {/* <!-- end --> */}

      {/* <!-- start --> */}
      <div className="container ">
        <div className="row d-flex justify-content-center mt-5 px-5 text-center">
          <div className="col-2 "><img src="../assets/icon/bed.png" alt=""/></div>
          <div className="col-2 "><img src="../assets/icon/bookshelf.png" alt=""/></div>
          <div className="col-2 "><img src="../assets/icon/chair.png" alt=""/></div>
          <div className="col-2 "><img src="../assets/icon/fan.png" alt=""/></div>
          <div className="col-2 "><img src="../assets/icon/lamp.png" alt=""/></div>
        </div>
      </div>
      {/* <!-- end --> */}

      {/* <!-- start --> */}
      <div className="p-1 bg-success w-100 mt-5"></div>
      {/* <!-- start --> */}

      {/* <!-- start --> */}
      {/* <!-- Footer --> */}
<footer id="contect" className="text-center text-lg-start bg-white text-muted mt-5 bg-secondary">
  {/* <!-- Section: Social media --> */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-muted">
    {/* <!-- Left --> */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div className="">
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Company name
          </h6>
          <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Jalandhar punjab India</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            ck425789@gmail.com.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 91 7986341501</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> + 91 7986341501</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4 bg-warning" style={{backgroundColor: "rgba(0, 0, 0, 0.025);"}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="">FurnitureZone.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
      {/* <!-- end --> */}

      </>
  );
}

export default App;


