import { CreateApponintmentInput } from "@/dtos/inputs/create-apponintment-input";
import { Apponintment } from "@/dtos/models/apponintment-model";
import { Customer } from "@/dtos/models/customer-model";
import {
  Arg,
  Args,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";

@Resolver(() => Apponintment)
export class ApponintmentsResolver {
  @Query(() => [Apponintment])
  async appointment() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      },
    ];
  }

  @Mutation(() => Apponintment)
  async createAppointment(data: CreateApponintmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    return {
      appointment,
    };
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Apponintment) {
    console.log(appointment);

    return {
      name: "Walyson Moura",
    };
  }
}
