import { SiJordan } from "react-icons/si";
import { TbColorFilter } from "react-icons/tb";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";

const MenuOptions = [
    {
        icon: <CiCalendarDate />,
        title: "Date"
    },
    {
        icon: <LiaMoneyBillWaveSolid />,
        title: "Price"
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
