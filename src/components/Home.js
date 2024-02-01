import "../styleElements/home.css";
import headerbg from "../utils/img/header-bg.png"; 

const Home = () => {
    return (
      <>
        <header className="header">
          <div className="content">
            <h1>
              <span>Get Quick</span>
              <br />
              Medical Services
            </h1>
  
            <p>
              In today's fast-paced world, access to prompt and efficient medical
              services is of paramount importance. When faced with a medical
              emergency or seeking immediate medical attention, the ability to
              receive quick medical services can significantly impact the outcome
              of a situation.
            </p>
  
            <div className="opt">
              <input type="text" className="btn" placeholder="Enter Location" name="#" />
  
              <button className="btn">Find Hospital Beds</button>
              <button className="btn">Consult Online</button>
              <button className="btn">
                <a style={{ color: 'white' }} href="patient.html">
                  View Health Records
                </a>
              </button>
              <button className="btn">Buy Medicines</button>
            </div>
          </div>
  
          <div className="image">
            <span className="image__bg"></span>
            <img src={headerbg} alt="doctor" />
          </div>
  
          <div className="image__content">
            <div className="ac"></div>
            <div className="details">
              <h4>1520+</h4>
              <p>Active Clients</p>
            </div>
          </div>
        </header>
      </>
    );
  };
  
  export default Home;
  