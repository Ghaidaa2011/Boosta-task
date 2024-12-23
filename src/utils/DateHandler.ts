import { DateTime } from "luxon";

export const formatTimestamp = (timestampString: string | undefined): string => {
  if (!timestampString) return "Invalid date";
  const date = DateTime.fromISO(timestampString);
  return date.isValid
    ? date.toFormat("cccc MM/dd/yyyy 'at' h:mma").toLowerCase()
    : "Invalid date";
};


export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return "Invalid date";
  const date = DateTime.fromISO(dateString);
  return date.isValid
    ? date.toFormat("d LLLL yyyy")
    : "Invalid date";
};

export const formatShortDate = (dateString: string | undefined): string => {
  if (!dateString) return "Invalid date";
  const date = DateTime.fromISO(dateString);
  return date.isValid ? date.toFormat("MM/dd/yyyy") : "Invalid date";
};

export const formatShortTime = (timeString: string | undefined): string => {
  if (!timeString) return "Invalid time";
  const time = DateTime.fromISO(timeString);
  return time.isValid ? time.toFormat("h:mma").toLowerCase() : "Invalid time";
};