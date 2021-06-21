import http from "../http";
import { API_MELI } from "../constants";

const itemsRoute = async (req, res) => {
  const query = req.query.q;
  try {
    const resp = await http.get(`${API_MELI}/sites/MLA/search`, {
      params: {
        q: query,
      },
    });

    const { filters, results } = resp.data;

    const filterCategory = filters.find((filter) => filter.id === "category");
    const categories =
      filterCategory && filterCategory.values[0]
        ? filterCategory.values[0].path_from_root.map(
            (category) => category.name
          )
        : [];

    const items = results.slice(0, 4).map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      state_name: item.address.state_name,
    }));

    res.send({
      categories,
      items,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

const itemDetailRoute = async (req, res) => {
  const itemId = req.params.id;

  try {
    const responseItemData = await http.get(`${API_MELI}/items/${itemId}`);
    const responseItemDescription = await http.get(
      `${API_MELI}/items/${itemId}/description`
    );

    const itemData = responseItemData.data;

    res.send({
      item: {
        id: itemData.id,
        title: itemData.title,
        price: {
          currency: itemData.currency_id,
          amount: itemData.price,
        },
        picture: itemData.pictures[0].url,
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.sold_quantity,
        description: responseItemDescription.data.plain_text,
      },
    });
  } catch (error) {
    console.log(error);
    if (error.response.status == 404) {
      res.status(404).json({
        msg: "resource not found",
      });
    } else {
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  }
};

export { itemsRoute, itemDetailRoute };
