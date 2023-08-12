import Heading from "./Heading";
import Items from "./Items";
import Filter from "./Filter";
const MainBody = () => {
  return (
    <div className="main-body bg-purple-50 min-h-[calc(100vh-96px)]">
      <div className="mt-24 ml-48 mr-48">
        <Heading />
        <Filter />
        <Items />
      </div>
    </div>
  );
};
export default MainBody;
