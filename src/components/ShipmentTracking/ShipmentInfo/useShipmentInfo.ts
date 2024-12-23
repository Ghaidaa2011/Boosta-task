import { useAppSelector } from "../../../store/hooks";

const useShipmentInfo = () => {
  const response = useAppSelector(state => state.response);
  const stateClass = (state: string | undefined) => {
    switch (state) {
      case "DELIVERED":
        return "text-green-500";
      case "CANCELLED":
        return "text-red-500";
      default:
        return "text-gray-900";
    }
  };
  return { stateClass, response }
}
export default useShipmentInfo;