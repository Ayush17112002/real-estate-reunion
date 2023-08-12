import { useSelector, useDispatch } from "react-redux";
import {
  setLocation,
  setDate,
  setPrice,
  setPropertyType,
} from "../redux/features/filter/slice";
import { setProperties } from "../redux/features/properties/slice";
import properties from "../dummy";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useEffect, useState } from "react";
import { filterSelector } from "../redux/features/filter/selectors";

const locationOptions = [
  { label: "Anywhere", value: "Anywhere" },
  { label: "New York, USA", value: "New York, USA" },
  { label: "London, UK", value: "London, UK" },
];
const priceOptions = [
  { label: "$500-$2500", value: { lowestPrice: 500, highestPrice: 2500 } },
  { label: "$2500-$4500", value: { lowestPrice: 2500, highestPrice: 4500 } },
  { label: "$4500-$6500", value: { lowestPrice: 4500, highestPrice: 6500 } },
  { label: "Above $6500", value: { lowestPrice: 6500, highestPrice: -1 } },
];
const propertyTypes = [
  { label: "Houses", value: "houses" },
  { label: "Villas", value: "villas" },
  { label: "Flats", value: "flats" },
];
const Filter = () => {
  const dispatch = useDispatch();
  const filterOptions = useSelector(filterSelector);
  useEffect(() => {
    const id = setTimeout(() => {
      const filteredProperties = {};
      Object.keys(properties).forEach((id) => {
        const p = properties[id];
        if (
          p.price >= filterOptions.lowestPrice &&
          p.price <= filterOptions.highestPrice &&
          p.type === filterOptions.type &&
          (p.location === filterOptions.location ||
            filterOptions.location === "Anywhere")
        )
          filteredProperties[id] = p;
      });
      dispatch(setProperties(filteredProperties));
    }, 500);
    return (id) => {
      clearTimeout(id);
    };
  }, [filterOptions]);
  return (
    <div className="filter-tab relative h-24 w-full p-2 flex flex-row items-center justify-between border-[2] shadow-sm rounded-lg bg-white ">
      <div className="location flex flex-col space-y-2 pr-2 border-r-2">
        <div>Location</div>
        <Select
          options={locationOptions}
          defaultValue={{
            label: filterOptions.location,
            value: filterOptions.location,
          }}
          onChange={(e) => {
            dispatch(setLocation(e.label));
          }}
        />
      </div>
      <div className="date flex flex-col space-y-2 pr-2 border-r-2">
        <div>When</div>
        <DatePicker
          selected={filterOptions.date}
          onChange={(date) => {
            dispatch(setDate(date));
          }}
        />
      </div>
      <div className="price flex flex-col pr-2 space-y-2 border-r-2">
        <div>Price</div>
        <Select
          options={priceOptions}
          defaultValue={{
            label: `$${filterOptions.lowestPrice}-$${filterOptions.highestPrice}`,
            value: {
              lowestPrice: filterOptions.lowestPrice,
              highestPrice: filterOptions.highestPrice,
            },
          }}
          onChange={(e) => {
            dispatch(
              setPrice({
                lowestPrice: e.value.lowestPrice,
                highestPrice: e.value.highestPrice,
              })
            );
          }}
        ></Select>
      </div>
      <div className="property-type flex flex-col space-y-2">
        <div>Property Type</div>
        <Select
          options={propertyTypes}
          defaultValue={{
            label: `${filterOptions.type}`,
            value: filterOptions.type.toLowerCase(),
          }}
          onChange={(e) => {
            dispatch(setPropertyType(e.label));
          }}
        ></Select>
      </div>
    </div>
  );
};
export default Filter;
