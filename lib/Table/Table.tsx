import type { ReactNode } from "react";
import styled from "styled-components";
import { createContext, useContext } from "react";

type Item = {
  Id: number;
  [key: string]: string | number;
};

type TableContextValue = {
  headers: string[];
  data: Item[];
};

const TableContext = createContext<TableContextValue | null>(null);

type StyledTableContainerProps = {
  className?: string;
  width?: string;
  $borderRadius?: string;
  border?: string;
};

const StyledTableContainer = styled.div<StyledTableContainerProps>`
  width: ${(props) => (props.width ? props.width : "50%")};
  overflow-x: auto;
  border-radius: ${(props) =>
    props.$borderRadius ? props.$borderRadius : "5px"};
  border: ${(props) => (props.border ? props.border : "0")};
`;

type StyledTableProps = {
  backgroundColor?: string;
  border?: string;
  color?: string;
  className?: string;
  $borderCollapse?: string;
};

const StyledTable = styled.table<StyledTableProps>`
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  color: ${(props) => (props.color ? props.color : "#000")};
  border-collapse: ${(props) =>
    props.$borderCollapse ? props.$borderCollapse : "collapse"};
`;

type StyledBodyRowProps = {
  $backgroundColorHover?: string;
  $zebraEven?: string;
  $zebraOdd?: string;
  $color?: string;
};

const StyledBodyRow = styled.tr<StyledBodyRowProps>`
  color: ${(props) => (props.$color ? props.$color : "#000")};

  &:nth-child(even) {
    background-color: ${(props) => (props.$zebraEven ? props.$zebraEven : "")};
  }

  &:nth-child(odd) {
    background-color: ${(props) => (props.$zebraOdd ? props.$zebraOdd : "")};
  }

  &:hover {
    background-color: ${(props) =>
      props.$backgroundColorHover ? props.$backgroundColorHover : ""};
  }
`;

type StyledDataProps = {
  $padding?: string;
  $textAlign?: string;
  $border?: string;
  className?: string;
};

const StyledData = styled.td<StyledDataProps>`
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : "")};
  border: ${(props) => (props.$border ? props.$border : "")};
`;

type StyledHeaderProps = {
  $border?: string;
  $textAlign?: string;
  $padding?: string;
  $backgroundColor?: string;
  $color?: string;
  className?: string;
};

const StyledTableHeader = styled.th<StyledHeaderProps>`
  border: ${(props) => (props.$border ? props.$border : "")};
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : ""};
  color: ${(props) => (props.$color ? props.$color : "")};
`;

type HeadProps = {
  $border?: string;
  $textAlign?: string;
  $padding?: string;
  $backgroundColor?: string;
  $color?: string;
  className?: string;
};

function Head({
  $border,
  $textAlign,
  $padding,
  $backgroundColor,
  $color,
  className,
}: HeadProps) {
  const ctxHead = useContext(TableContext);

  if (!TableContext) {
    throw new Error("Table Component must be used within TableProvider");
  }
  const headers = ctxHead?.headers;

  return (
    <thead>
      <tr>
        {headers?.map((header: string) => {
          return (
            <StyledTableHeader
              $border={$border}
              $textAlign={$textAlign}
              $padding={$padding}
              $backgroundColor={$backgroundColor}
              $color={$color}
              className={className}
              key={header}
            >
              {header}
            </StyledTableHeader>
          );
        })}
      </tr>
    </thead>
  );
}

type BodyProps = {
  $backgroundColorHover?: string;
  className?: string;
  $padding?: string;
  $textAlign?: string;
  $border?: string;
  $zebraEven?: string;
  $zebraOdd?: string;
  $color?: string;
};

function Body({
  $backgroundColorHover,
  className,
  $padding,
  $textAlign,
  $border,
  $zebraEven,
  $zebraOdd,
  $color,
}: BodyProps) {
  const ctxData = useContext(TableContext);
  const data = ctxData?.data;

  return (
    <tbody>
      {data?.map((item: Item) => {
        return (
          <StyledBodyRow
            $backgroundColorHover={$backgroundColorHover}
            $zebraEven={$zebraEven}
            $zebraOdd={$zebraOdd}
            $color={$color}
            key={item.Id}
          >
            {Object.entries(item).map(([itemKey, value]) => {
              if (itemKey !== "Id") {
                return (
                  <StyledData
                    className={className}
                    $padding={$padding}
                    $textAlign={$textAlign}
                    $border={$border}
                    key={itemKey}
                  >
                    {value}
                  </StyledData>
                );
              }
            })}
          </StyledBodyRow>
        );
      })}
    </tbody>
  );
}

function Foot({
  $border,
  $textAlign,
  $padding,
  $backgroundColor,
  $color,
  className,
}: HeadProps) {
  const ctxFoot = useContext(TableContext);

  if (!TableContext) {
    throw new Error("Table component must be within TableProvider");
  }
  const headers = ctxFoot?.headers;

  if (!headers) {
    return null;
  }
  return (
    <tfoot>
      <tr>
        {headers.map((header: string) => {
          return (
            <StyledTableHeader
              $border={$border}
              $textAlign={$textAlign}
              $padding={$padding}
              $backgroundColor={$backgroundColor}
              $color={$color}
              className={className}
              key={header}
            >
              {header}
            </StyledTableHeader>
          );
        })}
      </tr>
    </tfoot>
  );
}

type TableProps = {
  headers: string[];
  data: Item[];
  children: ReactNode;
};

function Table({ headers, data, children }: TableProps): ReactNode {
  if (data.length === 0) return <p>⚠ There are no table data to show!</p>;

  return (
    <TableContext.Provider value={{ headers, data }}>
      {children}
    </TableContext.Provider>
  );
}

Table.StyledTableContainer = StyledTableContainer;
Table.StyledTable = StyledTable;
Table.Head = Head;
Table.Body = Body;
Table.Foot = Foot;

export default Table;
