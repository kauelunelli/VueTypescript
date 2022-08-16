import { fireEvent, render } from "@testing-library/vue";
import ListProducts from "./ListProducts.vue";
import { products, product } from "@/mocks/productsMock";
import "@testing-library/jest-dom";

describe("<ListProducts>", () => {
  const renderListProducts = () => {
    return render(ListProducts, {
      props: {
        products: product,
      },
    });
  };
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
    const { emitted, getByTestId, findByText } = renderListProducts();

    const sendIdEdit = getByTestId("editBtn");
    fireEvent.click(sendIdEdit);
    expect(emitted()["send-product-to-edit"]).toBeTruthy();
    expect(await findByText("FakeProduct")).toBeVisible();
  });
  it("should send the id to delete when is clicked", () => {
    const { emitted, getByTestId } = renderListProducts();

    const sendIdDelete = getByTestId("deleteBtn");
    fireEvent.click(sendIdDelete);
    expect(emitted()["send-id-to-delete"]).toBeTruthy();
  });
});
