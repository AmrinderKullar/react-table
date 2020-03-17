import React from 'react';
import PropTypes from 'prop-types';

import {
  Body,
  BodyRow,
  BodyCell,
} from './style';

const TableBody = ({
  headers,
  body,
  classObject,
}) => {
  return <Body className={classObject.tableBody}>
    {body.map(datum =>
      <BodyRow key={datum.id} className={classObject.tableBodyRow}>
        {headers.map(cell => <BodyCell key={cell.key} className={classObject.tableBodyCell}>{datum[cell.key]}</BodyCell>)}
      </BodyRow>
    )}
  </Body>
};

TableBody.propTypes = {
  headers: PropTypes.array,
  body: PropTypes.array,
  classObject: PropTypes.object,
};

TableBody.defaultProps = {
  headers: [],
  body: [],
  classObject: {},
};

export default TableBody;
