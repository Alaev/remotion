export const shouldLogBrowserMessage = (message: string) => {
	// Not relevant for the user
	if (message.startsWith('DevTools listening on')) {
		return false;
	}

	// Noisy but harmless warning
	if (message.includes('Failed to send GpuControl.CreateCommandBuffer')) {
		return false;
	}

	return true;
};

type ParsedBrowserLogMessage = {
	day: number;
	month: number;
	hour: number;
	minute: number;
	seconds: number;
	microseconds: number;
	level: string;
	location: string;
	lineNumber: number;
	message: string;
};

export const parseBrowserLogMessage = (
	input: string
): ParsedBrowserLogMessage | null => {
	const format =
		/^\[([0-9]{4})\/([0-9]{6})\.([0-9]{6}):([A-Z]+):(.*)\(([0-9]+)\)\](.*)/;
	const match = input.match(format);
	if (!match) {
		return null;
	}

	const date = match[1];
	const day = parseInt(date.slice(0, 2), 10);
	const month = parseInt(date.slice(2, 4), 10);

	const time = match[2];
	const hour = parseInt(time.slice(0, 2), 10);
	const minute = parseInt(time.slice(2, 4), 10);
	const seconds = parseInt(time.slice(4, 6), 10);

	const microseconds = parseInt(match[3], 10);

	const level = match[4];

	const location = match[5];
	const lineNumber = parseInt(match[6], 10);

	const message = match[7].trim();

	return {
		day,
		month,
		hour,
		minute,
		seconds,
		microseconds,
		level,
		location,
		lineNumber,
		message,
	};
};
