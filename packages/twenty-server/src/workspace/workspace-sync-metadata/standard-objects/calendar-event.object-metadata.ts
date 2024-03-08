import { RelationMetadata } from 'src/workspace/workspace-sync-metadata/decorators/relation-metadata.decorator';
import { FeatureFlagKeys } from 'src/core/feature-flag/feature-flag.entity';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import {
  RelationMetadataType,
  RelationOnDeleteAction,
} from 'src/metadata/relation-metadata/relation-metadata.entity';
import { FieldMetadata } from 'src/workspace/workspace-sync-metadata/decorators/field-metadata.decorator';
import { Gate } from 'src/workspace/workspace-sync-metadata/decorators/gate.decorator';
import { IsSystem } from 'src/workspace/workspace-sync-metadata/decorators/is-system.decorator';
import { ObjectMetadata } from 'src/workspace/workspace-sync-metadata/decorators/object-metadata.decorator';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CalendarEventAttendeeObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/calendar-event-attendee.object-metadata';
import { standardObjectIds } from 'src/workspace/workspace-sync-metadata/constants/standard-object-ids';
import { calendarEventStandardFieldIds } from 'src/workspace/workspace-sync-metadata/constants/standard-field-ids';

@ObjectMetadata({
  standardId: standardObjectIds.calendarEvent,
  namePlural: 'calendarEvents',
  labelSingular: 'Calendar event',
  labelPlural: 'Calendar events',
  description: 'Calendar events',
  icon: 'IconCalendar',
})
@IsSystem()
@Gate({
  featureFlag: FeatureFlagKeys.IsCalendarEnabled,
})
export class CalendarEventObjectMetadata extends BaseObjectMetadata {
  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.title,
    type: FieldMetadataType.TEXT,
    label: 'Title',
    description: 'Title',
    icon: 'IconH1',
  })
  title: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.isCanceled,
    type: FieldMetadataType.BOOLEAN,
    label: 'Is canceled',
    description: 'Is canceled',
    icon: 'IconCalendarCancel',
  })
  isCanceled: boolean;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.isFullDay,
    type: FieldMetadataType.BOOLEAN,
    label: 'Is Full Day',
    description: 'Is Full Day',
    icon: 'Icon24Hours',
  })
  isFullDay: boolean;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.startsAt,
    type: FieldMetadataType.DATE_TIME,
    label: 'Start DateTime',
    description: 'Start DateTime',
    icon: 'IconCalendarClock',
  })
  startsAt: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.endsAt,
    type: FieldMetadataType.DATE_TIME,
    label: 'End DateTime',
    description: 'End DateTime',
    icon: 'IconCalendarClock',
  })
  endsAt: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.externalCreatedAt,
    type: FieldMetadataType.DATE_TIME,
    label: 'Creation DateTime',
    description: 'Creation DateTime',
    icon: 'IconCalendarPlus',
  })
  externalCreatedAt: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.externalUpdatedAt,
    type: FieldMetadataType.DATE_TIME,
    label: 'Update DateTime',
    description: 'Update DateTime',
    icon: 'IconCalendarCog',
  })
  externalUpdatedAt: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.description,
    type: FieldMetadataType.TEXT,
    label: 'Description',
    description: 'Description',
    icon: 'IconFileDescription',
  })
  description: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.location,
    type: FieldMetadataType.TEXT,
    label: 'Location',
    description: 'Location',
    icon: 'IconMapPin',
  })
  location: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.iCalUID,
    type: FieldMetadataType.TEXT,
    label: 'iCal UID',
    description: 'iCal UID',
    icon: 'IconKey',
  })
  iCalUID: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.conferenceSolution,
    type: FieldMetadataType.TEXT,
    label: 'Conference Solution',
    description: 'Conference Solution',
    icon: 'IconScreenShare',
  })
  conferenceSolution: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.conferenceUri,
    type: FieldMetadataType.TEXT,
    label: 'Conference URI',
    description: 'Conference URI',
    icon: 'IconLink',
  })
  conferenceUri: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.recurringEventExternalId,
    type: FieldMetadataType.TEXT,
    label: 'Recurring Event ID',
    description: 'Recurring Event ID',
    icon: 'IconHistory',
  })
  recurringEventExternalId: string;

  @FieldMetadata({
    standardId: calendarEventStandardFieldIds.eventAttendees,
    type: FieldMetadataType.RELATION,
    label: 'Event Attendees',
    description: 'Event Attendees',
    icon: 'IconUserCircle',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    inverseSideTarget: () => CalendarEventAttendeeObjectMetadata,
    onDelete: RelationOnDeleteAction.CASCADE,
  })
  eventAttendees: CalendarEventAttendeeObjectMetadata[];
}
