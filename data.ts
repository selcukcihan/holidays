import Holidays from 'date-holidays'

export function getHolidays() {
  function daysBetweenDates(startDate: Date, endDate: Date) {
    const days = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
    return Math.round(days)
  }

  const hd = new Holidays()
  hd.init('TR')
  const today = new Date()
  const holidays = [...hd.getHolidays(today), ...hd.getHolidays(today.getFullYear() + 1)]
    .filter(h => new Date(h.start).setHours(0, 0, 0, 0) >= +today)
  return {
    holidays,
    getDaysBetweenDates: (date: Date) => daysBetweenDates(today, date),
    isTodayPublicHoliday: hd.isHoliday(today),
  }
}
