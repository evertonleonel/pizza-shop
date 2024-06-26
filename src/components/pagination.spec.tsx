import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Pagination } from "./pagination";

const onPageChangeCallback = vi.fn();

describe("Pagination", () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear();
    //vai limpar as chamadas a cada teste
  });

  it("should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );
    expect(wrapper.getByText("Página 1 de 20"));
    expect(wrapper.getByText("Total de 200 item(s)"));
  });

  it("should be able to navigate to the next page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });

    await userEvent.click(nextPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });

  it("should be able to navigate to the previous page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Página anterior",
    });

    await userEvent.click(nextPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(4);
  });

  it("should be able to navigate to the first page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Primeira página",
    });

    await userEvent.click(nextPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });
  it("should be able to navigate to the last page", async () => {
    console.log(onPageChangeCallback.mock.calls);
    // Verificar a quantidade de chamadas de mock, deve mostrar um array vazio pois estamos resetando a cada teste.

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Última página",
    });

    await userEvent.click(nextPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
