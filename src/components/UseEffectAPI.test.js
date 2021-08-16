import { fireEvent, render, screen } from "@testing-library/react";
import UseEffectAPI from "./UseEffectAPI";

beforeEach(() => {
    render(<UseEffectAPI/>)
})

test("Navbar is rendered", () => {
    const mynavbar = screen.getByTestId("mynavbar");
    expect(mynavbar).toBeInTheDocument();
})

test('Navbar logo image is rendered', () => {
    const navlogo = screen.getByTestId("navlogo");
    expect(navlogo).toBeInTheDocument();
})

test("Brand name is rendered", () => {
    const brandname = screen.getByTestId("brandname");
    expect(brandname).toBeInTheDocument();
})

test("Search field is rendered", () => {
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
})

test("Filter dropdown is rendered", () => {
    const yeardropdown = screen.getByTestId("yeardropdown");
    expect(yeardropdown).toBeInTheDocument();
})

test("Menu options are rendered", () => {
    const yeardropdown = screen.getByTestId("yeardropdown");
    expect(yeardropdown.textContent).toBe("First brewed in...200720082009201020112012201320142015");
})
