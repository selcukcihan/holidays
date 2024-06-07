 import { Main } from "../components/main"
import { getHolidays, getTodayAsDayOfMonthPlusMonthNamePlusDayName } from "../data"

export const revalidate = 300

export default function Home() {
  const { holidays, getDaysBetweenDates, isTodayPublicHoliday } = getHolidays()
  const today = getTodayAsDayOfMonthPlusMonthNamePlusDayName()

  return (
    <main className="bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-between min-h-svh">
      <Main {...{ holidays, getDaysBetweenDates, isTodayPublicHoliday, today }} />
    </main>
  );
}
