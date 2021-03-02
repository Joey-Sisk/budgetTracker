const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: {
    app: "./public/index.js",
    db: "./public/db.js",
  },
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js",
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      filename: "manifest.json",
      fingerprints: false,
      inject: false,
      name: "Budget Tracker",
      short_name: "Budget Tracker",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone",
      icons: [
        {
          src: path.resolve("./public/icons/icon-512x512.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
};

module.exports = config;
