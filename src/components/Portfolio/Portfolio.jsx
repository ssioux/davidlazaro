import "./portfolio.scss";

import portfolioData from "../Portfolio/data.json";

const Portfolio = () => {
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
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </section>
    </>
  );
};

export default Portfolio;
