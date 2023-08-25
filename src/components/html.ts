import { defineProps, h } from 'vue'
import head from './head'
import body from './body'
import type { Podcast } from '~/models/Podcast'

interface Props {
  podcast: Podcast
  css?: string
}

export default {
  props: defineProps<Props>(),
  setup(props: Props) {
    return h('html', {
      lang: props.podcast.language,
    }, [
      head.setup({ title: props.podcast.title, css: props.css }),
      body.setup({ podcast: props.podcast }),
    ])
  },
}
