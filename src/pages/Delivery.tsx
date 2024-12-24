import Lottie from "lottie-react";
import DeliveryLottie from "../assets/lottieFiles/delivery.json";
import { useTranslation } from "react-i18next";

const Delivery = () => {
  const { t } = useTranslation("global");

  return (
    <div className="flex justify-center align-middle flex-col flex-wrap mt-[40px]">
      <p className="text-gray-900 text-center font-bold text-3xl">
        {t("navbar.track-shipment")}
      </p>
      <div className="flex justify-center">
        <Lottie
          animationData={DeliveryLottie}
          style={{ height: "400px", width: "400px" }}
        />
      </div>
    </div>
  );
};
export default Delivery;
