import { h } from 'vue'

interface Props {
  title?: string
  link?: string
  css?: string
}

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    css: {
      type: String,
      required: false,
    },
  },
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
      // h('meta', {
      //   name: 'apple-itunes-app',
      //   content: 'app-id=993490336',
      // }),
      h('title', props.title),
      h('link', {
        rel: 'alternate',
        type: 'application/rss+xml',
        href: props.link,
        title: props.title,
      }),
      h('style', { innerHTML: props.css }),
    ])
  },
}
