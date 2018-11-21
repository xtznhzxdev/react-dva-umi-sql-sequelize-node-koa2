import moment from 'moment';

export const dateFormat = (date, format='YYYY-M-D') => {
  return moment(date).format(format);
}
