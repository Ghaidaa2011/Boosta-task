import useShipmentStatus from "./useShipmentStatus";
import Delivered from "../../../assets/svg/delivered.svg?react";
import { FormatShipmentStatusHandler } from "../../../utils";
const ShipmentStepper = () => {
  const { response } = useShipmentStatus();
  const isDelivered = response?.CurrentStatus.state === "DELIVERED";
  const shippingDetails = response?.TransitEvents.map((event, index) => {
    const isLastItem = index === response?.TransitEvents.length - 1;
    return (
      <li
        key={index}
        className={`md:shrink md:basis-0 flex-1 group flex md:block ${
          isLastItem ? "flex-none" : ""
        }`}
      >
        <div className="min-w-5 min-h-5 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span
            className={`size-5 flex justify-center items-center shrink-0 ${
              isDelivered ? "bg-green-500" : "bg-customRed"
            } font-medium text-gray-800 rounded-full`}
          >
            <Delivered />
          </span>
          <div
            className={`${
              isDelivered ? "bg-green-500" : "bg-customRed"
            } w-px h-full md:mt-0 md:w-full md:h-px md:flex-1 group-last:hidden`}
          ></div>
        </div>
        <div className="grow md:grow-0 md:mt-3 pb-5 ">
          <span className="sm:ps-3 md:ps-3 lg:ps-0 block text-sm font-medium text-gray-800 text-nowrap">
            {FormatShipmentStatusHandler(event.state)}
          </span>
        </div>
      </li>
    );
  });
  return (
    <ul className="lg:overflow-x-auto relative px-5 pt-5 flex flex-col md:flex-row">
      {shippingDetails}
    </ul>
  );
};
export default ShipmentStepper;
