import yellowStar from "../../../assets/yellow-star.png";

const Rating = ({ rating }) => {
 return (
  <div className="flex flex-row my-1 items-center">
    <img src={yellowStar} alt="rating-star" className="mr-1 w-6 h-6" />
   <span className="text-xl font-mono font-bold w-full">{rating}</span>
  </div>
 );
};

export default Rating;