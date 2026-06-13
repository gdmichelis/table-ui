# table-ui

A reusable React Table component library!

## Example

![Example of reusable table](https://github.com/gdmichelis/table-ui/blob/main/table_ui.jpg)

## Installation

```shell
npm install @gdmichelis/table-ui
```

## Importing the component into your React project

```js
import { Table } from "@gdmichelis/table-ui";
```

## Usage

### Defining your headers and data

Your headers and data tables, could be fetched either via an external API,
or defined hardcoded in your parent component of the Table component

```js
const tableHeaders = ["Name", "Lastname", "Email"];

const usersData = [
  { Id: 1, Name: "David", Lastname: "Adams", Email: "d.adams@test.com" },
  { Id: 2, Name: "Bill", Lastname: "Edwards", Email: "b.edwards@test.com" },
  { Id: 3, Name: "Mary", Lastname: "Thomson", Email: "mtoms@example.com" },
  { Id: 4, Name: "Paul", Lastname: "Olson", Email: "p.olson@example.com" },
  { Id: 5, Name: "Vicky", Lastname: "Sanders", Email: "v.sanders@test.com" },
];

//OR
const tableHeaders = ["Name", "Lastname", "Email"];

const res = await fetch("https://example.com/users", {});
const usersData = await res.json();
```

<p><strong>⚠ Currently the is no way to add icons to the table cells, except text.</strong></p>

### Rendering the component

```js
// Now that you have your headers and data, you can pass them as props to your
// Table component like so:

function App() {
  return (
    <>
      <Table headers={tableHeaders} data={usersData}>
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

// ⚠ headers and data values must have the exact schema as displayed above!
// ⚠ Each data object must have an Id with numeric value
```

### Styling the component

This library offers two ways to style your table:

#### 1st way - Classic way via className prop

```js
  // Each and very child component along with table component itself, can have a className prop
  // to target the corresponding HTML elements:

  <Table headers={tableHeaders} data={usersData}>
        <Table.StyledTableContainer className="table-container">
          <Table.StyledTable className="my-table">
            <Table.Head className="table-head"/>
            <Table.Body className="table-body"/>
            <Table.Foot className="table-foot"/>
          </Table.StyledTable>
        </Table.StyledTableContainer>
      </Table>

  // The Table component is consisted of below child components, and
  // must be present (except Table.Foot which is optionally and could be omitted) always:


   <Table.StyledTableContainer></Table.StyledTableContainer> // which is the parent container of the table
   <Table.StyledTable></Table.StyledTable> // the table itself
   <Table.Head /> // table header
   <Table.Body /> // table body
   <Table.Foot /> // table footer (optional)

```

```css
/** In your CSS file */
.table-container {
}

.my-table {
}

.table-head {
}

.table-body {
}

.table-foot {
}
```

#### 2nd way - Custom table

```js
// Here you can specify any HTML table element css style property, by prepend the $ sign,
// e.g. $border = "1px solid #ddd"

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

// $zebraEven and $zebraOdd are props that implement the stripped pattern on the table
// on even or odd rows respectively.
// $backgroundColorHover value, changes table's row background color on hover.

```

### Responsiveness

<p>Table component produces a responsive table, by adding: <p/>

```css
overflow-x: auto;
width: 50%;
```

<p>to the table container. You can always change this value, by defining your own width:</p>

```css
width: 70%;
```

### Notice

table-ui uses styled-components library to style the Table component!

### Contact

If you find any bug or you want to contribute to this project, please feel free to send me an email to: gdmichelis@gmail.com

### License

table-ui is [MIT licensed](./LICENSE).
