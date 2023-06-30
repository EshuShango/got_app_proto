import dotenv from "dotenv";
dotenv.config();

export const config = {
  userUrl: process.env.USER_URL || "http://localhost:8001",
  authUrl: process.env.AUTH_URL || "http://localhost:8002",
  cardUrl: process.env.CARD_URL || "http://localhost:8003",
  promptUrl: process.env.PROMPT_URL || "http://localhost:8005",
  serverPort: process.env.SERVER_PORT || "8080",
};
//! implement api gateway
