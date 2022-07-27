import { fireEvent, render } from "@testing-library/vue";
import MessageSucess from "../messages/MessageSucess.vue";

describe("<MessageSucess>", () => {
  it("should render page with given props", () => {
    const { getByText } = render(MessageSucess, {
      props: {
        msg: 'fake msg',
      },
    });
    expect(getByText('fake msg com sucesso!')).toBeTruthy()
  });
  it('should close the messsage when is clicked', () => {
    const {emitted, getByRole} = render(MessageSucess, {
      props: {
        msg: 'fake msg',
      }
    })

    const closeMessage = getByRole('closeMessage')
    fireEvent.click(closeMessage)
    expect(emitted()['close-sucess-message']).toBeTruthy()
  })
});
