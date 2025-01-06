import "./intro.css" 
import bg from '../../src/assets/image.png'
import {Link} from 'react-scroll';
import btnImge from "../../src/assets/hireme.png"


export default function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <div>
            <span className = "introText"> I'm </span> <span className="introName">Smith</span><br/> <span>Website Designer</span>
            </div>
            <p className="introPara">I am a skilled web designer with experience in creating <br /> visually appealing and user-friendly websites</p>
            <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500}> 
            <button className="btn"><img src={btnImge} className="btnImg" alt="Hire me" />Hire me</button> </Link>
        </div>
        <img src={bg} alt="Profile"  className="bg"/>
      </section>
    </div>
  )
}
// best