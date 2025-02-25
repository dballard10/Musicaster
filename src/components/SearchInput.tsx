import { Input } from "@chakra-ui/react";
import { InputGroup } from "../components/ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    // <form
    //   onSubmit={(event) => {
    //     event.preventDefault();
    //     if (ref.current) {
    //       onSearch(ref.current.value);
    //     }
    //   }}
    // >
    <InputGroup startElement={<BsSearch />}>
      <Input
        ref={ref}
        borderRadius={20}
        placeholder="Search games..."
        variant="outline"
      />
    </InputGroup>
    //</form>
  );
};

export default SearchInput;
