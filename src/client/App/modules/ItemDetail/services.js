import { http } from "../../../utils/http";

export const getItemDetail = async (itemId) => {
  const response = await http.get(`/api/items/${itemId}`);

  return response.data;
};
