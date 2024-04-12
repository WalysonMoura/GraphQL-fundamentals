import { Field, InputType } from "type-graphql";

@InputType()
export class CreateApponintmentInput {
  @Field(() => String)
  customerId: string;

  @Field(() => Date)
  startsAt: Date;

  @Field(() => Date)
  endsAt: Date;
}
