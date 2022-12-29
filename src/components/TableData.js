import ReactPaginate from "react-paginate";
import SearchBar from "./SearchBar";
import SingleRow from "./SingleRow";
import { useState, useEffect } from "react";
import classes from './TableData.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const itemsPerPage = 10;
const TableData=(props)=>{
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const req = props.finalData;
  const [table, setTable] = useState(props.finalData);
  let newTable = [];
  const searchHandler = (keyvalue) => {
    setTable(req);
    newTable = [];
    for (const row of props.finalData) {
      if (row["name"].includes(keyvalue)) {
        newTable.push(row);
      }
    }
    setTable(newTable);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(table.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(table.length / itemsPerPage));
  }, [table, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % table.length;
    setItemOffset(newOffset);
  };
    return(
    <>
        <br/><br/>
        <center><SearchBar onSearch={searchHandler}/></center>
        <br/><br/>
        <table style={{ background: "rgba(0,0,0,0)" }} className="table table-hover">
          <thead style={{ background: "#A4DDED" }} className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Batch</th>
              <th>stock</th>
              <th>Deal</th>
              <th>Free</th>
              <th>MRP</th>
              <th>Rate</th>
              <th>Expiry Date</th>
            </tr>
          </thead>
          <tbody className="thead-light">
            {currentItems.map((row) => (
              <SingleRow
                key={Math.random().toString() + row.name}
                tableRow={row}
              />
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel="<-Previous"
          nextLabel="Next->"
          pageCount={pageCount}
          pageRangeDisplayed={3}
          renderOnZeroPageCount={null}
          onPageChange={handlePageClick}
          containerClassName={classes.pagination}
          previousLinkClassName={classes['page-num']}
          pageLinkClassName={classes['page-num']}
          nextLinkClassName={classes['page-num']}
          activeLinkClassName={classes.active}
        ></ReactPaginate>
      </>
  );
};
export default TableData;