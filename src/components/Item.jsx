import properties from "../dummy";
const Item = ({ propertyDetails, id }) => {
  const { price, location, type, name, beds, bathrooms, area, image } =
    propertyDetails;
  return (
    <div
      className={`relative ${id} h-72 w-52 p-2 border-[1] shadow-md mb-2 rounded-lg`}
    >
      <img
        src={`/static/images/${image}`}
        height="70%"
        width="100%"
        className="relative"
      />
      <div className="flex flex-col w-full p-2">
        <div className="price text-purple-600">
          ${price}/<span className="text-xs text-black">month</span>
        </div>
        <div className="name font-bold">{name}</div>
        <div className="location text-sm">{location}</div>
        <div className="bhk flex flex-row justify-start pt-2 space-x-1 text-sm">
          <div className="beds">{beds} Beds</div>
          <div className="bathrooms">{bathrooms} Bathrooms</div>
          <div className="area">{area}</div>
        </div>
      </div>
    </div>
  );
};
export default Item;
