import { type SchemaTypeDefinition } from "sanity";
import { teamMember } from "./teamMember";
import { about } from "./about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMember, about],
};
