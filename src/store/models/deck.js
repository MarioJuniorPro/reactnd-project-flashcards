export const deck = {
    state: {
        id: null,
        title: null,
        cards: [],
        cardsTotal: 0
    },
    reducers: {
      addCard: (state, payload) => {
        // const newList = [payload, ...state.list];
        // return { ...state, list: newList };
      },
      removeDeck: (state, payload) => {
        // const newList = state.list.filter(deck => deck.id !== payload);
        // return { ...state, list: newList };
      }
    },
    effects: {}
  };
  