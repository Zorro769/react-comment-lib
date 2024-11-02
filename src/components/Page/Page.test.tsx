import "@testing-library/jest-dom";
import { render } from "@testing-library/react"; // Correct import
import Page from ".";

describe("Page", () => {
  it("renders title and children", () => {
    const title = "Test title";
    const children = "Test children";
    const { getByText } = render(<Page title={title}>{children}</Page>); // Use render from testing-library

    const titleElement = getByText(title);
    const childrenElement = getByText(children);

    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
  it("renders the correct styling", () => {
    const title = "Test Title";
    const children = "Test Children";
    const { getByTestId } = render(<Page title={title}>{children}</Page>);
    // Act
    const container = getByTestId("page-container");

    // Assert
    expect(container).toHaveStyle(`
        background-color:#f5f5f5;
    `);
  });
});
