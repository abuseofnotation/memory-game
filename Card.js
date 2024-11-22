export const Card = {
    props: {
      letter: {
        type: String,
        required: true,
      },
      opened: {
        type: Boolean,
        required: true,
      },
      paired: {
        type: Boolean,
        required: true,
      },
    },
    emits: ['toggle', 'clickBack'],
    template: `
      <div class="card" >
        <div :class="['card-inner', {opened}, {paired}]">
          <div class="card-face card-front" @click="$emit('toggle')">
            ?
          </div>
          <div class="card-face card-back"  @click="$emit('clickBack')">
            {{ letter }}
          </div>
        </div>
      </div>
    `,
  };
