import { reviews } from "@/app/utils/constants";
import ReviewCard from "../../utils/ReviewCard";
import Carousel from "../../utils/Carousel";
import { Box, Heading } from "@chakra-ui/react";
import { Title } from "@/app/utils/reuseables";

const Reviews = () => {
  return (
    <Box id="recommendations">
      <Title mb={"30px"} fontSize={"17px"}>
        Recommendations
      </Title>
      <Carousel>
        {reviews.map((item) => (
          <ReviewCard
            key={item.name}
            name={item.name}
            img={item.img}
            position={item.position}
            message={item.message}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default Reviews;
