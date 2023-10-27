import { reviews } from "@/app/utils/constants";
import ReviewCard from "../../utils/ReviewCard";
import Carousel from "../../utils/Carousel";
import { Heading } from "@chakra-ui/react";

const Reviews = () => {
  return (
    <>
      <Heading mb={"-10px"} fontSize={"17px"}>
        Recommendations
      </Heading>
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
    </>
  );
};

export default Reviews;
