import Lottie from "lottie-react";
import ErrorLottie from "../assets/lottieFiles/error.json";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation("global");
  return (
    <div className="flex justify-center align-middle flex-col flex-wrap mt-[40px]">
      <div className="flex justify-center align-middle flex-col flex-wrap mt-[40px]">
        <div className="flex justify-center">
          <Lottie
            animationData={ErrorLottie}
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
      <p className="text-gray-900 text-center font-bold text-xl">
        {t("error.invalid")}
      </p>
    </div>
  );
};
export default Error;
