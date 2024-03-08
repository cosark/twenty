import { useContext } from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { format } from 'date-fns';

import { CalendarUpcomingEventIndicator } from '@/activities/calendar/components/CalendarUpcomingEventIndicator';
import { CalendarContext } from '@/activities/calendar/contexts/CalendarContext';
import { CalendarEvent } from '@/activities/calendar/types/CalendarEvent';
import { getCalendarEventEndDate } from '@/activities/calendar/utils/getCalendarEventEndDate';
import { isPastCalendarEvent } from '@/activities/calendar/utils/isPastCalendarEvent';
import { IconArrowRight, IconLock } from '@/ui/display/icon';
import { Card } from '@/ui/layout/card/components/Card';
import { CardContent } from '@/ui/layout/card/components/CardContent';

type CalendarEventRowProps = {
  calendarEvent: CalendarEvent;
  className?: string;
  isFirstEventOfDay?: boolean;
  isLastEventOfDay?: boolean;
};

const StyledContainer = styled.div`
  align-items: center;
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(6)};
  position: relative;
`;

const StyledAttendanceIndicator = styled.div<{ active?: boolean }>`
  background-color: ${({ theme }) => theme.tag.background.gray};
  height: 100%;
  width: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.border.radius.xs};

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.tag.background.red};
    `}
`;

const StyledLabels = styled.div`
  align-items: center;
  display: flex;
  color: ${({ theme }) => theme.font.color.tertiary};
  gap: ${({ theme }) => theme.spacing(2)};
  flex: 1 0 auto;
`;

const StyledTime = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  width: ${({ theme }) => theme.spacing(26)};
`;

const StyledTitle = styled.div<{ active: boolean; canceled: boolean }>`
  flex: 1 0 auto;

  ${({ theme, active }) =>
    active &&
    css`
      color: ${theme.font.color.primary};
      font-weight: ${theme.font.weight.medium};
    `}

  ${({ canceled }) =>
    canceled &&
    css`
      text-decoration: line-through;
    `}
`;

const StyledVisibilityCard = styled(Card)<{ active: boolean }>`
  color: ${({ active, theme }) =>
    active ? theme.font.color.primary : theme.font.color.light};
  border-color: ${({ theme }) => theme.border.color.light};
  flex: 1 0 auto;
  transition: color ${({ theme }) => theme.animation.duration.normal} ease;
`;

const StyledVisibilityCardContent = styled(CardContent)`
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(0, 1)};
  height: ${({ theme }) => theme.spacing(6)};
  background-color: ${({ theme }) => theme.background.transparent.lighter};
`;

export const CalendarEventRow = ({
  calendarEvent,
  className,
  isFirstEventOfDay,
  isLastEventOfDay,
}: CalendarEventRowProps) => {
  const theme = useTheme();

  const { upcomingCalendarEvent } = useContext(CalendarContext);
  const isUpcoming = upcomingCalendarEvent?.id === calendarEvent?.id;

  const isPastEvent = isPastCalendarEvent(calendarEvent);
  const endsAt = getCalendarEventEndDate(calendarEvent);

  const startTimeLabel = calendarEvent.isFullDay
    ? 'All day'
    : format(calendarEvent.startsAt, 'HH:mm');
  const endTimeLabel = calendarEvent.isFullDay ? '' : format(endsAt, 'HH:mm');

  return (
    <StyledContainer className={className}>
      <StyledAttendanceIndicator />
      <StyledLabels>
        <StyledTime>
          {startTimeLabel}
          {endTimeLabel && (
            <>
              <IconArrowRight size={theme.icon.size.sm} />
              {endTimeLabel}
            </>
          )}
        </StyledTime>
        {calendarEvent.visibility === 'METADATA' ? (
          <StyledVisibilityCard active={!isPastEvent}>
            <StyledVisibilityCardContent>
              <IconLock size={theme.icon.size.sm} />
              Not shared
            </StyledVisibilityCardContent>
          </StyledVisibilityCard>
        ) : (
          <StyledTitle
            active={!isPastEvent}
            canceled={!!calendarEvent.isCanceled}
          >
            {calendarEvent.title}
          </StyledTitle>
        )}
      </StyledLabels>
      {!isPastEvent && isUpcoming && (
        <CalendarUpcomingEventIndicator
          calendarEvent={calendarEvent}
          isFirstEventOfDay={isFirstEventOfDay}
          isLastEventOfDay={isLastEventOfDay}
        />
      )}
    </StyledContainer>
  );
};
