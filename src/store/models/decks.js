export const decks = {
  state: {
    table: {
    },
    selected: null
  },
  reducers: {
    setDecks: (state, payload) => {
      return { ...state, table: payload };
    },
    addDeck: (state, payload) => {
      const table = { ...state.table, [payload.id]: payload };
      return { ...state, table };
    },
    removeDeck: (state, payload) => {
      const { table } = state;
      delete table[payload];
      return { ...state, table };
    },
    selectDeck: (state, payload) => ({
      ...state,
      selected: payload
    }),
    addCard: (state, payload) => {
      const deck = { ...state.table[payload.deckId] };
      deck.cards = [...deck.cards, payload];
      deck.cardsTotal = deck.cards.length;
      return { ...state, table: { ...state.table, [deck.id]: deck } };
    }
  },
  selectors: {
    deckList: state => {
      return Object.entries(state.table).map(([k, v]) => v);
    },
    selectedDeck: state => {
      const { table, selected } = state;
      return table[selected];
    }
  }
};
