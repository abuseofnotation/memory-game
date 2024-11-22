import { Board } from './Board.js';
import { Menu } from './Menu.js';

export const Game = {
  components: { Board, Menu},
  setup() {
    const level = Vue.ref(undefined)
    return {
      level
    }
  },
  template: `

    <Menu v-if="level === undefined" @selected="level = $event"></Menu>
    <Board v-else  :level="level" @finish="level = undefined"></Board>
  `,
};
