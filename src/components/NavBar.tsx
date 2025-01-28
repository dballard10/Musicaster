import { HStack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
//import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <HStack>
          <Image src={logo} boxSize="60px" objectFit="cover" />
          <Text fontSize="2xl" fontWeight="bold">
            Musicaster
          </Text>
        </HStack>
      </Link>
      {/* <SearchInput /> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
