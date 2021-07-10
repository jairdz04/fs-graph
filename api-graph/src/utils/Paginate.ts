import { ClassType, Field, ObjectType, Int } from 'type-graphql';

export default function PaginatedResponse<TItemsFieldValue>(
  itemsFieldValue: ClassType<TItemsFieldValue> | string | number | boolean
): any {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @Field()
    moreItemsToShow: boolean;

    @Field(() => [itemsFieldValue])
    items: TItemsFieldValue[];

    @Field(() => Int)
    count: number;

    @Field(() => Int)
    limit: number;

    @Field(() => Int)
    offset: number;
  }

  return PaginatedResponseClass;
}
