import { render, screen } from "@testing-library/react";
import Projects from "../Projects";
import { faker } from "@faker-js/faker/locale/en";

describe("Projects", () => {
  it("renders Projects title", () => {
    render(<Projects isLoading={false} name={""} errorMessage="" />);

    expect(screen.getByText("Projects")).toBeVisible();
  });

  it("renders Loading when isLoading=true", () => {
    render(<Projects isLoading={true} name={""} errorMessage="" />);

    expect(screen.getByText("Loading...")).toBeVisible();
  });

  it("renders errorMessage when errorMessage=test", () => {
    render(<Projects isLoading={false} name={""} errorMessage="test" />);

    expect(screen.getByText("test")).toBeVisible();
  });

  it("renders name's full name", async () => {
    const person = faker.person;
    const fullName = person.fullName();
    render(<Projects isLoading={false} name={fullName} errorMessage="" />);

    expect(screen.getByText(fullName)).toBeVisible();
  });
});
