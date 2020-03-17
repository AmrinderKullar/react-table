import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TableBody from '../tableBody';
import TableHeader from '../tableHeader';
import TablePagination from '../tablePagination';
import { getSortedColumnData } from '../../utils';
import {
  TableContainer,
  Table,
} from './style';

const ReactTable = (props) => {
  const {
    headers,
    body,
    stickyHeader,
    classObject,
    pagination,
  } = props.options;
  const [tableBody, setTableBody] = useState([]);
  const [sortCriteriaField, setSortCriteriaField] = useState({});
  const [paginationOptions, setPaginationOptions] = useState({
    rowsPerPage: 5,
    pageNumber: 1,
  });
  console.log(PropTypes);
  useEffect(_ => {
    setTableBody(body);
  }, [body]);

  /* 
    function used to update paginationOptions
    using the fieldName the want to updated
    In this case feilds to updated are
      - rowsPerPage
      -pageNumber
  */
  const updatePaginationOptions = (fieldName, value) => {
    setPaginationOptions({
      ...paginationOptions,
      [fieldName]: value,
    });
  };

  /* 
    funtion to get paginated data using sorted data in case of
    one or multiple columns used for sorting.
  */
  const getPaginatedData = _ => {
    /*
      getSortedColumnData function is a generic function created
      to get sorted data for respected column.
    */
    const sortedData = getSortedColumnData(tableBody, sortCriteriaField);
    const { pageNumber, rowsPerPage } = paginationOptions;
    const paginatedArray = [];
    if (pagination) {
      for (
        let i = ((pageNumber - 1) * rowsPerPage);
        i < (pageNumber * rowsPerPage);
        i++
      ) {
        if ((i + 1) <= tableBody.length) {
          paginatedArray.push(sortedData[i]);
        }
      }

      return paginatedArray;
    }
    return sortedData;
  };

  return (
    <TableContainer className={classObject.tableContainer}>
      <Table className={classObject.table}>
        <TableHeader
          headers={headers}
          sortCriteriaField={sortCriteriaField}
          setSortCriteriaField={setSortCriteriaField}
          stickyHeader={stickyHeader}
          classObject={classObject}
        />
        {
          tableBody.length > 0 && <TableBody
            headers={headers}
            body={getPaginatedData()}
            classObject={classObject}
          />
        }
      </Table>
      {pagination &&
        <TablePagination
          updatePaginationOptions={updatePaginationOptions}
          paginationOptions={paginationOptions}
          tableBodyLength={tableBody.length}
        />
      }
    </TableContainer>
  );
};

ReactTable.propTypes = {
  headers: PropTypes.array,
  data: PropTypes.array,
  stickyHeader: PropTypes.bool,
  classObject: PropTypes.object,
  pagination: PropTypes.bool,
};

ReactTable.defaultProps = {
  classObject: {},
  headers: [],
  data: [],
  stickyHeader: false,
  pagination: false,
};

export default ReactTable;
