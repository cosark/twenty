import { useContext, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';
import { AnimationControls } from 'framer-motion';

import { CalendarContext } from '@/activities/calendar/contexts/CalendarContext';
import { CalendarEvent } from '@/activities/calendar/types/CalendarEvent';
import { getCalendarEventEndDate } from '@/activities/calendar/utils/getCalendarEventEndDate';

type CalendarUpcomingEventIndicatorAnimationEffectProps = {
  animationControls: AnimationControls;
  calendarEvent: CalendarEvent;
};

export const CalendarUpcomingEventIndicatorAnimationEffect = ({
  animationControls,
  calendarEvent,
}: CalendarUpcomingEventIndicatorAnimationEffectProps) => {
  const { updateUpcomingCalendarEvent } = useContext(CalendarContext);

  useEffect(() => {
    const endsAt = getCalendarEventEndDate(calendarEvent);
    const { startsAt } = calendarEvent;
    const startsIn = differenceInSeconds(startsAt, Date.now());

    const startAnimation = async () => {
      await animationControls.start('started', {
        delay: Math.max(0, startsIn),
      });
      await animationControls.start('aboutToEnd', {
        delay: differenceInSeconds(endsAt, startsAt),
      });

      updateUpcomingCalendarEvent();
    };

    startAnimation();

    return () => {
      animationControls.stop();
    };
  }, [animationControls, calendarEvent, updateUpcomingCalendarEvent]);

  return null;
};
