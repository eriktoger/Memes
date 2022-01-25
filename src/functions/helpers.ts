import { Meme } from "../types";

export const filterMemes = (memes: Meme[], name: string) =>
  memes.filter((meme) => meme.name.toLowerCase().includes(name.toLowerCase()));

export const sortMemes = (memes: Meme[], nameOrder: number) =>
  memes.sort((a, b) => a.name.localeCompare(b.name, "sv") * nameOrder);
