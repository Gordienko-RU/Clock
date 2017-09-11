const SEC_STEP = 6;
const MIN_STEP = 6;
const HOUR_STEP = 30;

export const getCurrentPosition = function() {
    const currentDate = new Date();
    const startPositions =[];
    startPositions.push(currentDate.getSeconds() * SEC_STEP);
    startPositions.push(currentDate.getMinutes() * MIN_STEP);
    startPositions.push(currentDate.getHours() > 12 ? (currentDate.getHours() - 12) * HOUR_STEP : currentDate.getHours() * HOUR_STEP);
    return(startPositions);
};

