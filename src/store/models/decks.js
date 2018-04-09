export const decks = {
  state: {
    list: Array.from(new Array(2)).map((n, i) => ({
      id: String(i),
      title: `Deck ${i}`,
      cardsTotal: i * 20
    })),
    selected: null
  },
  reducers: {
    addDeck: (state, payload) => {
      const newList = [payload, ...state.list];
      return { ...state, list: newList };
    },
    removeDeck: (state, payload) => {
      const newList = state.list.filter(deck => deck.id !== payload);
      return { ...state, list: newList };
    },
    selectDeck: (state, payload) => ({
      ...state, selected: payload
    }),
    addCard: (state, payload) => {

      const newList = state.list.reduce((acc, cur) => {
        acc.push(cur.id === payload.card.id ? payload.card : cur)
        return acc
      }, [])
      return { ...state, list: newList };

      // const deck = state.list.filter(deck => deck.id === payload.deckId);
      // deck.cards.push(payload.card)
      // const newList = state.list.filter(deck => deck.id !== payload);
      // return { ...state, list: [newList, deck] };
    }
  },
  subscriptions: {
    'deck/*': (action, state, unsubscribe) => {
      console.log(action)
    }
  }
};
