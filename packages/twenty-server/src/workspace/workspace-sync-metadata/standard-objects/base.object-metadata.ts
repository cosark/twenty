import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { baseObjectStandardFieldIds } from 'src/workspace/workspace-sync-metadata/constants/standard-field-ids';
import { FieldMetadata } from 'src/workspace/workspace-sync-metadata/decorators/field-metadata.decorator';
import { IsSystem } from 'src/workspace/workspace-sync-metadata/decorators/is-system.decorator';

export abstract class BaseObjectMetadata {
  @FieldMetadata({
    standardId: baseObjectStandardFieldIds.id,
    type: FieldMetadataType.UUID,
    label: 'Id',
    description: 'Id',
    defaultValue: { type: 'uuid' },
    icon: 'Icon123',
  })
  @IsSystem()
  id: string;

  @FieldMetadata({
    standardId: baseObjectStandardFieldIds.createdAt,
    type: FieldMetadataType.DATE_TIME,
    label: 'Creation date',
    description: 'Creation date',
    icon: 'IconCalendar',
    defaultValue: { type: 'now' },
  })
  createdAt: Date;

  @FieldMetadata({
    standardId: baseObjectStandardFieldIds.updatedAt,
    type: FieldMetadataType.DATE_TIME,
    label: 'Update date',
    description: 'Update date',
    icon: 'IconCalendar',
    defaultValue: { type: 'now' },
  })
  @IsSystem()
  updatedAt: Date;
}
