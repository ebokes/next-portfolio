import { reviews } from "@/app/utils/constants";
import ReviewCard from "../elements/ReviewCard";
import Carousel from "../elements/Carousel";

const Reviews = () => {
  return (
    <Carousel width={[35, 150, 450, 990]}>
      {reviews.map((item) => (
        <ReviewCard
          key={item.name}
          name={item.name}
          // img={item.img}
          position={item.position}
          message={item.message}
        />
      ))}
    </Carousel>
  );
};

export default Reviews;
