import "../styles/Products.css"
import StarRating from "./StarRating"
 function Label({ items }) {
  return (
    <>
    <div className="productCard">
      <div className="productImage">
        <img src={items.image} alt={items.title} />
      </div>
      <div className="productDetails">
        <h1>{items.title}</h1>
        <p className="category">{items.category}</p>
        <p className="description">{items.description}</p>
        <div className="priceAndRating">
          <h2>${items.price}</h2>
          <StarRating rating={items.rating} />
        </div>
      </div>
    </div>
    </>
  );
};
export default Label