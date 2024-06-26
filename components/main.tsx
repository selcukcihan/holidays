/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/DkZOsP6HCk8
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

const icon = (props: any) => <svg {...props}  width="48px" height="48px" viewBox="0 0 512 512" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <g>
    <path className="st0" d="M350.9,364.4c-3.2-0.3-6.4-0.5-9.7-0.5c-15.1,0-29.5,3.4-42.3,9.4c-16.1-19-36.9-33.9-60.8-42.7   c-4-1.5-8.2-2.8-12.4-3.9c-12.1-3.3-24.7-5-37.8-5c-17,0-33.2,2.9-48.3,8.3c-55.4,19.6-95.4,71.9-96.7,133.8H441   C441,411.9,401.5,369.3,350.9,364.4z M153.8,370.3c-28.2,10-50.6,31.9-61.5,60.1c-1.1,2.8-3.7,4.5-6.5,4.5c-0.8,0-1.7-0.1-2.5-0.5   c-3.6-1.4-5.4-5.4-4-9c12.3-32.1,37.8-56.9,69.9-68.3c3.7-1.3,7.6,0.6,8.9,4.3C159.4,365.1,157.5,369,153.8,370.3z"/>
    <path className="st0" d="M322.9,235.9c15.3,0,27.2,5.8,32.4,8.8c3.9-20.7,8.8-39.8,13.3-55.6l-30.4-12.3l-0.2-0.8   c-50.5,41.2-79.2,95.5-95.5,141.3c0.1,0,0.3,0.1,0.4,0.2c22.5,8.3,43,21.7,59.7,39.1c12.3-4.5,25.2-6.7,38.5-6.7   c2.5,0,5.1,0.1,7.6,0.3c-1.1-10.3-1.6-20.9-1.5-31.6c-0.7,0.2-1.4,0.3-2,0.3c-1.1,0-2.2-0.3-3.3-0.8c-0.3-0.2-21.5-11.3-41.5-11.3   c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c21.4,0,42.6,10.2,47.2,12.5c0.8-15.7,2.6-31.3,5-46.3c-1-0.2-2-0.6-2.9-1.2   c-0.2-0.2-11.5-7.9-27-7.9c-3.9,0-7-3.1-7-7C315.9,239,319.1,235.9,322.9,235.9z"/>
    <path className="st0" d="M413.4,95.4c0,0-22.8-57.2-94.8-45.6c0,0,30.5,17.5,27.4,42.5c0,0-48.5-26.7-98.7,30.2c0,0,92.3-4.9,103,44.1   l22.3,9c0,0,61.7,7.8,63.8,58.8c0,0,27.9-31.1,15.8-69.5c0,0,24.8-1.6,32.1,20C484.4,185,505.8,92.3,413.4,95.4z"/>
    <path className="st0" d="M171.9,233.6c-6.8-7.6-14.3-14.9-22.6-21.8l-0.2,0.7l-26.4,10.7c6.9,24.5,14.6,58.3,16.4,92.1   c15.7-5,32.1-7.6,48.7-7.6c10.7,0,21.4,1.1,31.8,3.2c-2-5-4.3-10-6.7-15.1c-1.1,0.5-2.3,0.8-3.6,0.7c-0.3,0-26.8-1.8-39.1-0.1   c-0.3,0-0.6,0.1-1,0.1c-3.4,0-6.4-2.5-6.9-6c-0.5-3.8,2.1-7.4,6-7.9c10.6-1.5,29.3-0.7,37.6-0.3c-6.8-12.6-15-25.2-24.6-37.3   c-0.8,0.7-1.8,1.2-2.8,1.4c-7.9,1.9-16.3,4.7-18.1,6.1c-1.4,1.3-3.1,2-4.9,2c-1.8,0-3.6-0.7-4.9-2.1c-2.7-2.7-2.7-7.2,0-9.9   C154.6,238.7,164.6,235.5,171.9,233.6z"/>
    <path className="st0" d="M53.6,201c-9.9,31.5,13,57,13,57c1.7-41.9,52.3-48.2,52.3-48.2l18.3-7.4c8.7-40.2,84.4-36.2,84.4-36.2   c-41.2-46.6-80.9-24.8-80.9-24.8c-2.6-20.4,22.5-34.8,22.5-34.8c-59-9.5-77.7,37.4-77.7,37.4c-75.7-2.6-58.1,73.4-58.1,73.4   C33.3,199.7,53.6,201,53.6,201z"/>
  </g>
</svg>

function getDate(holiday: any) {
  return new Date(holiday.date.split(' ')[0])
}

export function Main(props: any) {
  const { holidays, getDaysBetweenDates, isTodayPublicHoliday, today } = props
  const holidayIndex = isTodayPublicHoliday ? 1 : 0
  return (
    <div className="py-6 lg:py-12 px-6 lg:px-8 dark:text-white">
      <div className="rounded-lg p-2 mb-4 text-center">
        <h2 className="text-2xl font-bold">{`Bugün ${today}`}</h2>
        {isTodayPublicHoliday && <h2 className="text-2xl font-bold">{`${holidays[0].name}`}</h2>}
      </div>
      <div className="grid gap-2 lg:gap-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 space-y-4">
          <div className="flex flex-row">
            <h2 className="text-2xl font-bold flex-1">Sıradaki Resmî Tatil</h2>
            {icon({ className: 'dark:fill-white' })}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{holidays[holidayIndex].name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{getDate(holidays[holidayIndex]).toLocaleDateString('tr-TR')} {getDate(holidays[holidayIndex]).toLocaleString('tr-TR', { weekday: 'long' })}</p>
            </div>
            <div className="ml-4 min-w-24 text-center bg-gray-900 text-white dark:text-gray-900 font-semibold px-3 py-1 rounded-full dark:bg-gray-50">{getDaysBetweenDates(getDate(holidays[holidayIndex]))} gün</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-bold">Yaklaşan Diğer Tatiller</h2>
          <div className="space-y-2">
            {holidays.slice(holidayIndex + 1).slice(0, 7).map((h: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{h.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{getDate(h).toLocaleDateString('tr-TR')} {getDate(h).toLocaleString('tr-TR', { weekday: 'long' })}</p>
                </div>
                <div className="ml-4 text-center min-w-24 bg-gray-900 text-white dark:text-gray-900 font-semibold px-3 py-1 rounded-full dark:bg-gray-50">{`${getDaysBetweenDates(getDate(h))} gün`}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
