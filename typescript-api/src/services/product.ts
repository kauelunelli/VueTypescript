import { http } from "./config";
import {
  IProduct,
  IProductResponseArray,
  IProductResponseObject,
} from "../types";

export default {
  list(): Promise<IProductResponseArray> {
    return http.get("products");
  },
  get(id: number): Promise<IProductResponseObject> {
    return http.get("products/" + id);
  },

  save(product: IProduct): Promise<IProductResponseObject> {
    return http.post("products", product);
  },

  edit: (id: number, product: IProduct) => {
    return http.put("products/" + id, product);
  },

  delete: (id: number) => {
    return http.delete("products/" + id);
  },
};
