import { useContext, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { differenceInSeconds } from 'date-fns';
import { motion, useAnimationControls } from 'framer-motion';

import { CalendarContext } from '@/activities/calendar/contexts/CalendarContext';
import { CalendarEvent } from '@/activities/calendar/types/CalendarEvent';
import { getCalendarEventEndDate } from '@/activities/calendar/utils/getCalendarEventEndDate';

type CalendarUpcomingEventIndicatorProps = {
  calendarEvent: CalendarEvent;
  isFirstEventOfDay?: boolean;
  isLastEventOfDay?: boolean;
};

const StyledUpcomingEventIndicator = styled(motion.div)`
  align-items: center;
  background-color: ${({ theme }) => theme.font.color.danger};
  display: inline-flex;
  height: 1.5px;
  left: 0;
  position: absolute;
  right: 0;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  transform: translateY(-50%);

  &::before {
    background-color: ${({ theme }) => theme.font.color.danger};
    border-radius: 1px;
    content: '';
    display: block;
    height: ${({ theme }) => theme.spacing(1)};
    width: ${({ theme }) => theme.spacing(1)};
  }
`;

export const CalendarUpcomingEventIndicator = ({
  calendarEvent,
  isFirstEventOfDay,
  isLastEventOfDay,
}: CalendarUpcomingEventIndicatorProps) => {
  const theme = useTheme();
  const animationControls = useAnimationControls();
  const { updateUpcomingCalendarEvent } = useContext(CalendarContext);

  useEffect(() => {
    const startAnimation = async () => {
      const endsAt = getCalendarEventEndDate(calendarEvent);
      const { startsAt } = calendarEvent;
      const startsIn = differenceInSeconds(startsAt, Date.now());

      await animationControls.start('started', {
        delay: Math.max(0, startsIn),
      });
      await animationControls.start('aboutToEnd', {
        delay: differenceInSeconds(endsAt, startsAt),
      });

      updateUpcomingCalendarEvent();

      animationControls.start('ended');
    };

    startAnimation();

    return () => {
      animationControls.stop();
    };
  }, [
    animationControls,
    calendarEvent,
    theme.animation.duration.normal,
    updateUpcomingCalendarEvent,
  ]);

  const topOffset = isLastEventOfDay ? 9 : 6;
  const bottomOffset = isFirstEventOfDay ? 9 : 6;

  const upcomingEventIndicatorVariants = {
    upcoming: { top: `calc(100% + ${bottomOffset}px)` },
    started: { top: `calc(100% + 3px)` },
    aboutToEnd: { top: `-${topOffset}px` },
    ended: { opacity: 0, top: `-${topOffset}px` },
  };

  return (
    <StyledUpcomingEventIndicator
      initial="upcoming"
      animate={animationControls}
      variants={upcomingEventIndicatorVariants}
      transition={{
        duration: theme.animation.duration.normal,
      }}
    />
  );
};
