import { type SchemaTypeDefinition } from "sanity";
import { teamMember } from "./teamMember";
import { about } from "./about";
import { event } from "./event";
import { audio } from "./audio";
import { video } from "./video";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMember, about, event, audio, video],
};
