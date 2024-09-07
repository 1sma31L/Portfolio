function formatDate(dateString: string): string {
	const date = new Date(dateString);

	// Get day with ordinal suffix
	const day = date.getDate();
	const daySuffix =
		day % 10 === 1 && day !== 11
			? "st"
			: day % 10 === 2 && day !== 12
			? "nd"
			: day % 10 === 3 && day !== 13
			? "rd"
			: "th";

	// Get the month name
	const month = date.toLocaleString("en-US", { month: "long" });

	// Get the year
	const year = date.getFullYear();

	// Get time components
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");

	// Format date and time
	return `${day}${daySuffix} ${month} ${year} at ${hours}:${minutes}`;
}

export default formatDate;
