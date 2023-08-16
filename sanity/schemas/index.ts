import { type SchemaTypeDefinition } from "sanity";
import { teamMember } from "./teamMember";
import { about } from "./about";
import { event } from "./event";
import { audio } from "./audio";
import { video } from "./video";
import { post } from "./post";
import { author } from "./author";
import { pastorBio } from "./pastorBio";
import { pastorInterview } from "./pastorInterview";
import { memorialAudio } from "./memorialAudio";
import { memorialVideo } from "./memorialVideo";
import { comments } from "./comments";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    teamMember,
    about,
    event,
    audio,
    video,
    post,
    author,
    pastorBio,
    pastorInterview,
    memorialAudio,
    memorialVideo,
    comments,
  ],
};
