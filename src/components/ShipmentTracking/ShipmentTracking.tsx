import ShipmentInfo from "./ShipmentInfo/ShipmentInfo";
import ShipmentStepper from "./ShipmentStatus/ShipmentStepper";

const ShipmentTracking = () => {
  return (
    <div className="overflow-hidden flex justify-center flex-col border rounded-lg  mx-16 my-6">
      <ShipmentInfo />
      <ShipmentStepper />
    </div>
  );
};
export default ShipmentTracking;
