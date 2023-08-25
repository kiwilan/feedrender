import type { PropType } from 'vue'
import { h } from 'vue'
import type { Podcast } from '~/models/Podcast'

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
    const published = {
      en: 'Published',
      fr: 'Posté le',
      default: 'Published',
    }

    const download = {
      en: 'Download',
      fr: 'Télécharger',
      default: 'Download',
    }

    return h('main', {}, [
      h('ul', { class: 'item-list' }, [
        props.podcast?.episodes?.map((episode, id) => {
          return h('li', { key: id, class: 'item' }, [
            h('div', { class: 'item__title' }, [
              h('div', [episode.image ? h('img', { src: episode.image, alt: episode.title, loading: 'lazy' }) : h('span')]),
              h('div', { class: 'item__title__text' }, [
                h('a', { href: episode.link }, [
                  h('h2', {}, episode.title),
                ]),
                h('p', { class: 'author' }, `${episode.author} / ${published[props.podcast?.lang || 'default']} ${episode.date}`),
              ]),
            ]),
            h('div', { class: 'description prose', innerHTML: episode.description }),
            h('hr'),
            h('div', { class: 'copyright' }, [
              h('p', {}, props.podcast?.copyright),
            ]),
            h('div', { class: 'download' }, [
              h('a', { href: episode.enclosure?.url, target: '_blank', download: true }, [
                download[props.podcast?.lang || 'default'],
              ]),
              h('audio', { controls: true, preload: 'none' }, [
                h('source', { type: 'audio/mpeg', src: episode.enclosure?.url }),
              ]),
            ]),
          ])
        }),
      ]),
    ])
  },
}
