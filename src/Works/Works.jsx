import "./Work.css"
import Portfolio1 from "../assets/portfolio-1.png";
import Portfolio2 from "../assets/portfolio-2.png";
import Portfolio3 from "../assets/portfolio-3.png";
import Portfolio4 from "../assets/portfolio-4.png";
import Portfolio5 from "../assets/portfolio-5.png";
import Portfolio6 from "../assets/portfolio-6.png";


export default function Works() {
  return (
    <div>
      <section id="works">
        <h2 className="workstitle"> My portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and </span>
        <div className="worksImgs">
          <img className="worksImg" src={Portfolio1} alt="worksIng" />
          <img className="worksImg" src={Portfolio2} alt="worksIng" />
          <img className="worksImg" src={Portfolio3} alt="worksIng" />
          <img className="worksImg" src={Portfolio4} alt="worksIng" />
          <img className="worksImg" src={Portfolio5} alt="worksIng" />
          <img className="worksImg" src={Portfolio6} alt="worksIng" />
        </div>
        <button className="worksBtn">See more</button>
      </section>
    </div>
  )
}
