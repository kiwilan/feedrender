import { defineProps, h } from 'vue'

interface Props {
  title?: string
  css?: string
}

export default {
  props: defineProps<Props>(),
  setup(props: Props) {
    return h('head', [
      h('meta', {
        charSet: 'UTF-8',
      }),
      h('meta', {
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge',
      }),
      h('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      }),
      h('meta', {
        name: 'apple-itunes-app',
        content: 'app-id=993490336',
      }),
      h('title', props.title),
      h('link', {
        rel: 'alternate',
        type: 'application/rss+xml',
        href: 'https://feeds.transistor.fm/learn-javascript',
        title: props.title,
      }),
      h('style', { innerHTML: props.css }),
    ])
  },
}
