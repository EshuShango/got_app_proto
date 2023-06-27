// seedCards.js
// import { cards } from "./seedData";
// import { TarotCard } from "../../api/models/Tarotcard";

export const seedCards = async () => {
  try {
    // Delete existing cards
    // await TarotCard.deleteMany({});
    for (const card of cards) {
      // Update the card if it exists, otherwise create a new one
      await TarotCard.updateOne(
        {
          name: card.name,
          cardNumber: card.cardNumber,
          arcana: card.arcana,
          suit: card.suit,
          symbols: card.symbols,
          description: card.description,
        },
        { $set: card },

        { upsert: true }
      );
    }
    console.log("Cards added or updated successfully");
  } catch (error) {
    console.error("Could not add or update cards", error);
  }
};

// export const seedCards = async () => {
//   try {
//     const count = await TarotCard.countDocuments({});
//     if (count > 0) {
//       console.log("Database already seeded");
//       return;
//     }
//       for (const card of cards) {
//         // Update the card if it exists, otherwise create a new one
//         await TarotCard.updateOne(
//           { name: card.name, cardNumber: card.cardNumber, arcana: card.arcana, suit: card.suit },
//           { $set: card },
//           { upsert: true }
//         );
//       }
//     await TarotCard.insertMany(cards);
//     console.log("Cards added successfully");
//   } catch (error) {
//     console.error("Could not add cards", error);
//   }
// };
