import { Meme } from "../types";
import { sortMemes, filterMemes } from "./helpers";

const mockMemes = [{ name: "B" }, { name: "A" }, { name: "C" }] as Meme[];

describe("Memes", () => {
  test("Filter Memes", () => {
    const filteredMemes = filterMemes(mockMemes, "A");
    expect(filteredMemes.length).toBe(1);
    expect(filteredMemes[0]).toEqual(mockMemes[1]);
  });

  test("Sort Memes", () => {
    const sortedMemes = sortMemes([...mockMemes], -1);

    expect(sortedMemes.length).toBe(3);
    expect(sortedMemes[0]).toEqual(mockMemes[2]);
    expect(sortedMemes[1]).toEqual(mockMemes[0]);
    expect(sortedMemes[2].name).toEqual(mockMemes[1].name);
  });
});
