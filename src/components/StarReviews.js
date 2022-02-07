import { FrontStars } from "../styles/StyleComp";
import { ReactComponent as Star } from "../img/star.svg";

export default function StarReview({ rating }) {
  return (
    <>
      <div style={{ position: "absolute", width: "200px", height: "30px" }}>
        <Star fill="lightgrey" />
        <Star fill="lightgrey" />
        <Star fill="lightgrey" />
        <Star fill="lightgrey" />
        <Star fill="lightgrey" />
        <a style={{ paddingLeft: "4px", fontSize: ".8em" }} href="empty">
          {rating.count}
        </a>
      </div>
      <FrontStars width={rating.rate * 10}>
        <div style={{ position: "absolute", width: "200px" }}>
          <Star fill="#D4AF37" stroke="#D4AF37" />
          <Star fill="#D4AF37" stroke="#D4AF37" />
          <Star fill="#D4AF37" stroke="#D4AF37" />
          <Star fill="#D4AF37" stroke="#D4AF37" />
          <Star fill="#D4AF37" stroke="#D4AF37" />
        </div>
      </FrontStars>
    </>
  );
}
//interesting challenge to load the stars
