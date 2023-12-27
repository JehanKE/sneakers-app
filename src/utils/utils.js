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
    case "Worn":
      const modifiedList = tempList?.map(sneaker => {
        const lastWornAddVal = JSON.parse(localStorage.getItem('lastWorn')).filter((localSneaker) => localSneaker.styleNumber === sneaker.styleNumber)[0]["lastWorn"];
        return {...sneaker, lastWorn: lastWornAddVal};
      });
      const sortedList = modifiedList?.sort((a, b) => new Date(a.lastWorn) - new Date(b.lastWorn))
      sortedList?.forEach(sneaker => {
        delete sneaker['lastWorn'];
      });
      return sortedList;
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

const getTodaysDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return (yyyy+'-'+mm+'-'+dd);
}

export { getSortedList, mapBrandToIcon, getLastWornConfig, getTodaysDate };
