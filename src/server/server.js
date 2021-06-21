import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackConfig from "../../webpack.config";
import path from "path";
import paths from "./paths";
import { itemDetailRoute, itemsRoute } from "./routes/items";

// initializing packages
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlwares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// routes
app.get(paths.items, itemsRoute);
app.get(paths.item, itemDetailRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
