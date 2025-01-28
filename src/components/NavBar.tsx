import { HStack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
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
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
