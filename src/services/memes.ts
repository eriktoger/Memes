import { Meme } from "../types";

const key = process.env.AUTHKEY ?? "";

const options: RequestInit = {
  method: "GET",
};

export const getMemes = async (): Promise<{
  data: { memes: Meme[] };
}> => {
  try {
    const response = await fetch("https://api.imgflip.com/get_memes", options);
    return response.json();
  } catch (error) {
    console.log(error);
    return { data: { memes: [] } };
  }
};
