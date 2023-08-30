import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

const SneakerContainer = (props) => {
  const { currency, conversionRate, isOpaque } = useSelector(
    (state) => state.sneaker
  );
  const sneakerImage = props.sneaker.image;
  const sneakerName = props.sneaker.sneakerName;
  const sneakerPrice = props.sneaker.dollarPrice;
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch({
      type: "sneaker/updateSneakerPage",
      payload: props.sneaker,
    });
  };

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
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default SneakerContainer;
