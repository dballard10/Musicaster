import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import trackImage from "../assets/DefaultTrackImage.png";

// interface Props {
//   track: Track;
// }

const TrackCard = () => {
  return (
    <Card.Root>
      <Image src={trackImage} />
      <CardBody>
        <Heading fontSize="2xl">
          <Text>Track Name</Text>
        </Heading>
      </CardBody>
    </Card.Root>
  );
};

export default TrackCard;
