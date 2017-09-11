const SEC_STEP = 6;
const MIN_STEP = 6;
const HOUR_STEP = 30;

export const getCurrentPosition = function() {
    const currentDate = new Date();
    return {
      secondArrow: currentDate.getSeconds() * SEC_STEP,
      minuteArrow: currentDate.getMinutes() * MIN_STEP,
      hourArrow: currentDate.getHours() > 12 ? (currentDate.getHours() - 12) * HOUR_STEP : currentDate.getHours() * HOUR_STEP
    }
};

