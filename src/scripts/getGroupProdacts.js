import fs from "node:fs/promises";
import { PATH_TO_DB } from "../constans/path.js";

const getGroupProdacts = async () => {
  try {
    const data = await fs.readFile(PATH_TO_DB, "utf-8");
    const products = JSON.parse(data);

    const groupProductsCategory = products.reduce((acc, product) => {
      const { category } = product;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});

    console.log(groupProductsCategory);
  } catch (error) {
    console.log(error);
  }
};

getGroupProdacts();
