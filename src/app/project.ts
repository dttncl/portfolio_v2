import { Languages } from "./languages";

export interface Project {
    name: string;
    languages: Languages[];
    desc: string,
    github: string,
    live: string,
}