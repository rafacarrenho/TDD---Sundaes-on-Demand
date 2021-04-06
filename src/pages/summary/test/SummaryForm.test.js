import { render, screen, waitFor } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("<SummaryForm />", () => {
  it("Initial state", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("Should enable button on check policy", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });

    const button = screen.getByRole("button", { name: /confirm order/i });

    userEvent.click(checkbox);
    expect(button).toBeEnabled();

    userEvent.click(checkbox);
    expect(button).toBeDisabled();
  });

  it("Should popover responds to hover", async () => {
    render(<SummaryForm />);
    const termsAndConditions = screen.getByText(/terms and conditions/i);

    //popover start hidden
    const nullPopover = screen.queryByText(/No ice cream will be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    //popover appears upon mouseover of checkbox label
    userEvent.hover(termsAndConditions);
    const popover = await screen.findByText(/No ice cream will be delivered/i);
    expect(popover).toBeInTheDocument();

    //popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    const nullPopoverAgain = screen.queryByText(
      /No ice cream will be delivered/i
    );
    await waitFor(() => expect(nullPopoverAgain).not.toBeInTheDocument());
  });
});
