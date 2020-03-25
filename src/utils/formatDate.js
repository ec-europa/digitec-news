const formatDate = (input) => {
  const date = new Date(input);

  const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
};

module.exports = formatDate;
