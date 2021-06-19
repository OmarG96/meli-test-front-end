import { useLocation } from "react-router-dom";

function useQueryURL() {
  return new URLSearchParams(useLocation().search);
}

export default useQueryURL;
