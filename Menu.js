import { Card } from './Card.js';
export const Menu = {
  components: { Card }, 
  setup() {
    return {
      levels: [4, 6, 8, 16, 32]
    }
  },
  emits: ['selected'],
  template: `
  <h1>Select difficulty level</h1>
  <div class="letter-list">
    <card
      v-for="(level, index) in levels" 
      :key="index" 
      :letter="level" 
      :opened="true"
      :paired="false"
      @clickBack="$emit('selected', level)"
    ></card>
  </div>
  `,
};
