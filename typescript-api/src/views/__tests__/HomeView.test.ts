import { findByAltText, fireEvent, getByText, render } from "@testing-library/vue";
import HomeView from "../HomeView.vue";
import "@testing-library/jest-dom";
import Product from "@/services/product";
import { IProduct } from "@/types/index"
import { products, product } from "@/mocks/productsMock";
import axios from 'axios';
import { http } from "@/services/config";

describe("<HomeView>", () => {
  jest.spyOn(Product, 'list').mockResolvedValue(products)

  it("should render page initial content loading", () => {
    const { getByText } = render(HomeView);
    expect(getByText("Cadastrar Novo Produto")).toBeVisible();
  });
	it('should render page loaded products info', async () => {
    const { findByText } = render(HomeView)
    expect(await findByText('FakeProduct')).toBeTruthy()
  })
  it('should render page error if failed to fetch info', async () => {
    jest.spyOn(Product, 'list').mockRejectedValueOnce('Erro ao requisitar')

    const { findByText } = render(HomeView)
    expect(await findByText("Ocorreu um erro!")).toBeTruthy()
  })
  it('should render open the Modal if clicked', async () =>{
    const { getByText, findByText } = render(HomeView);
    
    const openModal = getByText('Cadastrar Novo Produto')
    fireEvent.click(openModal);
    expect(await findByText("Registrar um Produto")).toBeVisible();
  })
});

