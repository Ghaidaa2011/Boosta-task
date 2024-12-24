import { useAppSelector } from "../../../store/hooks";

const useShipmentInfo = () => {
  const response = useAppSelector(state => state.tracking.response);
  const stateClass = (state: string | undefined) => {
    switch (state) {
      case "DELIVERED":
        return "text-green-500";
      case "CANCELLED":
        return "text-red-500";
      default:
        return "text-yellow-300";
    }
  };
  return { stateClass, response }
}
export default useShipmentInfo;