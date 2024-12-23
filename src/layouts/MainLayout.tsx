import Navbar from "../components/Navbar/Navbar";
import Shipment from "../components/Shipment/Shipment";
import ShipmentTracking from "../components/ShipmentTracking/ShipmentTracking";
import { useAppSelector } from "../store/hooks";

const MainLayout = () => {
  const response = useAppSelector((state) => state.response);
  return (
    <div className="container mx-auto">
      <Navbar />
      {response && (
        <>
          <ShipmentTracking />
          <Shipment />
        </>
      )}
    </div>
  );
};
export default MainLayout;
