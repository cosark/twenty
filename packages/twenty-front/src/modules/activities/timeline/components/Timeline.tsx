import React from 'react';
import styled from '@emotion/styled';
import { isNonEmptyString } from '@sniptt/guards';

import { ActivityCreateButton } from '@/activities/components/ActivityCreateButton';
import { useActivityTargets } from '@/activities/hooks/useActivityTargets';
import { useOpenCreateActivityDrawer } from '@/activities/hooks/useOpenCreateActivityDrawer';
import { Activity } from '@/activities/types/Activity';
import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';
import AnimatedPlaceholder from '@/ui/layout/animated-placeholder/components/AnimatedPlaceholder';
import {
  StyledEmptyContainer,
  StyledEmptySubTitle,
  StyledEmptyTitle,
} from '@/ui/layout/animated-placeholder/components/EmptyPlaceholderStyles';
import { useIsMobile } from '@/ui/utilities/responsive/hooks/useIsMobile';

import { TimelineItemsContainer } from './TimelineItemsContainer';

const StyledMainContainer = styled.div`
  align-items: flex-start;
  align-self: stretch;
  border-top: ${({ theme }) =>
    useIsMobile() ? `1px solid ${theme.border.color.medium}` : 'none'};
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: center;
`;

export const Timeline = ({
  targetableObject,
}: {
  targetableObject: ActivityTargetableObject;
}) => {
  const { activityTargets } = useActivityTargets({ targetableObject });

  const { records: activities } = useFindManyRecords({
    skip: !activityTargets?.length,
    objectNameSingular: CoreObjectNameSingular.Activity,
    filter: {
      id: {
        in: activityTargets
          ?.map((activityTarget) => activityTarget.activityId)
          .filter(isNonEmptyString),
      },
    },
    orderBy: {
      createdAt: 'AscNullsFirst',
    },
  });

  const openCreateActivity = useOpenCreateActivityDrawer();

  if (!activities.length) {
    return (
      <StyledEmptyContainer>
        <AnimatedPlaceholder type="emptyTimeline" />
        <StyledEmptyTitle>Add your first Activity</StyledEmptyTitle>
        <StyledEmptySubTitle>
          There are no activities associated with this record.{' '}
        </StyledEmptySubTitle>
        <ActivityCreateButton
          onNoteClick={() =>
            openCreateActivity({
              type: 'Note',
              targetableObjects: [targetableObject],
            })
          }
          onTaskClick={() =>
            openCreateActivity({
              type: 'Task',
              targetableObjects: [targetableObject],
            })
          }
        />
      </StyledEmptyContainer>
    );
  }

  return (
    <StyledMainContainer>
      <TimelineItemsContainer activities={activities as Activity[]} />
    </StyledMainContainer>
  );
};
