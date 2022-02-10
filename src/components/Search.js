import { ReactComponent as SearchIcon } from "../img/search.svg";
import {
  SearchBar,
  SearchField,
  SBLabel,
  HoverEffect
} from "../styles/StyleComp";

export default function Search() {
  return (
    <>
      <SearchBar>
        <SBLabel htmlFor="searchBar">
          <HoverEffect>
            <SearchIcon />{" "}
          </HoverEffect>
        </SBLabel>
        <SearchField id="searchBar" />
      </SearchBar>
    </>
  );
}
