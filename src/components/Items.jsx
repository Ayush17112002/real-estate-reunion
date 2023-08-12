import { useSelector } from "react-redux";
import { propertiesSelector } from "../redux/features/properties/selectors";
import Item from "./Item";
const Items = () => {
  const filteredProperties = useSelector(propertiesSelector);
  return (
    <div className="items pt-2 grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
      {Object.keys(filteredProperties).map((p) => (
        <Item key={p} propertyDetails={filteredProperties[p]} id={p} />
      ))}
    </div>
  );
};
export default Items;
