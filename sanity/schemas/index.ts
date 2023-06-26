import { type SchemaTypeDefinition } from "sanity";
import { teamMember } from "./teamMember";
import { about } from "./about";
import { event } from "./event";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMember, about, event],
};
