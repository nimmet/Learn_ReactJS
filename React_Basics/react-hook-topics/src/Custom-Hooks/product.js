import React from "react";
import PropTypes from "prop-types";

const defaultImg =
  "https://cdn.siasat.com/wp-content/uploads/2020/10/Uyghurn-Muslim.jpg";

const Product = ({ image, name, price }) => {
    const url = image && image[0].url
  return (
    <article className="item">
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
      
      <img src={url || defaultImg} alt={name || 'default name'} />
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImg,
// };
export default Product;
