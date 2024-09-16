import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

const fromtDate = (postDate: string): string => {
	return dayjs(postDate).format("Do MMMM, YYYY");
};
export default fromtDate;
