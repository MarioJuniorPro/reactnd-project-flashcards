export const decks = {
  state: {
    list: Array.from(new Array(2)).map((n, i) => ({
      id: i,
      title: `Deck ${i}`,
      cardsTotal: i * 20
    }))
  },
  reducers: {
    addDeck: (state, payload) => {
      return { ...state, list: [payload, ...state.list] };
    }
  },
  effects: {}
};
