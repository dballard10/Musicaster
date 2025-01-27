import { SimpleGrid } from "@chakra-ui/react";
import TrackCard from "./TrackCard";
// import TrackCardContainer from "./TrackCardContainer";
// import TrackCardSkeleton from "./TrackCardSkeleton";
// import { useEffect, useState } from "react";
//import InfiniteScroll from "react-infinite-scroll-component";

const TrackGrid = () => {
  // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay of 1 second
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000); // 1000ms = 1 second

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <SimpleGrid columns={{ sm: 2, md: 3, lg: 5, xl: 7 }} padding="10px" gap={6}>
      {/* {isLoading &&
        skeletons.map((skeleton) => (
          <TrackCardContainer>
            <TrackCardSkeleton />
          </TrackCardContainer>
        ))} */}
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
    </SimpleGrid>
  );
};

export default TrackGrid;
