import moment from 'moment';

export default function convertTime(time) {
  return moment(time).format('MMMM DD YYYY')
}