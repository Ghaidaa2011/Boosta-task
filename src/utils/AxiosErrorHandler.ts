import { isAxiosError } from "axios";
const AxiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    return error.response?.data.error || error.response?.data.message || error.message;
  } else {
    return "An unexpected error";
  }
}
export default AxiosErrorHandler