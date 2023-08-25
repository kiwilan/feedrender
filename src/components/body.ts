import { defineProps, h } from 'vue'
import header from './header'
import main from './main'
import type { Podcast } from '~/models/Podcast'

interface Props {
  podcast?: Podcast
}

export default {
  props: defineProps<Props>(),
  setup(props: Props) {
    return h('body', [
      header.setup({ podcast: props.podcast }),
      main.setup({ podcast: props.podcast }),
    ])
  },
}
