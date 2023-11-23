import "./portfolio.scss";

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
// import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  // const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    getPortfolio();
  });

  const getPortfolio = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "portfolio"));

      setPortfolio(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    } catch (error) {
      console.log("portfolio-error",error)
      // navigate("/error");
    }
  };

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(port.webUrl)}
                >
                  View
                </button>

                <button
                  className="btn"
                  onClick={() => window.open(port.codeUrl)}
                >
                  Code
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  return (
    <>
      <section className="portfolio-page" id="projects">
        <h1 className="page-title">Projects</h1>
        <div>{renderPortfolio(portfolio)}</div>
      </section>
    </>
  );
};

export default Portfolio;
