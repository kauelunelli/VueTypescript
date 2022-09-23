import { fireEvent, render } from "@testing-library/vue";
import ModalProduct from "../ModalProduct.vue";
import "@testing-library/jest-dom";
import { editProduct } from "@/mocks/productsMock";

describe("ModalProduct", () => {
  it("should emit the edited product", async () => {
    const { getByText, emitted } = render(ModalProduct, {
      props: {
        editProduct: editProduct,
      },
    });
    const saveEditProduct = getByText("Salvar");
    fireEvent.click(saveEditProduct);
    expect(emitted()["send-product-save"]).toBeTruthy();
  });
});
