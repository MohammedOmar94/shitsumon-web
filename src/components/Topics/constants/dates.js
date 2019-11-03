export const DATES_TITLE = 'Dates 年月日';
export const DATES_KEY = 'dates';

export const MONTHS_PARAM = 'months';
export const MONTHS_TITLE = 'Months';

export const DAYS_OF_THE_MONTH_PARAM = 'days_of_the_month';
export const DAYS_OF_THE_MONTH_TITLE = 'Days of the month';
export const DAYS_OF_THE_WEEK_PARAM = 'days_of_the_week';
export const DAYS_OF_THE_WEEK_TITLE = 'Days of the week';

export const DATES_TOPIC = {
  key: DATES_KEY,
  icon: 'fas fa-calendar-alt',
  title: DATES_TITLE,
  quizzes: [
    { param: MONTHS_PARAM, title: MONTHS_TITLE, },
    { param: DAYS_OF_THE_MONTH_PARAM, title: DAYS_OF_THE_MONTH_TITLE },
    { param: DAYS_OF_THE_WEEK_PARAM, title: DAYS_OF_THE_WEEK_TITLE }
  ]
};
