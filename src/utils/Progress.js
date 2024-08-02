const getLengthProgress = (start, end) => {
    const percentage = (start / end) * 100;
    return `${percentage}%`
}

export default getLengthProgress;