import type { PropType } from 'vue'
import type { Podcast } from '../models/Podcast'
import { h } from 'vue'
import body from './body'
import head from './head'

interface Props {
  podcast: Podcast
  css?: string
}

export default {
  props: {
    podcast: {
      type: Object as PropType<Podcast>,
      required: true,
    },
    css: {
      type: String,
      required: false,
    },
  },
  setup(props: Props) {
    return h('html', {
      lang: props.podcast.language,
    }, [
      head.setup({
        title: props.podcast.title,
        link: props.podcast.rss ? props.podcast.rss : props.podcast.link,
        css: props.css,
      }),
      body.setup({ podcast: props.podcast }),
    ])
  },
}
