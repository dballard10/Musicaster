import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "../components/ui/skeleton";

const TrackCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="175px" width="175px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};

export default TrackCardSkeleton;
