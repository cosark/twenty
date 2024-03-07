import { createContext } from 'react';

import { CalendarEvent } from '@/activities/calendar/types/CalendarEvent';

type CalendarContextValue = {
  upcomingCalendarEvent?: CalendarEvent;
  updateUpcomingCalendarEvent: () => void;
};

export const CalendarContext = createContext<CalendarContextValue>({
  updateUpcomingCalendarEvent: () => {},
});
