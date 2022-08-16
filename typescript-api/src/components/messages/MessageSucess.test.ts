import { fireEvent, render } from "@testing-library/vue";
import MessageSucess from "./MessageSucess.vue";
import "@testing-library/jest-dom";

describe("<MessageSucess>", () => {
  it("should render page with given props", () => {
    const { getByText } = render(MessageSucess, {
      props: {
        msg: "fake msg",
      },
    });
    expect(getByText("fake msg com sucesso!")).toBeVisible();
  });
  it("should close the messsage when is clicked", () => {
    const { emitted, getByTestId } = render(MessageSucess, {
      props: {
        msg: "fake msg",
      },
    });

    const closeMessage = getByTestId("closeMessage");
    fireEvent.click(closeMessage);
    expect(emitted()["close-sucess-message"]).toBeTruthy();
  });
});
