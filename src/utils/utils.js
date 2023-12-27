import { SiJordan, SiPuma, SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { sneakerConfig } from "../configs/SneakerConfig";

const getSortedList = (sortType, list) => {
  const tempList = [...list];
  switch (sortType) {
    case "Date":
      return tempList?.sort((a, b) =>
        a.purchaseOrder > b.purchaseOrder ? 1 : -1
      );
    case "Price":
      return tempList?.sort((a, b) => (a.dollarPrice > b.dollarPrice ? 1 : -1));
    case "Color":
      return tempList?.sort((a, b) => (a.color > b.color ? 1 : -1));
    case "Brand":
      return tempList?.sort((a, b) => (a.brand > b.brand ? 1 : -1));
    default:
      return tempList;
  }
};

const mapBrandToIcon = (brand) => {
  switch (brand) {
    case "Jordan":
      return <SiJordan />;
    case "Nike":
      return <SiNike />;
    case "Adidas":
      return <CgAdidas />;
    case "Puma":
      return <SiPuma />;
    default:
      break;
  }
};

const getLastWornConfig = () => {
  const lastWornConfig = [];
  sneakerConfig.forEach(sneaker => {
    lastWornConfig.push(
      { styleNumber: sneaker.styleNumber, lastWorn: null }
    )
  });
  return lastWornConfig;
};

export { getSortedList, mapBrandToIcon, getLastWornConfig };
