import useShipmentInfo from "./useShipmentInfo";
import { formatDate, formatTimestamp } from "../../../utils/DateHandler";
import { useTranslation } from "react-i18next";

const ShipmentInfo = () => {
  const { response, stateClass } = useShipmentInfo();
  const { t } = useTranslation("global");
  return (
    <div className="overflow-x-auto">
      <div className="border-b min-w-full text-sm text-gray-500">
        <div className="bg-white font-light flex justify-around flex-col md:flex-row">
          <div className="flex flex-col px-4 py-2 md:px-6 md:py-3">
            <span className="font-semibold">
              {t("shipmentInfo.shipment-number")} {response?.TrackingNumber}
            </span>
            <span
              className={`py-2 md:py-3 font-bold whitespace-nowrap dark:text-white ${stateClass(
                response?.CurrentStatus.state
              )}`}
            >
              {response?.CurrentStatus.state}
            </span>
          </div>
          <div className="flex flex-col px-4 py-2 md:px-6 md:py-3">
            <span className="font-semibold">
              {t("shipmentInfo.last-update")}
            </span>
            <span className="font-bold text-gray-900 py-2 md:py-3">
              {formatTimestamp(response?.CurrentStatus.timestamp)}
            </span>
          </div>
          <div className="flex flex-col px-4 py-2 md:px-6 md:py-3">
            <span className="font-semibold">
              {t("shipmentInfo.provider-name")}
            </span>
            <span className="font-bold text-gray-900 py-2 md:py-3">
              {response?.provider}
            </span>
          </div>
          <div className="flex flex-col px-4 py-2 md:px-6 md:py-3">
            <span className="font-semibold">
              {t("shipmentInfo.delivery-date")}
            </span>
            <span className="font-bold text-gray-900 py-2 md:py-3">
              {formatDate(response?.PromisedDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentInfo;
