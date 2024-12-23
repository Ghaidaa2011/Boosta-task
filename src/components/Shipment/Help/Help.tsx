import Lottie from "lottie-react";
import Problem from "../../../assets/lottieFiles/problem.json";
import { useTranslation } from "react-i18next";

const Help = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <div className="flex flex-col">
        <h2 className="mb-5">{t("help.delivery-address")}</h2>
        <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex items-center gap-6">
            <Lottie
              animationData={Problem}
              style={{ height: "150px", width: "150px" }}
            />
            <div>
              <p className="text-sm font-semibold ">{t("help.need-help")}</p>
              <button className="text-sm w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                {t("help.report-problem")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
