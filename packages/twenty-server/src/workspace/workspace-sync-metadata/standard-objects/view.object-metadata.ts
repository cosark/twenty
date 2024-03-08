import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { RelationMetadataType } from 'src/metadata/relation-metadata/relation-metadata.entity';
import { viewStandardFieldIds } from 'src/workspace/workspace-sync-metadata/constants/standard-field-ids';
import { standardObjectIds } from 'src/workspace/workspace-sync-metadata/constants/standard-object-ids';
import { FieldMetadata } from 'src/workspace/workspace-sync-metadata/decorators/field-metadata.decorator';
import { IsNullable } from 'src/workspace/workspace-sync-metadata/decorators/is-nullable.decorator';
import { IsSystem } from 'src/workspace/workspace-sync-metadata/decorators/is-system.decorator';
import { ObjectMetadata } from 'src/workspace/workspace-sync-metadata/decorators/object-metadata.decorator';
import { RelationMetadata } from 'src/workspace/workspace-sync-metadata/decorators/relation-metadata.decorator';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { ViewFieldObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/view-field.object-metadata';
import { ViewFilterObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/view-filter.object-metadata';
import { ViewSortObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/view-sort.object-metadata';

@ObjectMetadata({
  standardId: standardObjectIds.view,
  namePlural: 'views',
  labelSingular: 'View',
  labelPlural: 'Views',
  description: '(System) Views',
  icon: 'IconLayoutCollage',
})
@IsSystem()
export class ViewObjectMetadata extends BaseObjectMetadata {
  @FieldMetadata({
    standardId: viewStandardFieldIds.name,
    type: FieldMetadataType.TEXT,
    label: 'Name',
    description: 'View name',
  })
  name: string;

  @FieldMetadata({
    standardId: viewStandardFieldIds.objectMetadataId,
    type: FieldMetadataType.UUID,
    label: 'Object Metadata Id',
    description: 'View target object',
  })
  objectMetadataId: string;

  @FieldMetadata({
    standardId: viewStandardFieldIds.type,
    type: FieldMetadataType.TEXT,
    label: 'Type',
    description: 'View type',
    defaultValue: { value: 'table' },
  })
  type: string;

  @FieldMetadata({
    standardId: viewStandardFieldIds.isCompact,
    type: FieldMetadataType.BOOLEAN,
    label: 'Compact View',
    description: 'Describes if the view is in compact mode',
    defaultValue: { value: false },
  })
  isCompact: boolean;

  @FieldMetadata({
    standardId: viewStandardFieldIds.viewFields,
    type: FieldMetadataType.RELATION,
    label: 'View Fields',
    description: 'View Fields',
    icon: 'IconTag',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    inverseSideTarget: () => ViewFieldObjectMetadata,
  })
  @IsNullable()
  viewFields: ViewFieldObjectMetadata[];

  @FieldMetadata({
    standardId: viewStandardFieldIds.viewFilters,
    type: FieldMetadataType.RELATION,
    label: 'View Filters',
    description: 'View Filters',
    icon: 'IconFilterBolt',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    inverseSideTarget: () => ViewFilterObjectMetadata,
  })
  @IsNullable()
  viewFilters: ViewFilterObjectMetadata[];

  @FieldMetadata({
    standardId: viewStandardFieldIds.viewSorts,
    type: FieldMetadataType.RELATION,
    label: 'View Sorts',
    description: 'View Sorts',
    icon: 'IconArrowsSort',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    inverseSideTarget: () => ViewSortObjectMetadata,
  })
  @IsNullable()
  viewSorts: ViewSortObjectMetadata[];
}
