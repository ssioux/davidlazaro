import "./portfolio.scss";

import portfolioData from "../Portfolio/data.json";
import { DiCss3, DiReact, DiHtml5, DiNodejsSmall } from "react-icons/di";
import { SiMongodb, SiExpress, SiAxios, SiJsonwebtokens, SiVite, SiHandlebarsdotjs } from "react-icons/si";
import { TbBrandNextjs} from "react-icons/tb";
import { BiLogoTypescript, BiLogoJavascript, BiLogoSass, BiLogoFirebase, BiLogoJquery  } from "react-icons/bi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
const Portfolio = () => {
  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx} onClick={() => window.open(port.webUrl)}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <h4 className="description">
                  {port.tech.map((eachTech, idx) => {
                    return (
                        
                    <p key={idx}>{eachTech === "js" ? <BiLogoJavascript /> : "" 
                          || eachTech === "react" ? <DiReact />: "" 
                          || eachTech === "html" ? <DiHtml5 /> : "" 
                          || eachTech === "css" ? <DiCss3/>: ""
                          || eachTech === "mongo" ? <SiMongodb />: ""
                          || eachTech === "node" ? <DiNodejsSmall />: ""
                          || eachTech === "jwt" ? <SiJsonwebtokens  />: ""
                          || eachTech === "express" ? <SiExpress />: ""
                          || eachTech === "axios" ? <SiAxios />: ""
                          || eachTech === "next" ? <TbBrandNextjs />: ""
                          || eachTech === "ts" ? <BiLogoTypescript />: ""
                          || eachTech === "sass" ? <BiLogoSass />: ""   
                          || eachTech === "vite" ? <SiVite />: "" 
                          || eachTech === "firebase" ? <BiLogoFirebase />: ""    
                          || eachTech === "handlebars" ? <SiHandlebarsdotjs />: ""  
                          || eachTech === "jquery" ? <BiLogoJquery />: ""  
                         }</p>                                                           
                    );
                  })}
                </h4>
                <button
                  className="btn"
                  onClick={() => window.open(port.codeUrl)}
                >
                 CODE <FontAwesomeIcon icon={faGithub}/>
                </button>
                {port.codeApi ? <button
                  className="btn"
                  onClick={() => window.open(port.codeApi)}
                >
                 Api <FontAwesomeIcon icon={faGithub}/>
                </button> : ""}
                
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
