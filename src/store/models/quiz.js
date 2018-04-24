import shuffle from 'lodash/shuffle'
export const quiz = {
  state: {
    deck: {},
    cards: [],
    index: 0,
    size: 0,
    correctAnswers: 0
  },
  reducers: {
    start(state, payload) {
      return {
        ...state,
        index: 0,
        correctAnswers: 0,
        deck: payload.deck,
        cards: shuffle(payload.deck.cards),
        size: payload.deck.cards.length
      };
    },
    retry(state, payload) {
      return {
        ...state,
        index: 0,
        correctAnswers: 0,
      };
    },
    answer(state, payload) {
      const correctAnswers = payload ? state.correctAnswers + 1 : state.correctAnswers;
      return { ...state, index: state.index + 1, correctAnswers };
    }
  },
  selectors: {
    currentCard(state) {
      return state.cards[state.index] || {};
    },
    cardPosition(state) {
      return state.index + 1;
    },
    finished(state) {
      return state.index >= state.size;
    }
  }
};
