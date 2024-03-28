import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useState, type ChangeEvent } from "react";

interface SearchProps {
  handleSearch: (value: string) => void;
}

const Search = ({ handleSearch }: SearchProps) => {
  const [term, setTerm] = useState("");

  function changeTerm(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTerm(e.target.value);
    handleSearch(e.target.value);
  }

  return (
    <div className="flex items-center gap-2 relative">
      <Input
        value={term}
        onChange={(e) => changeTerm(e)}
        placeholder="Search"
        className="pl-12
        "
      />
      <SearchIcon className="absolute left-4 w-5 h-5" />
    </div>
  );
};

export default Search;
