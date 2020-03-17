export const makeString = length => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getSortedColumnData = (column, sortCriteriaField) => {
  if (sortCriteriaField.fieldName) {
    return column.sort((a, b) => {
      if (sortCriteriaField.order === 'asc') {
        if (a[sortCriteriaField.fieldName] < b[sortCriteriaField.fieldName]) {
          return -1;
        }
        if (a[sortCriteriaField.fieldName] > b[sortCriteriaField.fieldName]) {
          return 1;
        }
        return 0;
      } else {
        if (a[sortCriteriaField.fieldName] > b[sortCriteriaField.fieldName]) {
          return -1;
        }
        if (a[sortCriteriaField.fieldName] < b[sortCriteriaField.fieldName]) {
          return 1;
        }
        return 0;
      }
    });
  }

  return column;
};
