import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { useEffect, useState } from "react";

const SneakerContainer = (props) => {
  const { currency, conversionRate, isOpaque } = useSelector(
    (state) => state.sneaker
  );
  const sneakerImage = props.sneaker.image;
  const sneakerName = props.sneaker.sneakerName;
  const sneakerPrice = props.sneaker.dollarPrice;
  const styleNumber = props.sneaker.styleNumber;
  const [lastWorn,setLastWorn] = useState(null);
  const dispatch = useDispatch();
  const lastWornConfig = localStorage.getItem('lastWorn');

  const handleLinkClick = () => {
    dispatch({
      type: "sneaker/updateSneakerPage",
      payload: props.sneaker,
    });
  };

  useEffect(() => {
      const input = JSON.parse(lastWornConfig).filter((sneaker) => sneaker.styleNumber === styleNumber)[0]["lastWorn"];
      let displayVal = null;
      if(!(input === null || input === undefined)) {
        const [day, month, year] =  input.split('-');
        displayVal = `${year}-${month}-${day}`;
      }
      setLastWorn(displayVal);
  }, [lastWornConfig, styleNumber]);

  return (
    <div className="item-container ">
      {!isOpaque ?
        <Link
          to="/sneaker"
          className={"sneaker-link"}
          onClick={handleLinkClick}
        >
          <div className="sneaker-list-item">
            <img
              className="sneaker-item-image"
              src={sneakerImage}
              alt="Sneaker not found"
            />
            <div className="sneaker-item-right-panel">
              <label className="sneaker-name">{sneakerName}</label>
              <div className="bottom-details">
                <label className="right-panel-price">
                  {sneakerPrice === 0
                    ? "N/A"
                    : `${currency === "USD" ? "$" : "₹"} ${currency === "USD"
                      ? sneakerPrice?.toLocaleString()
                      : Math.trunc(
                        sneakerPrice * conversionRate
                      )?.toLocaleString()
                    }`}
                </label>
                <label className="right-panel-last-worn">{lastWorn === null ? "Not Worn" : lastWorn}</label>
              </div>
            </div>
          </div>
        </Link>
        :
        <div className="sneaker-list-item">
          <img
            className="sneaker-item-image"
            src={sneakerImage}
            alt="Sneaker not found"
          />
          <div className="sneaker-item-right-panel">
            <label className="sneaker-name">{sneakerName}</label>
            <div className="bottom-details">
              <label className="right-panel-price">
                {sneakerPrice === 0
                  ? "N/A"
                  : `${currency === "USD" ? "$" : "₹"} ${currency === "USD"
                    ? sneakerPrice?.toLocaleString()
                    : Math.trunc(
                      sneakerPrice * conversionRate
                    )?.toLocaleString()
                  }`}
              </label>
              <label className="right-panel-last-worn">{lastWorn === null ? "Not Worn" : lastWorn}</label>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default SneakerContainer;
