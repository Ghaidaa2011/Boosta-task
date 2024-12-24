import { useAppSelector } from "../../../store/hooks";

const useShipmentStatus = () => {
  const response = useAppSelector((state) => state.tracking.response);
  return { response }
}
export default useShipmentStatus