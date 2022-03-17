import React from 'react';
import {
  IRow,
  IHeader,
  ITable,
  IEverythingResponse,
  IArticle,
  IFilteredArticle,
} from '../interfaces';
// import { headers, rows } from '../dataTable';

import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
} from 'carbon-components-react';

// var name:string = "John";

interface TableCProps {
  articles: Array<IFilteredArticle>;
  openModal: (id: string) => void;
}

//we can define all extra props beside the default(children) and add object that describe the structure of the object from props
// we don't only tell what component should return, but also the props component eventually get
// function TableC({text}: interfaceName){
// const TableC: React.FC<IEverythingResponse> = (props) => {
const TableC: React.FC<TableCProps> = ({ articles, openModal }) => {
  // console.log(articles);
  if (articles.length <= 0) return null;
  const headers: { key: string; header: string }[] = Object.keys(
    articles[0]
  ).map((articleKey) => ({
    key: articleKey,
    header: articleKey,
  }));
  return (
    <div>
      <DataTable rows={articles} headers={headers} isSortable>
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getTableProps,
        }: ITable) => (
          <TableContainer title="News - Everything">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header: IHeader) => (
                    <TableHeader
                      key={header.key}
                      {...getHeaderProps({ header })}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.length > 0 &&
                  rows.map((article: IFilteredArticle) => (
                    <TableRow key={article.id} {...getRowProps({ article })}>
                      {Object.keys(article).map((articleKey: string) => {
                        console.log('articlekey👌👌👌:', articleKey);
                        return (
                          <TableCell
                            key={articleKey}
                            onClick={() => openModal(article['id'])}
                          >
                            {article.title}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))} */}
                {rows.map((row: any) => (
                  <TableRow {...getRowProps({ row })}>
                    {row.cells!.map((cell: any) => (
                      <TableCell
                        key={cell.id}
                        onClick={() => openModal(row.id)}
                      >
                        {cell.value}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </div>
  );
};

export default TableC;
