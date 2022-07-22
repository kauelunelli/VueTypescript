import { http } from "./config";
import { IProduct } from "../types";

export default {
  list: () => {
    return http.get("products");
  },

  save: (product: IProduct) => {
    return http.post("products", product);
  },

  edit: (id: number, product: IProduct) => {
    return http.put("products/" + id, product);
  },

  delete: (id: number) => {
    return http.delete("products/" + id);
  },
};
