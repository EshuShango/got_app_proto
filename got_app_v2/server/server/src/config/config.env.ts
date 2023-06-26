import dotenv from "dotenv";
dotenv.config();

export const config = {
  userUrl: process.env.USER_URL!,
  authUrl: process.env.AUTH_URL!,
  cardUrl: process.env.CARD_URL!,
  promptUrl: process.env.PROMPT_URL!,
  serverPort: process.env.SERVER_PORT!,
};
//! implement api gateway 