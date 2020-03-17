import styled from 'styled-components';

export const Header = styled.thead``;

export const HeaderRow = styled.tr``;

export const HeaderCell = styled.th`
  padding: 16px 8px;
  text-align: left;
  border-bottom: 1.5px solid #e0e0e0;
  min-width: 144px;
  position: ${props => props.stickyHeader ? 'sticky' : 'unset'};
  top: 0;
  background-color: #eeeeee;
`;

export const HeaderButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  background-color: transparent;
  display: flex;
`;