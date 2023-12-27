import { AiOutlineShopping } from "react-icons/ai";
import { SiJordan } from "react-icons/si";
import { TbColorFilter } from "react-icons/tb";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";

const MenuOptions = [
    {
        icon: <AiOutlineShopping />,
        title: "Date"
    },
    {
        icon: <LiaMoneyBillWaveSolid />,
        title: "Price"
    },
    {
        icon: <CiCalendarDate />,
        title: "Worn"
    },
    {
        icon: <TbColorFilter />,
        title: "Color"
    },
    {
        icon: <SiJordan />,
        title: "Brand"
    }
]

export { MenuOptions }
