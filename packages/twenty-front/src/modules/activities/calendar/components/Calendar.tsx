import { useState } from 'react';
import styled from '@emotion/styled';
import { format, getYear, startOfMonth } from 'date-fns';
import mapValues from 'lodash.mapvalues';

import { CalendarMonthCard } from '@/activities/calendar/components/CalendarMonthCard';
import { CalendarContext } from '@/activities/calendar/contexts/CalendarContext';
import { CalendarEvent } from '@/activities/calendar/types/CalendarEvent';
import { findUpcomingCalendarEvent } from '@/activities/calendar/utils/findUpcomingCalendarEvent';
import { sortCalendarEventsDesc } from '@/activities/calendar/utils/sortCalendarEvents';
import { H3Title } from '@/ui/display/typography/components/H3Title';
import { Section } from '@/ui/layout/section/components/Section';
import { mockedCalendarEvents } from '~/testing/mock-data/calendar';
import { groupArrayItemsBy } from '~/utils/array/groupArrayItemsBy';
import { sortDesc } from '~/utils/sort';

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  padding: ${({ theme }) => theme.spacing(6)};
  width: 100%;
`;

const StyledYear = styled.span`
  color: ${({ theme }) => theme.font.color.light};
`;

export const Calendar = () => {
  const sortedCalendarEvents = [...mockedCalendarEvents].sort(
    sortCalendarEventsDesc,
  );
  const calendarEventsByMonthTime = groupArrayItemsBy(
    sortedCalendarEvents,
    ({ startsAt }) => startOfMonth(startsAt).getTime(),
  );
  const sortedMonthTimes = Object.keys(calendarEventsByMonthTime)
    .map(Number)
    .sort(sortDesc);
  const monthTimesByYear = groupArrayItemsBy(sortedMonthTimes, getYear);
  const lastMonthTimeByYear = mapValues(monthTimesByYear, (monthTimes = []) =>
    Math.max(...monthTimes),
  );

  const [upcomingCalendarEvent, setUpcomingCalendarEvent] = useState<
    CalendarEvent | undefined
  >(findUpcomingCalendarEvent(sortedCalendarEvents));

  const updateUpcomingCalendarEvent = () => {
    const upcomingCalendarEventIndex = sortedCalendarEvents.findIndex(
      ({ id }) => id === upcomingCalendarEvent?.id,
    );
    setUpcomingCalendarEvent(
      upcomingCalendarEventIndex === 0
        ? undefined
        : sortedCalendarEvents[upcomingCalendarEventIndex - 1],
    );
  };

  return (
    <CalendarContext.Provider
      value={{ upcomingCalendarEvent, updateUpcomingCalendarEvent }}
    >
      <StyledContainer>
        {sortedMonthTimes.map((monthTime) => {
          const monthCalendarEvents = calendarEventsByMonthTime[monthTime];
          const year = getYear(monthTime);
          const isLastMonthOfYear = lastMonthTimeByYear[year] === monthTime;
          const monthLabel = format(monthTime, 'MMMM');

          return (
            !!monthCalendarEvents?.length && (
              <Section key={monthTime}>
                <H3Title
                  title={
                    <>
                      {monthLabel}
                      {isLastMonthOfYear && <StyledYear> {year}</StyledYear>}
                    </>
                  }
                />
                <CalendarMonthCard calendarEvents={monthCalendarEvents} />
              </Section>
            )
          );
        })}
      </StyledContainer>
    </CalendarContext.Provider>
  );
};
