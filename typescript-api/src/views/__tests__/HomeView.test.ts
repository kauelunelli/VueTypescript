import { fireEvent, render } from "@testing-library/vue";
import HomeView from "../HomeView.vue";
import "@testing-library/jest-dom";
import Product from "@/services/product";
import { products, productObject } from "@/mocks/productsMock";

describe("<HomeView>", () => {
  jest.spyOn(Product, "get").mockResolvedValue({ data: productObject });
  it("should render page initial content loading", () => {
    const { getByText } = render(HomeView);
    expect(getByText("Cadastrar Novo Produto")).toBeVisible();
  });
  it("should render page loaded products info", async () => {
    jest.spyOn(Product, "list").mockResolvedValue({ data: products });
    const { findByText } = render(HomeView);
    expect(await findByText("FakeProduct")).toBeTruthy();
    expect(await findByText("FakeProduct1")).toBeTruthy();
  });
  it("should render page error if failed to fetch info", async () => {
    jest.spyOn(Product, "list").mockRejectedValueOnce("Erro ao requisitar");

    const { findByText } = render(HomeView);
    expect(await findByText("Ocorreu um erro!")).toBeTruthy();
  });
  it("should get a product", async () => {
    jest.spyOn(Product, "get").mockResolvedValue({ data: productObject });

    const result = await Product.get(1);
    expect(result).toEqual({ data: productObject });
  });
  it("should save a product", async () => {
    jest.spyOn(Product, "save").mockResolvedValue({ data: productObject });

    const result = await Product.save(productObject);
    expect(result).toEqual({ data: productObject });
  });
  it("should render open the Modal if clicked", async () => {
    const { getByText, findByText } = render(HomeView);

    const openModal = getByText("Cadastrar Novo Produto");
    fireEvent.click(openModal);
    expect(await findByText("Registrar um Produto")).toBeVisible();
  });
});
