import moment from "moment";

export const yearsDiffFromToday = (date: string): number => {
  const today = new Date();

  const d1 = moment(today);
  const d2 = moment(date);

  return d1.diff(d2, "years");
};
