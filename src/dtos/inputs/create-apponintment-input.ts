import { Field, InputType } from "type-graphql";

@InputType()
export class CreateApponintmentInput {
  @Field()
  customerId: string;

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
