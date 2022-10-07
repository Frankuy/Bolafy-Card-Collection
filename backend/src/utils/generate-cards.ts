const generateCards = (number: number, prefix: string) => {
  const cards = [];
  for (let index = 0; index < number; index++) {
    cards.push({
      name: `${prefix}-${index + 1}`,
      link: "https://upload.wikimedia.org/wikipedia/id/9/94/Persija_Jakarta_logo.png",
    });
  }
  return cards;
};

export default generateCards;
