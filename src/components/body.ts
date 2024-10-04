import type { PropType } from 'vue'
import type { Podcast } from '../models/Podcast'
import { h } from 'vue'
import header from './header'
import main from './main'

interface Props {
  podcast?: Podcast
}

export default {
  props: {
    podcast: {
      type: Object as PropType<Podcast>,
      required: true,
    },
  },
  setup(props: Props) {
    return h('body', [
      header.setup({ podcast: props.podcast }),
      main.setup({ podcast: props.podcast }),
    ])
  },
}
