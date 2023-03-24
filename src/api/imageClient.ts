import { createClient } from "pexels";

if (!process.env.PEXELS_API_KEY) {
  throw new Error("PEXELS_API_KEY is not defined");
}

export const imageClient = createClient(process.env.PEXELS_API_KEY);
