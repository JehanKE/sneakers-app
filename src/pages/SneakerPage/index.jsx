import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillBagFill } from "react-icons/bs";
import { getTodaysDate, mapBrandToIcon } from "../../utils/utils";
import { useEffect, useState } from "react";
import "./index.scss";

const SneakerPage = () => {
  const { sneakerPage } = useSelector((state) => state.sneaker);
  const [lastWorn, setLastWorn] = useState(null);
  const lastWornConfig = localStorage.getItem('lastWorn');

  const handleDateChange = (event) => {
    const currentLastWorn = JSON.parse(lastWornConfig);
    const index = currentLastWorn.findIndex(sneaker => sneaker.styleNumber === sneakerPage.styleNumber);
    currentLastWorn.splice(index, 1, { styleNumber: sneakerPage.styleNumber, lastWorn: event.target.value });
    localStorage.setItem("lastWorn",JSON.stringify(currentLastWorn));
  };

  useEffect(() => {
    let defaultVal = null;
    const input = JSON.parse(lastWornConfig).filter((sneaker) => sneaker.styleNumber === sneakerPage.styleNumber)[0]["lastWorn"];
    if(!(input === null || input === undefined)) {
      const [day, month, year] =  input.split('-');
      defaultVal = `${year}-${month}-${day}`;
    }
    setLastWorn( (input === null || input === undefined) ? null : defaultVal );
  }, [lastWornConfig, sneakerPage.styleNumber]);

  return (
    <div className="sneaker-page-container">
      <div className="sneaker-page-header">
        <Link to="/" className="back-link">
          <IoIosArrowBack className="back-icon" />
        </Link>
        <label className="brand-icon">
          {mapBrandToIcon(sneakerPage.brand)}
        </label>
        <a href={sneakerPage.URL} target="_blank" rel="noreferrer" className="buy-link">
          <BsFillBagFill className="buy-icon" />
        </a>
      </div>
      <div className="sneaker-page-image-container">
        <img
          src={sneakerPage.image}
          alt="Sneaker not found"
          className="sneaker-page-image"
        />
      </div>
      <div className="details-conatiner">
        <label className="details-label">DETAILS</label>
        <div className="sneaker-details">
          <div className="detail-wrapper">
            <label className="detail-title">NAME</label>
            <label className="detail-content">{sneakerPage.sneakerName}</label>
          </div>
          <div className="detail-wrapper">
            <label className="detail-title">PRICE</label>
            <label className="detail-content price">
              {sneakerPage.dollarPrice === 0
                ? "N/A"
                : `$${sneakerPage.dollarPrice}`}
            </label>
          </div>
          <div className="detail-wrapper">
            <label className="detail-title">PURCHASE LOCATION</label>
            <label className="detail-content">
              {sneakerPage.purchaseLocation}
            </label>
          </div>
          <div className="detail-wrapper">
            <label className="detail-title">STYLE NUMBER</label>
            <label className="detail-content">{sneakerPage.styleNumber}</label>
          </div>
          <div className="detail-wrapper">
            <label className="detail-title">RELEASE DATE</label>
            <label className="detail-content">{sneakerPage.releaseDate}</label>
          </div>
          <div className="detail-wrapper">
            <label className="detail-title">LAST WORN</label>
            <label className="detail-content">
              {console.log(getTodaysDate())}
              <input className="date-picker" type="date" onChange={handleDateChange} defaultValue={lastWorn} max={getTodaysDate()}/>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SneakerPage;
