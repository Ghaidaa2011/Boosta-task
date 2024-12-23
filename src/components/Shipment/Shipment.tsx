import Help from "./Help/Help";
import ShipmentDetails from "./ShipmentDetails/ShipmentDetails";

const Shipment = () => {
  return (
    <div className="flex gap-10 align-start mx-16 flex-wrap">
      <ShipmentDetails />
      <Help />
    </div>
  );
};
export default Shipment;
