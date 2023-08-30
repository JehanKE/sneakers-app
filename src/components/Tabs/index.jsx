import "./index.scss";

const Tabs = (props) => {
  const { tabList, selectedTab, handleChange } = props;

  return (
    <div className="tab-container">
      {tabList?.map((tab, idx) => (
        <div
          key={idx}
          className={selectedTab === tab ? "selected-tab-text" : "tab-text"}
          onClick={() => handleChange(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
