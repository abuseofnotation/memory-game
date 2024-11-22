import { Card } from './Card.js';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const shuffle = (array) => array.sort(() => (Math.random() > 0.5) ? 1 : -1)

export const Board = {
  props: {
    level: {
      type: Number,
      required: true,
    },
  },

  components: { Card },
  setup(props, {emit}) {

    console.log(props.level)
    const values = alphabet.substring(0, props.level)

    const letters = shuffle((values + values).split(''))
    const openedCards = Vue.ref([])
    const pairs = Vue.ref([])
    const pairsLeft = Vue.computed(() =>  letters.length/2 - pairs.value.length) 

    const openCard = (index) => {
      //The letter of the current card
      const letter = letters[index]

      //Open the card
      openedCards.value.push(index)

      if (openedCards.value.length === 2) {
        // If the user found a pair, record it
        if (letter === letters[openedCards.value[0]]) {
          pairs.value.push(letter) 
          openedCards.value = []
        } else {
        // Else, hide the cards
          setTimeout(() => {openedCards.value = []}, 1000)
        }
      //Prevent the user from opening more than two cards, before the timer ends
      } else if (openedCards.value.length > 2) {
        openedCards.value = []
      }

      console.log(pairs.value.length)
      console.log(pairsLeft)
      if (pairsLeft.value === 0) {
        setTimeout(() => emit('finish'), 2000)
      }
    };

    return {
      letters,
      pairs,
      openedCards,
      openCard,
      pairsLeft
    };
  },
  emits: ['finish'],
  template: `
  <h1>{{pairsLeft}} left</h1>
  <div class="letter-list">
    <card
      v-for="(letter, index) in letters" 
      :key="index" 
      :letter="letter" 
      :opened="openedCards.includes(index)"
      :paired="pairs.includes(letter)"
      @toggle="openCard(index)"
    ></card>
  </div>
  `,
};
