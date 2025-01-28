import { SimpleGrid } from "@chakra-ui/react";
import TrackCard from "./TrackCard";
import TrackCardContainer from "./TrackCardContainer";
import TrackCardSkeleton from "./TrackCardSkeleton";
import { useEffect, useState } from "react";

const TrackGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1000ms = 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <SimpleGrid columns={{ sm: 3, md: 5, lg: 7, xl: 9 }} padding="10px" gap={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <TrackCardContainer key={skeleton}>
            <TrackCardSkeleton />
          </TrackCardContainer>
        ))}
      {!isLoading &&
        skeletons.map(() => (
          <TrackCardContainer>
            <TrackCard />
          </TrackCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default TrackGrid;
