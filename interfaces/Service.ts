import { Block } from "./sanity/Block";
import { Image } from "./sanity/Image";

export interface Service {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  title: string;
  description: Block[];
  image: Image;
  publishedAt: Date;
  order: number;
}
