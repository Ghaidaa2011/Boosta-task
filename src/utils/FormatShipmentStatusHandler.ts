const FormatShipmentStatusHandler = (status: string): string => {
  return status
    .split("_")
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(" ");
};
export default FormatShipmentStatusHandler;