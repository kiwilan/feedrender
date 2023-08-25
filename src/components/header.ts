import { defineProps, h } from 'vue'
import type { Podcast } from '~/models/Podcast'

interface Props {
  podcast?: Podcast
}

export default {
  props: defineProps<Props>(),
  setup(props: Props) {
    return h('header', [
      h('div', { class: 'header-block' }, [
        h('div', { class: 'header-block__title' }, [props.podcast?.title]),
        h('div', { class: 'header-block__description' }, [props.podcast?.description]),
      ]),
    ])
  },
}
