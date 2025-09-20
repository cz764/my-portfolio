import { render, screen, fireEvent } from "@testing-library/react";
import ViewMyWorkButton from "../ViewMyWorkButton";

describe("ViewMyWorkButton", () => {
  const mockHandleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the button with correct text", () => {
    render(<ViewMyWorkButton handleViewMyWork={mockHandleClick} />);

    expect(screen.getByText("View My Work")).toBeVisible();
  });

  it("should have correct href attribute", () => {
    render(<ViewMyWorkButton handleViewMyWork={mockHandleClick} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "#projects");
  });

  it("should call handleViewMyWork when clicked", () => {
    render(<ViewMyWorkButton handleViewMyWork={mockHandleClick} />);

    const link = screen.getByRole("link");
    fireEvent.click(link);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it("should have correct styling classes", () => {
    render(<ViewMyWorkButton handleViewMyWork={mockHandleClick} />);

    const link = screen.getByRole("link");
    expect(link).toHaveClass(
      "inline-flex",
      "items-center",
      "gap-2",
      "px-8",
      "py-4",
      "bg-blue-600",
      "hover:bg-purple-600",
      "text-white",
      "font-semibold",
      "rounded-lg",
      "transition-colors"
    );
  });

  it("should render the arrow icon", () => {
    const { container } = render(
      <ViewMyWorkButton handleViewMyWork={mockHandleClick} />
    );

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("w-5", "h-5");
  });
});
