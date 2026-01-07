import {render, screen} from "@testing-library/react";
import Contact from "./Contact";
import "@testing-library/jest-dom";

test("should load contact component", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("should load input boxes", () => {
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole('textbox');
    // console.log(inputBoxes[0]);
    // console.log(inputBoxes.length);
    expect(inputBoxes.length).toBe(2);
});