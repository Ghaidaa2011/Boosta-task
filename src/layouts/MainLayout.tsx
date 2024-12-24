import Delivery from "../pages/Delivery";
import Navbar from "../components/Navbar/Navbar";
import Shipment from "../components/Shipment/Shipment";
import ShipmentTracking from "../components/ShipmentTracking/ShipmentTracking";
import { useAppSelector } from "../store/hooks";
import Error from "../pages/Error";

const MainLayout = () => {
  const { response, error } = useAppSelector((state) => state);

  return (
    <div className="container mx-auto">
      <Navbar />
      {error ? (
        <Error />
      ) : response ? (
        <>
          <ShipmentTracking />
          <Shipment />
        </>
      ) : (
        <Delivery />
      )}
    </div>
  );
};
export default MainLayout;
