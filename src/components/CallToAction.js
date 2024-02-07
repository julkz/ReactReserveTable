import { Link } from "react-router-dom";
import Img from "../restaurantchefB.jpg";

export default function CallToAction() {
  return (
    <div className="callToAction">
      <section>
        <h2 className="primaryfont">Little lemon Restaurant</h2>
        <p className="secondaryfont">
          Come and enjoy the taste of our unique recipes!
        </p>
        <Link to="/booking"><button className="btn">Reserve</button>
        </Link>
      </section>
      <section>
        <img src={Img} alt="Banner for reservation"/>
      </section>
    </div>
  );
}
