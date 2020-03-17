import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';

import {
  PaginationContainer,
  RowsCountLabel,
  RowsCountDropDown,
  RowSelectOptions,
  RowsCount,
  IconButton,
} from './style';

const TablePagination = ({
  paginationOptions,
  updatePaginationOptions,
  tableBodyLength,
}) => {
  return <PaginationContainer>
    <RowsCountLabel>Rows per page</RowsCountLabel>
    <RowsCountDropDown
      value={paginationOptions.rowsPerPage}
      onChange={e => updatePaginationOptions('rowsPerPage', e.target.value)}
    >
      <RowSelectOptions value={5}>5</RowSelectOptions>
      <RowSelectOptions value={20}>20</RowSelectOptions>
      <RowSelectOptions value={50}>50</RowSelectOptions>
    </RowsCountDropDown>
    <RowsCount>{((paginationOptions.pageNumber - 1) * paginationOptions.rowsPerPage) + 1} - {paginationOptions.pageNumber * paginationOptions.rowsPerPage} of {tableBodyLength}</RowsCount>
    <IconButton
      onClick={_ => updatePaginationOptions('pageNumber', paginationOptions.pageNumber - 1)}
    >
      <IoMdArrowDropleftCircle />
    </IconButton>
    <IconButton
      onClick={_ => updatePaginationOptions('pageNumber', paginationOptions.pageNumber + 1)}
    >
      <IoMdArrowDroprightCircle />
    </IconButton>
  </PaginationContainer>
};

TablePagination.propTypes = {
  updatePaginationOptions: PropTypes.func.isRequired,
  paginationOptions: PropTypes.object.isRequired,
  tableBodyLength: PropTypes.number.isRequired
};

export default TablePagination;
