import React from 'react';

import { ReactTable } from './component';
import { makeString } from './utils/index';
import './App.css';

const options = {
  headers: [
    {
      title: 'Name',
      key: 'name',
      sort: true,
    },
    {
      title: 'DOB',
      key: 'dob',
    },
    {
      title: 'Father Name',
      key: 'fatherName',
    },
    {
      title: 'Mother Name',
      key: 'motherName',
    },
    {
      title: 'Address',
      key: 'address',
    },
    {
      title: 'Company Name',
      key: 'company',
      sort: true,
    },
    {
      title: 'Office Address',
      key: 'officeAddress',
    },
    {
      title: 'Comments',
      key: 'comments',
    },
  ],
  body: [
    {
      id: 1,
      name: makeString(10),
      dob: '01-04-1982',
      fatherName: makeString(12),
      motherName: makeString(11),
      address: makeString(22),
      company: makeString(8),
      officeAddress: makeString(24),
      comments: makeString(35),
    },
    {
      id: 2,
      name: makeString(10),
      dob: '01-04-1982',
      fatherName: makeString(12),
      motherName: makeString(11),
      address: makeString(22),
      company: makeString(8),
      officeAddress: makeString(24),
      comments: makeString(35),
    },
    {
      id: 3,
      name: makeString(10),
      dob: '01-04-1982',
      fatherName: makeString(12),
      motherName: makeString(11),
      address: makeString(22),
      company: makeString(8),
      officeAddress: makeString(24),
      comments: makeString(35),
    },
    {
      id: 4,
      name: makeString(10),
      dob: '01-04-1982',
      fatherName: makeString(12),
      motherName: makeString(11),
      address: makeString(22),
      company: makeString(8),
      officeAddress: makeString(24),
      comments: makeString(35),
    },
    {
      id: 5,
      name: makeString(10),
      dob: '01-04-1982',
      fatherName: makeString(12),
      motherName: makeString(11),
      address: makeString(22),
      company: makeString(8),
      officeAddress: makeString(24),
      comments: makeString(35),
    },
    {
      id: 6,
      name: makeString(10),
      dob: '01-04-1982',
      fatherName: makeString(12),
      motherName: makeString(11),
      address: makeString(22),
      company: makeString(8),
      officeAddress: makeString(24),
      comments: makeString(35),
    },
    {
      id: 7,
      name: makeString(10),
      dob: '01-04-1982',
      fatherName: makeString(12),
      motherName: makeString(11),
      address: makeString(22),
      company: makeString(8),
      officeAddress: makeString(24),
      comments: makeString(35),
    },
    {
      id: 8,
      name: makeString(10),
      dob: '01-04-1982',
      fatherName: makeString(12),
      motherName: makeString(11),
      address: makeString(22),
      company: makeString(8),
      officeAddress: makeString(24),
      comments: makeString(35),
    },
    {
      id: 9,
      name: makeString(10),
      dob: '01-04-1982',
      fatherName: makeString(12),
      motherName: makeString(11),
      address: makeString(22),
      company: makeString(8),
      officeAddress: makeString(24),
      comments: makeString(35),
    },
  ],
  stickyHeader: true,
  classObject: {
    tableContainer: 'react-table-container',
    table: 'react-table',
    tableHeader: 'react-table-header',
    tableHeaderRow: 'react-table-header-row',
    tableHeaderCell: 'react-table-header-cell',
    tableBody: 'react-table-body',
    tableBodyRow: 'react-table-body-row',
    tableBodyCell: 'react-table-body-cell',
  },
  pagination: 1,
};

const App = _ => {
  return (
    <div
      style={{
        padding: 100,
      }}
    >
      <ReactTable options={options} />
    </div>
  );
};

export default App;
