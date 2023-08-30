import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FloatingMenu from "../../components/FloatingMenu";
import SneakerContainer from "../../components/SneakerContainer";
import SummaryContainer from "../../components/SummaryContainer";
import Tabs from "../../components/Tabs";
import { sneakerConfig } from "../../configs/SneakerConfig";
import { getSortedList } from "../../utils/utils";
import "./index.scss";

const HomePage = () => {
  const { listType, isOpaque, sortType } = useSelector(
    (state) => state.sneaker
  );
  const [sneakerList, setSneakerList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setSneakerList(
      sneakerConfig.filter((sneaker) => sneaker.status === listType)
    );
    dispatch({
      type: "sneaker/updateSortType",
      payload: null,
    });
    // eslint-disable-next-line
  }, [listType]);

  useEffect(() => {
    if (sortType !== null) {
      setSneakerList(getSortedList(sortType, sneakerList));
    }
    // eslint-disable-next-line
  }, [sortType]);

  const handleTabChange = (selectedTab) => {
    dispatch({
      type: "sneaker/updateListType",
      payload: selectedTab,
    });
  };

  return (
    <>
      <div className={isOpaque ? "opaque-home-container" : "home-container"}>
        <div className="home-header">
          <div className="header-title">COLLECTION</div>
          <div className="header-tabs">
            <Tabs
              tabList={["OWNED", "WISH LIST"]}
              selectedTab={listType}
              handleChange={handleTabChange}
            />
          </div>
        </div>
        <div>
          <div className="home-summary-container">
            <SummaryContainer list={sneakerList} />
          </div>
          <div className="sneaker-list-container">
            <label className="sneaker-list-header">SNEAKERS</label>
            {sneakerList?.map((sneaker, idx) => {
              return <SneakerContainer key={idx} sneaker={sneaker} />;
            })}
          </div>
        </div>
      </div>
      <FloatingMenu />
    </>
  );
};

export default HomePage;
