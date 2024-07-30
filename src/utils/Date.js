const formatDateID = (value) => {
    const formatter = new Intl.DateTimeFormat('id');
    return formatter.format(value);
}

const formatEventDate = (start, end) => {
    const isSameYear = new Date(start).getFullYear() === new Date(end).getFullYear();
    const isSameDate = new Date(start) === new Date(end);

    if (isSameDate) {
        return `${new Date(start).getDate()} ${getMonthName(new Date(start))} ${new Date(start).getFullYear()}`;
    }

    return `${new Date(start).getDate()} ${getMonthName(new Date(start))} ${isSameYear ? '' : new Date(start).getFullYear()} - ${new Date(end).getDate()} ${getMonthName(new Date(end))} ${new Date(end).getFullYear()}`;
}

const getMonthName = (value) => {
    const formatter = new Intl.DateTimeFormat('id', { month: 'long' });
    return formatter.format(value);
}

export {
    formatDateID,
    formatEventDate,
    getMonthName
}