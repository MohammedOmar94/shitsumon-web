export const TIMES_TITLE = 'Times 時間';
export const TIMES_KEY = 'times';

export const MONTHS_PARAM = 'months';
export const MONTHS_TITLE = 'Months';

export const HOURS_OF_THE_DAY_PARAM = 'hours_of_the_day';
export const HOURS_OF_THE_DAY_TITLE = 'Hours of the day';

export const MINUTES_UP_TO_20_PARAM = 'minutes_up_to_20';
export const MINUTES_UP_TO_20_TITLE = 'Minutes (1-20)';
export const MINUTES_UP_TO_40_PARAM = 'minutes_up_to_40';
export const MINUTES_UP_TO_40_TITLE = 'Minutes (21-40)';
export const MINUTES_UP_TO_60_PARAM = 'minutes_up_to_60';
export const MINUTES_UP_TO_60_TITLE = 'Minutes (41-60)';

export const TIMES_TOPIC = {
  key: TIMES_KEY,
  icon: 'fas fa-clock',
  title: TIMES_TITLE,
  quizzes: [
    { param: HOURS_OF_THE_DAY_PARAM, title: HOURS_OF_THE_DAY_TITLE },
    { param: MINUTES_UP_TO_20_PARAM, title: MINUTES_UP_TO_20_TITLE },
    { param: MINUTES_UP_TO_40_PARAM, title: MINUTES_UP_TO_40_TITLE },
    { param: MINUTES_UP_TO_60_PARAM, title: MINUTES_UP_TO_60_TITLE },
  ]
};
