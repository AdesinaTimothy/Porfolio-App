import "./skills.css"
import UIDesign from "../assets/ui-design.png"
import WebDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";

export default function Skills() {
  return (
    <div>
      <section id= "skills">
        <span className="skillTitle">
          What I do
        </span>
        <span className="skillDesc">
          I am a skilled and passionate web designer with experince in creating visually appealingand user-friendly
          websites. I have a strong understanding of design and a keen eye for detail. I am 
          proficient in HTML, CSS, and javascript, as well as design software such as Photoshop and 
          illustrator.
        </span>
        
        <div className="skillBars">
          <div className="skillbar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>UI/IX Design</h2>
              <p>I focus on creating user-centric designs that combine functionality 
                with aesthetic appeal, 
                ensuring seamless and enjoyable interactions.</p>
            </div>
          </div>

          <div className="skillbar">
            <img src={WebDesign} alt="WedDesign" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>Web Design</h2>
              <p>My web designs prioritize responsiveness, accessibility, 
                and modern 
                visual trends to deliver impactful online experiences.</p>
            </div>
          </div>

          <div className="skillbar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>With app design, I craft intuitive and engaging interfaces, 
                emphasizing smooth navigation and user satisfaction.</p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}
