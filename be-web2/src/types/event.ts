import { Category } from "./category.js";
import { Speaker } from "./pembicara.js";

export interface Event{
    id: number;
    nama: string;
    location: string;
    dateEvent: Date;
    description: string;
    categoryId: number;
    speakerId: number;
    category?:Category;
    speaker?: Speaker;
}

