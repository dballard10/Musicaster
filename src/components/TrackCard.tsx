import { Card, CardBody, Heading, Image, Link } from "@chakra-ui/react";
import trackImage from "../assets/DefaultTrackImage.png";

// interface Props {
//   track: Track;
// }

const TrackCard = () => {
  return (
    <Card.Root>
      <Image src={trackImage} />
      <CardBody>
        <Heading fontSize="1xl">
          <Link href="/tracks/1">Track Name</Link>
        </Heading>
      </CardBody>
    </Card.Root>
  );
};

export default TrackCard;
