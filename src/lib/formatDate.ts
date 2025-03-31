import advancedFormat from 'dayjs/plugin/advancedFormat';
import dayjs from 'dayjs';

dayjs.extend(advancedFormat);

const fromtDate = (postDate: string): string => {
  return dayjs(postDate).format('MMMM Do, YYYY');
};
export default fromtDate;
