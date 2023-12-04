import "../styles/Products.css"
const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < Math.floor(rating.rate) ? 'star-filled' : 'star-empty'}>
      &#9733; {}
    </span>
  ));

  return <div className="star-rating">
    {stars}from {rating.count}
    </div>;
};

export default StarRating;