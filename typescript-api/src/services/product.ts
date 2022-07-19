import { http } from "./config";

export default {
  list: () => {
    return http.get("products");
  },

  save: (product: Array<any>) => {
    return http.post("products", product);
  },

  edit: (id: number, product: Array<any>) => {
    return http.put("products/" + id, product);
  },

  delete: (product: number) => {
    return http.delete("products/" + product);
  },
};
