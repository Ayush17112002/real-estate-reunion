import { useEffect, useState } from "react";
import properties from "../dummy";
import { setProperties } from "../redux/features/properties/slice";
import { useDispatch } from "react-redux";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [phrase, setPhrase] = useState("");
  const inputHandler = (e) => {
    setPhrase(e.target.value);
  };
  useEffect(() => {
    const id = setTimeout(() => {
      const regex = new RegExp(phrase, "i");
      const filteredProperties = {};
      Object.keys(properties).forEach((id) => {
        const p = properties[id];
        if (
          regex.test(p.location) ||
          regex.test(p.name.toLowerCase()) ||
          regex.test(p.type.toLowerCase())
        )
          filteredProperties[id] = p;
      });
      console.log(filteredProperties);
      dispatch(setProperties(filteredProperties));
    }, 500);
    return (id) => {
      clearTimeout(id);
    };
  }, [phrase]);
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="SearchwithSearchBar"
        onChange={inputHandler}
        className="text-lg p-2 border-2 rounded-md"
      />
    </div>
  );
};
export default SearchBar;
