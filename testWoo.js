// testWoo.js
const WooCommerceRestApiDefault = require("@woocommerce/woocommerce-rest-api");
const WooCommerceRestApi = WooCommerceRestApiDefault.default || WooCommerceRestApiDefault;
const dotenv = require("dotenv");

// Force dotenv to look in the current directory and debug
const dotenvResult = dotenv.config({ path: require('path').resolve(process.cwd(), '.env'), debug: true });

if (dotenvResult.error) {
  console.error("Error loading .env file:", dotenvResult.error);
} else {
  console.log(".env file parsed values:", dotenvResult.parsed);
}

console.log("REACT_APP_WC_URL loaded:", process.env.REACT_APP_WC_URL ? 'Yes' : 'No');
console.log("URL from env:", process.env.REACT_APP_WC_URL);

let api;
try {
  console.log("Attempting to initialize WooCommerceRestApi...");
  api = new WooCommerceRestApi({
    url: process.env.REACT_APP_WC_URL,
    consumerKey: process.env.REACT_APP_WOO_CONSUMER_KEY,
    consumerSecret: process.env.REACT_APP_WOO_CONSUMER_SECRET,
    version: "wc/v3",
  });
  console.log("API object potentially initialized.");
  if (api && typeof api.get === 'function') {
    console.log("API object looks valid and has a .get method.");
  } else {
    console.error("API object is not valid or does not have a .get method.");
    process.exit(1);
  }
} catch (error) {
  console.error("Error during API initialization:", error);
  process.exit(1); // Exit if API can't be initialized
}

// Test: Fetch products
console.log("Proceeding to fetch products...");
if (api) { // Only proceed if API was initialized and deemed valid
  api.get("products")
    .then((response) => {
      console.log("✅ Products fetched successfully:");
      console.log("Response status:", response.status);
      // console.log("Response data:", response.data); // Potentially very long
      if (Array.isArray(response.data)) {
        console.log(`Fetched ${response.data.length} products.`);
        if (response.data.length > 0) {
          console.log("First product name:", response.data[0].name);
        }
      } else {
        console.log("Response data is not an array:", response.data);
      }
    })
    .catch((error) => {
      console.error("❌ API Error during products fetch:");
      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", JSON.stringify(error.response.data, null, 2));
      } else {
        console.error("Error message:", error.message);
      }
    });
} else {
  console.error("API object was not initialized. Cannot fetch products.");
}
