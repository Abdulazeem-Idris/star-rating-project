import { range } from './utils';

function StarRating({ rating }) {
  // Define a variable for the star element
  const starElement = (
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
  );
  // Create an array of star elements based on the rating
  const stars = Array.from({ length: rating }, (v, index) => (
    <div className="star-wrapper" key={index}>
      {starElement}
    </div>
  ));
  return <div className="star-wrapper">{stars}</div>;
}

export default StarRating;
