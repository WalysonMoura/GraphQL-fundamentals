import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Apponintment {
  @Field(() => Date)
  startsAt: Date;

  @Field(() => Date)
  endsAt: Date;
}
