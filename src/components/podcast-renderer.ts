import { defineProps, h } from 'vue'
import head from './head'
import header from './header'
import type { Podcast } from '~/models/Podcast'

interface Props {
  podcast: Podcast
  css?: string
}

export default {
  props: defineProps<Props>(),
  setup(props: Props) {
    return h('html', [
      head.setup({ title: props.podcast.title, css: props.css }),
      h('body', [
        header.setup({ podcast: props.podcast }),
        // h('div', {
        //   class: 'podcast',
        // }, [
        //   h('div', {
        //     class: 'podcast__header',
        //   }, [props.podcast.title]),
        // ]),
      ]),
    ])
  },
}
