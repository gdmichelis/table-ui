import Table from "../lib/Table/Table";

/** Table Data */
const headers = ["Name", "Lastname", "Email"];
const data = [
  { Id: 1, Name: "David", Lastname: "Adams", Email: "d.adams@test.com" },
  { Id: 2, Name: "Bill", Lastname: "Edwards", Email: "b.edwards@test.com" },
  { Id: 3, Name: "Mary", Lastname: "Thomson", Email: "mtoms@example.com" },
  { Id: 4, Name: "Paul", Lastname: "Olson", Email: "p.olson@example.com" },
  { Id: 5, Name: "Vicky", Lastname: "Sanders", Email: "v.sanders@test.com" },
];

function App() {
  return (
    <>
      <Table headers={headers} data={data}>
        <Table.StyledTableContainer>
          <Table.StyledTable>
            <Table.Head
              $backgroundColor="#04aa6d"
              $padding="0.5rem"
              $textAlign="left"
              $border="1px solid #ddd"
              $color="#fff"
            />
            <Table.Body
              $padding="0.5rem"
              $textAlign="left"
              $border="1px solid #ddd"
              $zebraEven="#f2f2f2"
              $backgroundColorHover="#ddd"
            />
            <Table.Foot
              $backgroundColor="#04aa6d"
              $padding="0.5rem"
              $textAlign="left"
              $border="1px solid #ddd"
              $color="#fff"
            />
          </Table.StyledTable>
        </Table.StyledTableContainer>
      </Table>
    </>
  );
}

export default App;
