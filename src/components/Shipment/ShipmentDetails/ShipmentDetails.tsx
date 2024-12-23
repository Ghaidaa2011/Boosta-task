import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../store/hooks";
import { FormatShipmentStatusHandler } from "../../../utils";
import { formatShortDate, formatShortTime } from "../../../utils/DateHandler";

const ShipmentDetails = () => {
  const { t } = useTranslation("global");

  const response = useAppSelector((state) => state.response);

  const shipmentDetails = response?.TransitEvents.map((detail, index) => (
    <tr
      key={index}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap"
      >
        {detail.hub}
      </th>
      <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
        {formatShortDate(response.PromisedDate)}
      </td>
      <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
        {formatShortTime(detail.timestamp)}
      </td>
      <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
        {FormatShipmentStatusHandler(detail.state)}
      </td>
    </tr>
  ));
  return (
    <div className="sm:overflow-x-scroll md:overflow-x-auto flex flex-col grow">
      <h2 className="mb-5">{t("shipmentDetails.shipment-details")}</h2>
      <div className="relative border rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-gray-400 font-bold text-base"
              >
                {t("shipmentDetails.branch")}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-gray-400 font-bold text-base"
              >
                {t("shipmentDetails.date")}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-gray-400 font-bold text-base"
              >
                {t("shipmentDetails.date")}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-gray-400 font-bold text-base"
              >
                {t("shipmentDetails.details")}
              </th>
            </tr>
          </thead>
          <tbody>{shipmentDetails}</tbody>
        </table>
      </div>
    </div>
  );
};
export default ShipmentDetails;
