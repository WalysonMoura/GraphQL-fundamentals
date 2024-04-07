import { Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class ApponintmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello World";
  }

  @Mutation(() => Boolean)
  async createApponintment() {
    
  }
}
