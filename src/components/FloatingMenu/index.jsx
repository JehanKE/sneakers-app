import { FloatButton } from "antd";
import { ImSortAmountAsc } from "react-icons/im";
import { useDispatch } from "react-redux";
import { MenuOptions } from "../../configs/FloatingMenuConfig";
import { useState } from "react";
import "./index.scss";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleFltContainerClick = () => {
    dispatch({
      type: "sneaker/updateIsOpaque",
    });
    setIsOpen(!isOpen);
  };

  const handleFltBtnClick = (option) => {
    dispatch({
      type: "sneaker/updateSortType",
      payload: option,
    });
    setIsOpen(false);
  };

  return (
    <div onClick={handleFltContainerClick}>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24 }}
        icon={<ImSortAmountAsc />}
        open={isOpen}
      >
        {MenuOptions?.map((option, idx) => {
          return (
            <FloatButton
              key={idx}
              onClick={() => handleFltBtnClick(option.title)}
              icon={
                <div>
                  <label className="floating-label"> {option.title} </label>
                  {option.icon}
                </div>
              }
            />
          );
        })}
      </FloatButton.Group>
    </div>
  );
};

export default FloatingMenu;
