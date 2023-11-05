export default function getFullTime(time: Number) {
  const fullTime = new Date(Number(time));
  return `${addZero(fullTime.getHours())}:${addZero(
    fullTime.getMinutes()
  )}:${addZero(fullTime.getSeconds())}`;
}

function addZero(time: number) {
  if (time.toString().length > 1) {
    return time;
  }

  return `0${time}`;
}
