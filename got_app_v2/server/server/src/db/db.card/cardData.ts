// import { TarotCard, ITarotCardDoc } from "../../api/models/Tarotcard";
// import { CardWithSymbols, fetchCardsWithSymbols } from "./cardsWithSymbols";
// import { tarotCardSymbols } from "./cardDescriptions";
// import { getCards } from "../../api/models/Tarotcard";
// interface CardWithSymbols extends ITarotCardDoc {
//   symbols: string[];
//   description: string;
// }
// const fetchCardsWithSymbols = async (): Promise<CardWithSymbols[]> => {
//   const tarotCards = await getCards();
//   const cardsWithSymbols: CardWithSymbols[] = tarotCards.map((card: ITarotCardDoc) => {
//     const cardSymbol = tarotCardSymbols.find(symbol => symbol.name === card.name);

//     if (!cardSymbol) {
//       throw new Error(`No symbol found for card: ${card.name}`);
//     }

//     return {
//       ...card,
//       symbols: cardSymbol.symbols,
//       description: cardSymbol.description,
//     } as CardWithSymbols;
//   });

//   return cardsWithSymbols;
// };

export interface cards extends ITarotCardDoc {
  name: string;
  cardNumber: number;
  arcana: string;
  suit?: string;
  symbols: Array<string>;
  description?: string;
}
export const cards = [
  //^ MAJOR arcana:
  {
    name: "The Fool",
    cardNumber: 0,
    arcana: "Major",
    symbols: ["Beginnings", "Innocence", "Spontaneity", "Free Spirit"],
    description:
      "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.",
  },
  {
    name: "The Magician",
    cardNumber: 1,
    arcana: "Major",
    symbols: ["Willpower", "Desire", "Creation", "Manifestation"],
    description:
      "The Magician is about making higher - and better - use of all of one's power. The Magician is also about creating something new and fresh.",
  },
  {
    name: "The High Priestess",
    cardNumber: 2,
    arcana: "Major",
    symbols: ["Intuition", "Higher powers", "Mystery", "Subconscious mind"],
    description:
      "The High Priestess is a card of mystery, stillness and passivity. This card suggests that it is time to retreat and reflect upon the situation and trust your inner instincts to guide you through it.",
  },
  {
    name: "The Empress",
    cardNumber: 3,
    arcana: "Major",
    symbols: ["Fertility", "Femininity", "Beauty", "Nature"],
    description:
      "The Empress shows a deep connection with our femininity. Femininity translates in many ways  beauty, sensuality, fertility, creative expression, nurturing  and is necessary in creating balance in both men and women.",
  },
  {
    name: "The Emperor",
    cardNumber: 4,
    arcana: "Major",
    symbols: ["Authority", "Structure", "Control", "Fatherhood"],
    description:
      "The Emperor represents structure, order and regulation - forces to balance the free-flowing, lavish abundance of the Empress.",
  },
  {
    name: "The Hierophant",
    cardNumber: 5,
    arcana: "Major",
    symbols: ["Religion", "Group identification", "Conformity", "Tradition"],
    description:
      "The Hierophant card represents an established set of spiritual values and beliefs and is often correlated with religion and other formal doctrines.",
  },

  {
    name: "The Lovers",
    cardNumber: 6,
    arcana: "Major",
    symbols: [
      "Love",
      "Harmony",
      "Relationships",
      "Values alignment",
      "Choices",
    ],
    description:
      "The Lovers card represents relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners.",
  },
  {
    name: "The Chariot",
    cardNumber: 7,
    arcana: "Major",
    symbols: ["Control", "Will power", "Victory", "Assertion", "Determination"],
    description:
      "The Chariot card represents overcoming conflicts and moving forward in a positive direction. One needs to keep going on and through sheer hard work and commitment, he will be victorious.",
  },
  {
    name: "Justice",
    cardNumber: 8,
    arcana: "Major",
    symbols: ["Fairness", "Truth", "Law", "Cause and effect"],
    description:
      "The Justice card indicates that the fairest decision will be made. Justice is the sword that cuts through a situation, and will not be swayed by outer beauty when deciding what is fair and just.",
  },
  {
    name: "The Hermit",
    cardNumber: 9,
    arcana: "Major",
    symbols: [
      "Soul-searching",
      "Introspection",
      "Being alone",
      "Inner guidance",
    ],
    description:
      "The Hermit card is often very symbolic of a period of introspection where the individual is drawing their focus and attention inward and looking for answers within.",
  },
  {
    name: "Wheel of Fortune",
    cardNumber: 10,
    arcana: "Major",
    symbols: [
      "Good luck",
      "Karma",
      "Life cycles",
      "Destiny",
      "A turning point",
    ],
    description:
      "The Wheel of Fortune card is symbolic of life's cycles. It says that no matter what, life keeps on moving and we cannot stop it.",
  },
  {
    name: "Strength",
    cardNumber: 11,
    arcana: "Major",
    symbols: ["Strength", "Courage", "Patience", "Control", "Compassion"],
    description:
      "The Strength card represents strength, determination, and power in a manner that is more refined than The Chariot. It's about inner strength and the human spirit's ability to overcome any obstacle.",
  },
  {
    name: "The Hanged Man",
    cardNumber: 12,
    arcana: "Major",
    symbols: ["Suspension", "Restriction", "Letting go", "Sacrifice"],
    description:
      "The Hanged Man card represents self-sacrifice and meditation. It suggests the need to stop resisting and gain enlightenment and clarity.",
  },
  {
    name: "Death",
    cardNumber: 13,
    arcana: "Major",
    symbols: ["Endings", "Change", "Transformation", "Transition"],
    description:
      "The Death card is probably the most feared and misunderstood of all the cards in the Tarot deck. It's often associated with actual death, but it's actually a card of transformation and change.",
  },
  {
    name: "Temperance",
    cardNumber: 14,
    arcana: "Major",
    symbols: ["Balance", "Moderation", "Patience", "Purpose"],
    description:
      "Temperance is a card about balance, in many ways, and relationships of all kinds. It's about the blending of opposites and the meeting of certain elements in the middle.",
  },
  {
    name: "The Devil",
    cardNumber: 15,
    arcana: "Major",
    symbols: ["Materialism", "Ignorance", "Stagnation", "Self-Bondage"],
    description:
      "The Devil card represents the hidden forces of negativity that constrain you and that you fear, but are also seduced by and become compulsively attached to.",
  },
  {
    name: "The Tower",
    cardNumber: 16,
    arcana: "Major",
    symbols: ["Sudden Change", "Release", "Downfall", "Revelation"],
    description:
      "The Tower card is a sign to brace for impact. It represents a sudden, momentous change, one that can be difficult to handle but can also lead to transformation and enlightenment.",
  },
  {
    name: "The Star",
    cardNumber: 17,
    arcana: "Major",
    symbols: ["Hope", "Spirituality", "Renewal", "Inspiration"],
    description:
      "The Star card brings renewed hope and faith, and a sense that you are truly blessed by the universe. You are entering a loving, peaceful, harmonious phase in your life.",
  },
  {
    name: "The Moon",
    cardNumber: 18,
    arcana: "Major",
    symbols: ["Illusion", "Fear", "Anxiety", "Subconscious"],
    description:
      "The Moon card represents illusion, fear, and the realm of the subconscious. It's time to look inward for answers, and not be fooled by misleading appearances.",
  },
  {
    name: "The Sun",
    cardNumber: 19,
    arcana: "Major",
    symbols: ["Joy", "Success", "Celebration", "Positivity"],
    description:
      "The Sun card represents success, radiance and abundance. The Sun gives you strength and tells you that no matter where you go or what you do, your positive and radiant energy will follow you.",
  },
  {
    name: "Judgement",
    cardNumber: 20,
    arcana: "Major",
    symbols: ["Judgement", "Rebirth", "Inner Calling", "Absolution"],
    description:
      "The Judgement card is calling you to rise up and embrace a higher level of consciousness for the service of your highest good. It represents a significant life change and making choices that might be difficult but will benefit you in the long run.",
  },
  {
    name: "The World",
    cardNumber: 21,
    arcana: "Major",
    symbols: ["Completion", "Integration", "Accomplishment", "Travel"],
    description:
      "The World card represents completion, the divine inner order of the universe and unity with the divine. The World signifies completion, achievement and fulfillment. All of your efforts are finally paying off and you have reached the end of a journey or completed a major life cycle.",
  },

  //^ MINOR arcana:
  // Minor Arcana cards - Cups
  {
    name: "Ace of Cups",
    cardNumber: 1,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Emotional Force", "Intuition", "Intimacy", "Love"],
    description:
      "The Ace of Cups represents the beginning of love, happiness and compassion. It can indicate the start of a new relationship, or a deeper connection within an existing relationship.",
  },
  {
    name: "Two of Cups",
    cardNumber: 2,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Unity", "Partnership", "Two Become One", "Mutual Attraction"],
    description:
      "The Two of Cups often refers to a romantic relationship, but it can also indicate any kind of partnership, including business partnerships. It suggests a mutual attraction and a well-balanced, equal connection.",
  },
  {
    name: "Three of Cups",
    cardNumber: 3,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Celebration", "Friendship", "Creativity", "Community"],
    description:
      "The Three of Cups is a card of celebration, friendship, sisterhood, and creative collaborations. Your friends and family are here to support you and lift you up to even higher levels of success.",
  },

  {
    name: "Four of Cups",
    cardNumber: 4,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Meditation", "Contemplation", "Reevaluation"],
    description:
      "The Four of Cups often appears when you are bored or dissatisfied with the outer world. You may feel disconnected and uninterested, which calls for a reevaluation of your current circumstances.",
  },
  {
    name: "Five of Cups",
    cardNumber: 5,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Loss", "Regret", "Disappointment", "Despair"],
    description:
      "The Five of Cups often appears in a Tarot reading when a situation hasn’t turned out the way you expected, and you are feeling sad, regretful, and disappointed. It's a reminder to acknowledge your feelings of disappointment and start the healing process.",
  },
  {
    name: "Six of Cups",
    cardNumber: 6,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Revisiting the Past", "Childhood Memories", "Innocence", "Joy"],
    description:
      "The Six of Cups is a card of childhood, nostalgia, naive happiness, and generosity. You want to return to the happy memories of your past, whether as a child, teenager or adult.",
  },
  {
    name: "Seven of Cups",
    cardNumber: 7,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Choices", "Fantasy", "Illusion"],
    description:
      "The Seven of Cups often appears when a decision needs to be made, and the image on the card reflects this by displaying various cups for you to choose from.",
  },
  {
    name: "Eight of Cups",
    cardNumber: 8,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Disillusionment", "Leaving Behind", "Moving On"],
    description:
      "The Eight of Cups suggests that you feel compelled to move on from a disappointing or unfulfilling relationship. It may be tough, but this card is a clear sign that it's time to leave the past behind.",
  },
  {
    name: "Nine of Cups",
    cardNumber: 9,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Contentment", "Satisfaction", "Gratitude"],
    description:
      "The Nine of Cups is a card of total satisfaction and contentment. It suggests that you are in a place where you can sit back and enjoy all that you have achieved.",
  },
  {
    name: "Ten of Cups",
    cardNumber: 10,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Harmony", "Marriage", "Happiness", "Alignment"],
    description:
      "The Ten of Cups embodies happiness, joy, contentment and emotional fulfillment, particularly in the area of your relationships and family.",
  },
  {
    name: "Page of Cups",
    cardNumber: 11,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Creative Opportunities", "Intuition", "Curiosity"],
    description:
      "The Page of Cups suggests a new idea or opportunity has come to you out of the blue. Your creative energy is flowing, and now is the time to express yourself and let your imagination wander.",
  },
  {
    name: "Knight of Cups",
    cardNumber: 12,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Romance", "Charm", "Imagination", "Beauty"],
    description:
      "The Knight of Cups is a card which depicts a knight riding on a horse and carrying a cup as if he is a messenger of a certain sort. It's a card about romance, charm, and an enthusiasm for life.",
  },
  {
    name: "Queen of Cups",
    cardNumber: 13,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Compassion", "Calm", "Comfort"],
    description:
      "The Queen of Cups is nurturing, caring, compassionate and sensitive. When she appears in a Tarot reading, you are embodying her 'queenly' qualities of emotional stability, intuition, and an understanding nature.",
  },
  {
    name: "King of Cups",
    cardNumber: 14,
    arcana: "Minor",
    suit: "Cups",
    symbols: ["Emotional Balance", "Generosity", "Diplomacy"],
    description:
      "The King of Cups represents mastery over the realms of emotion, creativity, and the unconscious. When this card appears, it's an indication that you have gained control over your feelings and can handle yourself in a mature and balanced manner.",
  },
  // Minor Arcana cards - Pentacles
  {
    name: "Ace of Pentacles",
    cardNumber: 1,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Opportunity", "Prosperity", "New Venture"],
    description:
      "The Ace of Pentacles signifies a new opportunity for prosperity and abundance in your life. It could be a new job, a financial windfall, or a promising business venture.",
  },
  {
    name: "Two of Pentacles",
    cardNumber: 2,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Balance", "Adaptability", "Time Management"],
    description:
      "The Two of Pentacles suggests that you are juggling your resources, time, or priorities. It's a card of balance and adaptability - you need to stay flexible and keep everything in flow.",
  },
  {
    name: "Three of Pentacles",
    cardNumber: 3,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Teamwork", "Planning", "Competence"],
    description:
      "The Three of Pentacles is a card of teamwork and collaboration. It suggests that you are working well with others and are contributing your skills and abilities to a group project or collaborative effort.",
  },

  {
    name: "Four of Pentacles",
    cardNumber: 4,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Control", "Stability", "Security"],
    description:
      "The Four of Pentacles signifies a desire for control and stability, especially in terms of money and financial matters. This card suggests that you are in a position of stability and security.",
  },
  {
    name: "Five of Pentacles",
    cardNumber: 5,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Loss", "Financial Trouble", "Worry"],
    description:
      "The Five of Pentacles is often a sign of financial trouble or loss. This card suggests a time of hardship and insecurity. However, it also reminds us that this is a temporary situation and help is available if you seek it.",
  },
  {
    name: "Six of Pentacles",
    cardNumber: 6,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Generosity", "Charity", "Sharing"],
    description:
      "The Six of Pentacles represents generosity, charity, and giving or receiving help. It suggests a balance of resources and indicates that you may either be in a position to help others, or in a position to accept help.",
  },
  {
    name: "Seven of Pentacles",
    cardNumber: 7,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Patience", "Reward", "Investment"],
    description:
      "The Seven of Pentacles symbolizes patience, reward after hard work, and investment. It suggests that you have been working hard and investing in your future, and that while the rewards are not immediate, patience will bring success.",
  },
  {
    name: "Eight of Pentacles",
    cardNumber: 8,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Diligence", "Knowledge", "Detail-oriented"],
    description:
      "The Eight of Pentacles represents diligence, knowledge, and attention to detail. It suggests that you are working hard to perfect your skills and your dedication to your craft will lead to success.",
  },
  {
    name: "Nine of Pentacles",
    cardNumber: 9,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Abundance", "Independence", "Luxury"],
    description:
      "The Nine of Pentacles symbolizes abundance, independence, and luxury. It suggests that through hard work and perseverance, you have achieved a time of peace, abundance, and independence.",
  },
  {
    name: "Ten of Pentacles",
    cardNumber: 10,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Wealth", "Family", "Established"],
    description:
      "The Ten of Pentacles represents wealth, family, and establishment. It suggests a time of financial stability and success, and signifies accomplishment and culmination.",
  },
  {
    name: "Page of Pentacles",
    cardNumber: 11,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Opportunity", "Study", "New venture"],
    description:
      "The Page of Pentacles represents opportunity, the study of new skills, and embarking on a new venture. It suggests that you are ready to learn new skills and expand your horizons.",
  },
  {
    name: "Knight of Pentacles",
    cardNumber: 12,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Efficiency", "Routine", "Conservatism"],
    description:
      "The Knight of Pentacles represents efficiency, routine, and conservatism. It suggests that you are taking a methodical, planned approach to achieve your goals.",
  },
  {
    name: "Queen of Pentacles",
    cardNumber: 13,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Practicality", "Motherhood", "Down-to-earth"],
    description:
      "The Queen of Pentacles represents practicality, motherhood, and a down-to-earth approach. It suggests that you are nurturing, caring, and are maintaining a warm, welcoming home.",
  },
  {
    name: "King of Pentacles",
    cardNumber: 14,
    arcana: "Minor",
    suit: "Pentacles",
    symbols: ["Security", "Control", "Power"],
    description:
      "The King of Pentacles symbolizes security, control, and power. It suggests that you have achieved a lot in terms of wealth and material possessions and are in a position of authority and control.",
  },

  // Minor Arcana cards - Swords
  {
    name: "Ace of Swords",
    cardNumber: 1,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Hand", "Clouds", "Crown", "Sword"],
    description:
      "The Ace of Swords symbolizes a period of insight and mental clarity. It suggests that a new idea or breakthrough is on the horizon.",
  },
  {
    name: "Two of Swords",
    cardNumber: 2,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Blindfold", "Sea", "Swords", "Moon"],
    description:
      "The Two of Swords represents a difficult decision or stalemate. It suggests the need to make a choice, but the information needed to make that decision may be hidden or unclear.",
  },
  {
    name: "Three of Swords",
    cardNumber: 3,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Heart", "Clouds", "Rain", "Swords"],
    description:
      "The Three of Swords symbolizes heartbreak, sorrow, and grief. It suggests a period of difficulty or loss, but also the potential for emotional growth and resilience.",
  },
  {
    name: "Four of Swords",
    cardNumber: 4,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Rest", "Sarcophagus", "Swords", "Stained Glass"],
    description:
      "The Four of Swords represents a period of rest and recuperation. It suggests the need to take a break and recharge before moving forward.",
  },
  {
    name: "Five of Swords",
    cardNumber: 5,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Conflict", "Victory", "Defeat", "Swords"],
    description:
      "The Five of Swords symbolizes conflict and discord. It suggests the need to choose your battles wisely and consider the impact of your actions on others.",
  },
  {
    name: "Six of Swords",
    cardNumber: 6,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Journey", "Boat", "Swords", "Water"],
    description:
      "The Six of Swords represents a journey or transition. It suggests moving away from a difficult situation toward calmer waters and a brighter future.",
  },
  {
    name: "Seven of Swords",
    cardNumber: 7,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Deception", "Thieves", "Swords", "Moon"],
    description:
      "The Seven of Swords signifies deception, trickery, and hidden motives. It suggests the need to be cautious and vigilant to protect yourself from dishonesty.",
  },
  {
    name: "Eight of Swords",
    cardNumber: 8,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Restriction", "Blindfold", "Swords", "Surrounded"],
    description:
      "The Eight of Swords represents feeling trapped, restricted, or helpless. It suggests the need to examine self-imposed limitations and find ways to break free.",
  },
  {
    name: "Nine of Swords",
    cardNumber: 9,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Anxiety", "Nightmare", "Swords", "Upset"],
    description:
      "The Nine of Swords signifies anxiety, worry, and fear. It suggests the need to address your inner turmoil and seek support to overcome negative thoughts and emotions.",
  },
  {
    name: "Ten of Swords",
    cardNumber: 10,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Defeat", "End", "Swords", "Sunrise"],
    description:
      "The Ten of Swords represents a sense of defeat, betrayal, or reaching rock bottom. It suggests the need to let go of the past and embrace the opportunity for new beginnings.",
  },
  {
    name: "Page of Swords",
    cardNumber: 11,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Curiosity", "Page", "Swords", "Wind"],
    description:
      "The Page of Swords embodies curiosity, intellect, and youthful energy. They suggest the need to stay open-minded, seek knowledge, and embrace new ideas and perspectives.",
  },
  {
    name: "Knight of Swords",
    cardNumber: 12,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Action", "Knight", "Swords", "Horse"],
    description:
      "The Knight of Swords represents swift action, ambition, and assertiveness. They suggest the need to pursue your goals with determination and make decisions with confidence.",
  },

  {
    name: "Queen of Swords",
    cardNumber: 13,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["Queen", "Throne", "Swords", "Owl"],
    description:
      "The Queen of Swords embodies intellect, independence, and discernment. She suggests the importance of clear communication and making decisions based on logic.",
  },
  {
    name: "King of Swords",
    cardNumber: 14,
    arcana: "Minor",
    suit: "Swords",
    symbols: ["King", "Throne", "Swords", "Butterflies"],
    description:
      "The King of Swords represents intellectual power, authority, and truth. It suggests a time for making decisions based on logic and reason, rather than emotion.",
  },
  // Minor Arcana cards - Wands
  {
    name: "Ace of Wands",
    cardNumber: 1,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["New beginnings", "Inspiration", "Wands", "Hand"],
    description: "The Ace of Wands represents new beginnings, inspiration, and creative potential. It suggests the need to embrace opportunities and take bold action to pursue your passions.",
  },
  {
    name: "Two of Wands",
    cardNumber: 2,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Partnership", "Planning", "Wands", "World"],
    description: "The Two of Wands signifies partnership, planning, and future possibilities. It suggests the need to make strategic decisions and consider long-term goals in collaboration with others.",
  },
  {
    name: "Three of Wands",
    cardNumber: 3,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Expansion", "Opportunity", "Wands", "Horizon"],
    description: "The Three of Wands represents expansion, opportunity, and exploration. It suggests the need to broaden your horizons, embrace new experiences, and have a visionary outlook.",
  },
  {
    name: "Four of Wands",
    cardNumber: 4,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Celebration", "Harmony", "Wands", "Canopy"],
    description: "The Four of Wands signifies celebration, harmony, and joyful occasions. It suggests the need to embrace moments of joy, connect with loved ones, and appreciate the blessings in life.",
  },
  {
    name: "Five of Wands",
    cardNumber: 5,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Conflict", "Competition", "Wands", "Clashing"],
    description: "The Five of Wands represents conflict, competition, and challenges. It suggests the need to navigate conflicts with diplomacy, find common ground, and embrace healthy competition.",
  },
  {
    name: "Six of Wands",
    cardNumber: 6,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Victory", "Recognition", "Wands", "Triumph"],
    description: "The Six of Wands signifies victory, recognition, and public acclaim. It suggests the need to celebrate your achievements, embrace your strengths, and inspire others with your success.",
  },
  {
    name: "Seven of Wands",
    cardNumber: 7,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Courage", "Defiance", "Wands", "Resistance"],
    description: "The Seven of Wands represents courage, defiance, and standing your ground. It suggests the need to assert yourself, defend your beliefs, and overcome challenges with determination.",
  },
  {
    name: "Eight of Wands",
    cardNumber: 8,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Rapid action", "Progress", "Wands", "Arrows"],
    description: "The Eight of Wands signifies rapid action, progress, and swift movement. It suggests the need to seize opportunities, embrace change, and make decisive strides towards your goals.",
  },
  {
    name: "Nine of Wands",
    cardNumber: 9,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Resilience", "Perseverance", "Wands", "Protection"],
    description: "The Nine of Wands represents resilience, perseverance, and inner strength. It suggests the need to stay determined, overcome obstacles, and protect your boundaries.",
  },
  {
    name: "Ten of Wands",
    cardNumber: 10,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Burden", "Responsibility", "Wands", "Heavy load"],
    description: "The Ten of Wands signifies a heavy burden, responsibility, and feeling overwhelmed. It suggests the need to reassess your commitments, delegate tasks, and seek support to lighten the load.",
  },
  {
    name: "Page of Wands",
    cardNumber: 11,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Creativity", "Enthusiasm", "Wands", "Wand"],
    description: "The Page of Wands embodies creativity, enthusiasm, and new beginnings. They suggest the need to explore your passions, embrace your unique talents, and pursue exciting opportunities.",
  },
  {
    name: "Knight of Wands",
    cardNumber: 12,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Adventurous", "Passionate", "Wands", "Horse"],
    description: "The Knight of Wands represents adventure, passion, and boldness. They suggest the need to embrace a spirit of adventure, take risks, and pursue your goals with passion and drive.",
  },
  {
    name: "Queen of Wands",
    cardNumber: 13,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Confidence", "Leadership", "Wands", "Throne"],
    description: "The Queen of Wands embodies confidence, leadership, and charisma. They suggest the need to embrace your personal power, inspire others, and lead with authenticity and warmth.",
  },
  {
    name: "King of Wands",
    cardNumber: 14,
    arcana: "Minor",
    suit: "Wands",
    symbols: ["Strength", "Charisma", "Wands", "Throne"],
    description: "The King of Wands represents strength, charisma, and vision. They suggest the need to lead with confidence, assertiveness, and inspire others with your passion and vision.",
  },

];

