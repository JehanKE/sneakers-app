import { useEffect, useState } from "react";
import { PiSneakerFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

const SummaryContainer = (props) => {
  const { currency } = useSelector((state) => state.sneaker);
  const sneakerList = props.list;
  const [totalVal, setTotalVal] = useState();
  const [sneakerCount, setSneakerCount] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalVal(
      sneakerList?.reduce(function (prev, current) {
        return prev + +current.dollarPrice;
      }, 0)
    );
    setSneakerCount(
      sneakerList?.reduce(function (prev) {
        return prev + +1;
      }, 0)
    );
  }, [sneakerList]);

  const handleCurrencyChange = async () => {
    const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json");
    const data = await response.json();
    const convRate = data.inr;
    if (convRate !== null) {
      setTotalVal(
        currency === "USD"
          ? Math.trunc(totalVal * convRate)
          : sneakerList?.reduce(function (prev, current) {
              return prev + +current.dollarPrice;
            }, 0)
      );
      dispatch({
        type: "sneaker/updateConversionRate",
        payload: convRate,
      });
      dispatch({
        type: "sneaker/updateCurrency",
        payload: currency === "USD" ? "INR" : "USD",
      });
    }
  }

  return (
    <div className="summary-container" onClick={handleCurrencyChange}>
      <div className="summary-value-div">
        <label className="total-val-label">TOTAL VALUE</label>
        <label className="total-amount-label">
          {currency === "USD" ? "$" : "₹"} {totalVal?.toLocaleString()}
        </label>
      </div>
      <div className="summary-shoe-count-container">
        <div className="shoe-count-icon">
          <PiSneakerFill />
        </div>
        <div className="shoe-count-text">
          <label className="count-text-header">SNEAKERS</label>
          <label className="count-text-number">
            {sneakerCount} in your collection.
          </label>
        </div>
      </div>
    </div>
  );
};

export default SummaryContainer;
