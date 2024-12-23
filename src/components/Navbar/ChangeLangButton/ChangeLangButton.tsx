import { useTranslateContext } from "../../../context/TranslateContext";

const ChangeLangButton = () => {
  const { handleChangeLanguage, EnLang } = useTranslateContext();
  return (
    <li>
      <a
        href="#"
        className="block py-2 px-3 text-customRed rounded font-semibold md:border-0  md:p-0"
      >
        <button
          className={`${EnLang ? "" : "hidden"}`}
          onClick={() => handleChangeLanguage("ar")}
        >
          عربي
        </button>
        <button
          className={`${EnLang ? "hidden" : ""}`}
          onClick={() => handleChangeLanguage("en")}
        >
          English
        </button>
      </a>
    </li>
  );
};
export default ChangeLangButton;
