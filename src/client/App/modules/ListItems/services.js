import { http } from "../../../utils/http";

export const searchItems = async (item) => {
  const response = await http.get("/api/items", {
    params: {
      q: item,
    },
  });

  return response.data;
};
