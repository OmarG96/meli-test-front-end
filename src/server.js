import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config";
import axios from "axios";
import path from "path";

const API_MELI = "https://api.mercadolibre.com";

// initializing packages
const app = express();
const http = axios.create();

// settings
app.set("port", process.env.PORT || 3000);

// middlwares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// routes
app.get("/api/items", async (req, res) => {
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
    res.send("ERROR");
  }
});

app.get("/api/items/:id", async (req, res) => {
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
    res.send("ERROR");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
