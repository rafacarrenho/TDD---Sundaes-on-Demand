import { render, screen } from "@testing-library/react";
import Options from "../Options";

describe("<Options />", () => {
  it("display image for each scoop option from server", async () => {
    render(<Options optionsType="scoops" />);

    //find images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((el) => el.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });

  it("display image for each topping option from server", async () => {
    render(<Options optionsType="toppings" />);

    // find images
    const toppingImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });
    expect(toppingImages).toHaveLength(3);

    // confirm alt text of images
    const altText = toppingImages.map((el) => el.alt);
    expect(altText).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping",
    ]);
  });
});
