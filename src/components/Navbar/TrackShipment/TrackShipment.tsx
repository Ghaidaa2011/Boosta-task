import { FormEvent, useRef, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { actGetTrackingOrder } from "../../../store/shipments/trackingSlice";
import { useTranslation } from "react-i18next";

const TrackShipment: React.FC = () => {
  const { t } = useTranslation("global");

  const dispatch = useAppDispatch();
  const trackingNumberRef = useRef<HTMLInputElement>(null);

  // State to keep track of the last submitted tracking number
  const [lastTrackingNumber, setLastTrackingNumber] = useState<string | null>(
    null
  );

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (trackingNumberRef.current) {
      const trackingNumber = trackingNumberRef.current.value;
      if (/^\d+$/.test(trackingNumber)) {
        // Check if the tracking number is the same as the last one
        if (trackingNumber !== lastTrackingNumber) {
          dispatch(actGetTrackingOrder(Number(trackingNumber)));
          setLastTrackingNumber(trackingNumber); // Update the last tracking number
        } else {
          alert("You have already requested this tracking number.");
        }
      } else {
        alert("Please enter a valid tracking number containing only digits.");
      }
    }
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleOnSubmit}>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="text"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg custom-focus focus:border-customRed"
            placeholder={t("navbar.tracking-no")}
            required
            ref={trackingNumberRef}
            pattern="\d*"
            inputMode="numeric"
          />
          <button
            type="submit"
            className="bg-customRed absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-e-lg border focus:ring-4 focus:outline-none"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default TrackShipment;
