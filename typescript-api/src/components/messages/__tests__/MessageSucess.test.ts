import { fireEvent, render } from "@testing-library/vue";
import MessageSucess from "../MessageSucess.vue";

describe("<MessageSucess>", () => {
  it("should render page with given props", () => {
    const { getByText } = render(MessageSucess, {
      props: {
        msg: "fake msg",
      },
    });
    expect(getByText("fake msg com sucesso!")).toBeTruthy();
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
