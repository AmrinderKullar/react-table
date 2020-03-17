import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import {
  Header,
  HeaderRow,
  HeaderCell,
  HeaderButton,
} from './style';

const TableHeader = ({
  headers,
  sortCriteriaField,
  setSortCriteriaField,
  stickyHeader,
  classObject,
}) => {
  return <Header className={classObject.tableHeader}>
    <HeaderRow className={classObject.tableHeaderRow}>
      {headers.map(head => <HeaderCell className={classObject.tableHeaderCell} stickyHeader={stickyHeader} key={head.key}>
        {head.sort ?
          <HeaderButton
            onClick={_ =>
              setSortCriteriaField({
                fieldName: head.key,
                order: (sortCriteriaField.fieldName === head.key && sortCriteriaField.order === 'asc')
                  ? 'desc' : 'asc'
              })
            }
          >
            {head.title}
            {sortCriteriaField.fieldName === head.key ?
              sortCriteriaField.order === 'asc' ? <IoMdArrowDropdown /> : <IoMdArrowDropup />
              :
              null}
          </HeaderButton>
          :
          head.title
        }
      </HeaderCell>)}
    </HeaderRow>
  </Header>;
};

TableHeader.propTypes = {
  header: PropTypes.array,
  sortCriteriaField: PropTypes.object,
  setSortCriteriaField: PropTypes.func,
  stickyHeader: PropTypes.bool,
  classObject: PropTypes.object,
};

TableHeader.defaultProps = {
  headers: [],
  sortCriteriaField: {},
  setSortCriteriaField: _ => { },
  stickyHeader: false,
  classObject: {},
};

export default TableHeader;
