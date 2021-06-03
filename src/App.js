import "./App.css";
import { useState } from "react";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      country: country,
    };

    console.log(formdata);
  };

  return (
    <div style={{ backgroundColor: "black", height: "100%", width: "100%" }}>
      {/* <div>
        <img
          style={{ width: "100%" }}
          src={process.env.PUBLIC_URL + "/images/banner1withlogo.jpg"}
        />
      </div> */}
      {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/banner1withlogo.jpg"}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/banner1withlogo.jpg"}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/banner1withlogo.jpg"}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div> */}

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/banner1withlogo.jpg"}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/eminem.jpg"}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/shoes.jpg"}
              alt="Third slide"
            />
          </div>
        </div>
      </div>

      {/* <div>
        <img
          style={{ width: "100%" }}
          src={process.env.PUBLIC_URL + "/images/midbanner1new.jpeg"}
        />
      </div> */}
      <div className="container ">
        <div className="row ">
          <div
            className="col-6"
            style={{
              backgroundColor: "black",
              marginTop: "2rem",
              marginBottom: "3rem",
            }}
          >
            <h2 style={{ color: "#4b3868" }}>
              <i>SKOLEOM</i>
            </h2>
            <h5 style={{ color: "#4b3868" }}>
              <i>
                <b>BUY EVERYTHING YOU TOUCH ON YOUR SCREEN</b>
              </i>
            </h5>
            <p style={{ color: "grey" }}>
              <b>
                Skoleom allows users to interact within their video. This
                eCommerce
                <br />
                platform 3.0* converges data from international websites to its
                new
                <br />
                generation interactive player. It gives its users the best
                possible
                <br />
                experience.
              </b>
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              top: "13.3rem",
              left: "58rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <button
                className="btn btn-lg"
                style={{ backgroundColor: "#f6bc34", width: "14rem" }}
              >
                <h5 style={{ color: "white" }}>Watch on Skoleom</h5>
              </button>
            </div>

            <div
              style={{
                height: "180px",
                width: "380px",
                padding: "10px 10px",

                backgroundColor: "#5a3d80",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#5a3d80",
                  transform: "rotate(45deg)",
                  transform: "rotate(45deg)",
                  position: "absolute",
                  top: "11.2rem",
                  left: "9rem",
                }}
              ></div>

              <div
                className="embed-responsive embed-responsive-16by9"
                style={{ height: "100%", borderRadius: "10px" }}
              >
                <iframe
                  className="embed-responsive-item"
                  src="https://skoleom-resource.s3.eu-west-3.amazonaws.com/Intro.mp4"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              backgroundColor: "black",
              textAlign: "right",
              marginTop: "3rem",
            }}
          >
            <h1 style={{ color: "#08bfcf" }}>
              <b>July 24, 2021</b>
            </h1>
            {/* =====modal */}
            <div className="modal show">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      ×
                    </button>
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    <p>One fine body…</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* =====modal */}
            <button
              className="btn btn-lg"
              style={{ backgroundColor: "#08bfcf", width: "14rem" }}
            >
              <h3 style={{ color: "white" }}>on Skoleom</h3>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="row">
          <div
            className="col-md col-sm-12"
            style={{ backgroundColor: "black", textAlign: "center" }}
          >
            {/* <img
              style={{ width: "70%", height: "95%" }}
              src={process.env.PUBLIC_URL + "/images/newkanye1.jpg"}
            /> */}

            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
              style={{
                width: "70%",
                height: "95%",
                marginLeft: "3rem",
                marginTop: "2rem",
              }}
            >
              <div className="carousel-inner">
                {/* <button
                  className="btn btn-md"
                  style={{
                    color: "white",
                    backgroundColor: "#fdb916",
                    borderRadius: "45px",
                    marginTop: "-7rem",
                  }}
                >
                  Watch on Skoleom
                </button> */}
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/images/newkanye1.jpg"}
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <button
                      className="btn btn-md"
                      style={{
                        color: "white",
                        backgroundColor: "#fdb916",
                        borderRadius: "45px",
                        // marginTop: "-4rem",
                      }}
                    >
                      Watch on Skoleom
                    </button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/images/kanye2.jpg"}
                    alt="Second slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <button
                      className="btn btn-md"
                      style={{
                        color: "white",
                        backgroundColor: "#fdb916",
                        borderRadius: "45px",
                        // marginTop: "-4rem",
                      }}
                    >
                      Watch on Skoleom
                    </button>
                  </div>
                </div>
                {/* <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/images/newkanye1.jpg"}
                    alt="Third slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <button
                      className="btn btn-md"
                      style={{
                        color: "white",
                        backgroundColor: "#fdb916",
                        borderRadius: "45px",
                        // marginTop: "-4rem",
                      }}
                    >
                      Watch on Skoleom
                    </button>
                  </div>
                </div> */}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div
            className="col-md-5 col-sm-12"
            style={{ backgroundColor: "black", marginTop: "2rem" }}
          >
            <form>
              <div className="form-row" style={{ padding: "0px 40px" }}>
                <div
                  className="form-group col-md-12"
                  style={{ textAlign: "center" }}
                >
                  <h1 style={{ color: "white", marginBottom: "1rem" }}>
                    <b>Registration</b>
                  </h1>
                </div>
                <div className="form-group col-md-12">
                  {/* <label htmlFor="inputEmail4">Email</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    required
                    style={{
                      backgroundColor: "#1d1b1c",
                      borderColor: "#1d1b1c",
                      height: "3rem",
                    }}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-12">
                  {/* <label htmlFor="inputPassword4">Password</label> */}
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Last name"
                    style={{
                      backgroundColor: "#1d1b1c",
                      borderColor: "#1d1b1c",
                      height: "3rem",
                    }}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-12">
                  {/* <label htmlFor="inputPassword4">Password</label> */}
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Email"
                    style={{
                      backgroundColor: "#1d1b1c",
                      borderColor: "#1d1b1c",
                      height: "3rem",
                    }}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-12">
                  {/* <label htmlFor="inputEmail4">Email</label> */}
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Country"
                    style={{
                      backgroundColor: "#1d1b1c",
                      borderColor: "#1d1b1c",
                      height: "3rem",
                    }}
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <button
                  className="btn btn-lg"
                  style={{
                    backgroundColor: "#f6bc34",
                    color: "white",
                    width: "14rem",
                  }}
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div
            className="col-md col-sm-12"
            style={{ backgroundColor: "black" }}
          >
            <div
              style={{
                width: "20rem",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: "white" }}>Best sellers</h3>
            </div>
            <div
              className="card"
              style={{
                width: "20rem",
                height: "15rem",
                backgroundColor: "#1d1a23",
              }}
            >
              <div className="row no-gutters" style={{ width: "200%" }}>
                <div
                  className="col-auto"
                  style={{
                    width: "20%",
                    height: "100%",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    paddingLeft: "0.5rem",
                  }}
                >
                  <a
                    href="https://www.amazon.in/Be-savage-Black-Sweat-Shirts-Girls/dp/B08Y6QB3NB/ref=sr_1_8?crid=37CNY53GUH2PM&dchild=1&keywords=pink+sweatshirt+for+women&qid=1622643793&sprefix=pink+sweat%2Caps%2C307&sr=8-8"
                    target="_blank"
                  >
                    <img
                      style={{ height: "77%", borderRadius: "10px" }}
                      src={process.env.PUBLIC_URL + "/images/girl1.png"}
                      className="img-fluid"
                      alt
                    />
                  </a>
                </div>
                <div className="col">
                  <div className="card-block px-2">
                    <p
                      className="card-text"
                      style={{
                        color: "white",
                        fontSize: "12px",
                        marginTop: "2rem",
                      }}
                    >
                      Deisquared logo sweatshirt
                      <br />
                      Farfetch <br />
                      $765.00
                    </p>

                    <p
                      className="card-text"
                      style={{
                        color: "white",
                        fontSize: "12px",
                      }}
                    >
                      in: <span style={{ color: "#3e5b31" }}>Amazon</span>
                    </p>
                    <button
                      className="btn btn-md"
                      style={{
                        color: "white",
                        backgroundColor: "#fdb916",
                        borderRadius: "45px",
                        width: "8rem",
                        marginTop: "2rem",
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div
              style={{
                width: "20rem",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: "white" }}>Suggested for you</h3>
            </div>
            <div
              className="card"
              style={{
                width: "20rem",
                height: "10rem",
                backgroundColor: "black",
              }}
            >
              <div className="row no-gutters" style={{ width: "200%" }}>
                <div
                  className="col-auto"
                  style={{
                    width: "100%",
                    height: "100%",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    paddingLeft: "0.5rem",
                  }}
                >
                  <a href="#">
                    <img
                      style={{
                        height: "9rem",
                        borderRadius: "10px",
                        width: "19rem",
                      }}
                      src={process.env.PUBLIC_URL + "/images/suggested.jpeg"}
                      className="img-fluid"
                      alt
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className=" row ">
            <a href="#" class="fa fa-facebook"></a>&nbsp;&nbsp;
            <a href="#" class="fa fa-twitter"></a>&nbsp;&nbsp;
            <a href="#" class="fa fa-instagram"></a>&nbsp;&nbsp;
            <a href="#" class="fa fa-youtube"></a>&nbsp;&nbsp;
          </div>
          <br />
          <div className="row">
            <div className=" col-sm-4 col-md col-6 col">
              <ul className="footer_ul_amrc">
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Shipping Policy</a>
                </li>
              </ul>
            </div>
            <div className=" col-sm-4 col-md  col-6 col">
              <ul className="footer_ul_amrc">
                <li>
                  <a href="#">Refund/Return Policy</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Confidentiality</a>
                </li>
              </ul>
            </div>
            <div className=" col-sm-4 col-md  col-6 col">
              <ul className="footer_ul_amrc">
                <li>
                  <a href="http://webenlance.com">Contact Us</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Support</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Cookie Preferences</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
