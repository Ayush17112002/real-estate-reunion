import NavBarItem from "./NavBarItem";
import Select from "react-select";
const NavBar = () => {
  const customStyles = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      "&:hover": {
        backgroundColor: "#cf03fc",
      },

      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#000000" }),
  };
  return (
    <div className="navbar backdrop-blur-3xl fixed top-0 flex flex-row w-full h-24 border-b-2 z-10">
      <span className="logo relative flex flex-row items-center ml-5 mr-5">
        <NavBarItem className="font-semibold text-xl">Estatery</NavBarItem>
      </span>
      <span className="relative flex flex-row justify-center items-center font-normal">
        <NavBarItem className="text-base font-normal">Rent</NavBarItem>
        <NavBarItem className="text-base font-normal ">Buy</NavBarItem>
        <NavBarItem className="text-base font-normal">Sell</NavBarItem>
        <Select
          options={[{ value: "manage-property", label: "Manage Property" }]}
          defaultValue={{
            value: "manage-property",
            label: "Manage Property",
          }}
          styles={customStyles}
        ></Select>
        <Select
          options={[{ value: "resources", label: "Resources" }]}
          defaultValue={{ value: "resources", label: "Resources" }}
          styles={customStyles}
        ></Select>
      </span>
      <span className="absolute flex flex-row items-center justify-center right-5 h-full">
        <button className="border-slate-500 border-2 rounded-md pl-4 pr-4 pt-1.5 pb-1.5 ml-4 mr-4 hover:bg-[#fc03f4]">
          Login
        </button>
        <button className="border-slate-500 border-2 rounded-md pl-4 pr-4 pt-1.5 pb-1.5 ml-4 mr-4 hover:bg-[#fc03f4]">
          Signup
        </button>
      </span>
    </div>
  );
};

export default NavBar;
