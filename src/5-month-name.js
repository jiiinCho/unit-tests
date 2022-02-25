const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthName = (monthNumber) => {
  return monthNumber > 12 || monthNumber < 1 ? null : months[monthNumber - 1];
};
