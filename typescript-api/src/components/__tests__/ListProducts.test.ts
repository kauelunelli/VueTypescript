import { findByText, fireEvent, render } from "@testing-library/vue";
import ListProducts from "../ListProducts.vue";
import { products, product } from "@/mocks/productsMock";
import "@testing-library/jest-dom";

describe("<ListProducts>", () => {
  it("should render page with given props", () => {
    const { getByText } = render(ListProducts, {
      props: {
        products,
      },
    });
    expect(getByText("FakeProduct")).toBeVisible();
    expect(getByText("FakeProduct1")).toBeVisible();
  });
  it("should send the id to edit when is clicked and show the product in modal", async () => {
    const { emitted, getByRole, findByText } = render(ListProducts, {
      props: {
        products: product,
      },
    });

    const sendIdEdit = getByRole('editBtn');
    fireEvent.click(sendIdEdit);
    expect(emitted()["send-product-to-edit"]).toBeTruthy();
    expect(await findByText("FakeProduct")).toBeVisible()
  });
  it("should send the id to delete when is clicked", () => {
    const { emitted, getByRole } = render(ListProducts, {
      props: {
        products: product,
      },
    });

    const sendIdDelete = getByRole('deleteBtn');
    fireEvent.click(sendIdDelete);
    expect(emitted()["send-id-to-delete"]).toBeTruthy();
  });
});
