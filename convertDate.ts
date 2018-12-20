export function dateToUTC(date) {
  if (date) {
    return Math.floor(new Date(date).getTime() / 1000);
  }
}

export function UTCtoDate(date) {
  if (date) {
    return new Date(date * 1000);
  }
}
