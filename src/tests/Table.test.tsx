import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Table } from "../../lib/main";

const testHeaders = ["Title", "Pages", "Price", "Author"];
const testData = [
  {
    Id: 1,
    Title: "PHP is the best",
    Pages: "628",
    Price: "50",
    Author: "Steve Duckett",
  },
  {
    Id: 2,
    Title: "HTML is easy",
    Pages: "521",
    Price: "40",
    Author: "Kevin Miller",
  },
  {
    Id: 3,
    Title: "JavaScript is awesome",
    Pages: "1022",
    Price: "88",
    Author: "David McCollum",
  },
];

describe("Table Component", () => {
  it("renders the Table component", () => {
    render(
      <Table headers={testHeaders} data={testData}>
        <Table.StyledTableContainer>
          <Table.StyledTable>
            <Table.Head />
            <Table.Body />
            <Table.Foot />
          </Table.StyledTable>
        </Table.StyledTableContainer>
      </Table>,
    );
    screen.debug();
    const tableInst = screen.getByRole("table");
    expect(tableInst).toBeInTheDocument();
  });

  it("Shows the Title header", () => {
    render(
      <Table headers={testHeaders} data={testData}>
        <Table.StyledTableContainer>
          <Table.StyledTable>
            <Table.Head />
            <Table.Body />
            <Table.Foot />
          </Table.StyledTable>
        </Table.StyledTableContainer>
      </Table>,
    );
    const title = screen.getByText("PHP is the best");
    expect(title).toBeInTheDocument();
  });

  it("renders the table thead element", () => {
    render(
      <Table headers={testHeaders} data={testData}>
        <Table.StyledTableContainer>
          <Table.StyledTable>
            <Table.Head />
            <Table.Body />
            <Table.Foot />
          </Table.StyledTable>
        </Table.StyledTableContainer>
      </Table>,
    );
    const tableHead = screen.getAllByRole("rowgroup", { name: "" });
    expect(tableHead[0]).toBeInTheDocument();
  });

  it("renders the table th element", () => {
    render(
      <Table headers={testHeaders} data={testData}>
        <Table.StyledTableContainer>
          <Table.StyledTable>
            <Table.Head />
            <Table.Body />
            <Table.Foot />
          </Table.StyledTable>
        </Table.StyledTableContainer>
      </Table>,
    );
    const columnHead = screen.getAllByRole("columnheader", { name: "Title" });
    expect(columnHead[0]).toBeInTheDocument();
  });
});
