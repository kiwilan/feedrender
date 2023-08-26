import type { PropType } from 'vue'
import { h } from 'vue'
import type { Episode } from '@/models/Episode'
import type { Podcast } from '@/models/Podcast'

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

    function getEpisodeTitle(episode: Episode) {
      if (episode.season && episode.episode) {
        const seasonNumber = episode.season.toString().length === 1 ? `0${episode.season}` : episode.season
        const episodeNumber = episode.episode.toString().length === 1 ? `0${episode.episode}` : episode.episode

        return `S${seasonNumber} E${episodeNumber} - ${episode.title}`
      }

      return episode.title
    }

    return h('main', {}, [
      h('ul', { class: 'item-list' }, [
        props.podcast?.episodes?.map((episode, id) => {
          return h('li', { key: id, class: 'item' }, [
            h('div', { class: 'item__title' }, [
              h('div', [episode.image ? h('img', { src: episode.image, alt: episode.title, loading: 'lazy' }) : h('span')]),
              h('div', { class: 'item__title__text' }, [
                h('a', { href: episode.link }, [
                  h('h2', {}, getEpisodeTitle(episode)),
                ]),
                h('p', { class: 'author' }, `${published[props.podcast?.lang || 'default']} ${episode.date}`),
                h('p', { class: 'author' }, `${episode.author} / ${episode.durationHuman} ${episode.isExplicit ? '/ Explicit' : ''}`),
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
