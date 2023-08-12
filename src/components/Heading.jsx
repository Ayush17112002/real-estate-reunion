import { useSelector } from "react-redux";
import { navBar } from "../redux/features/navBar/selectors";

import SearchBar from "./SearchBar";
const Heading = () => {
  const item = useSelector(navBar);
  return (
    <div className="heading relative h-24 w-full pt-3 flex flex-row items-center">
      <span className="display-text font-semibold text-3xl">
        Search properties to rent
      </span>
      <span className="absolute right-0">
        <SearchBar />
      </span>
    </div>
  );
};
export default Heading;
