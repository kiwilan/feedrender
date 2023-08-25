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
    const subscribe = {
      en: 'Subscribe to podcast',
      fr: 'S\'abonner au podcast',
      default: 'Subscribe to podcast',
    }

    return h('header', [
      h('div', { class: 'rss' }, [
        h('a', { href: props.podcast?.xmlRenderUrl, target: '_blank', rel: 'noopener noreferrer', title: 'RSS feed' }, [
          h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, [
            h('g', {}, [
              h('path', { d: 'M3.75 3a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V16C17 8.82 11.18 3 4 3h-.25Z' }),
              h('path', { d: 'M3 8.75A.75.75 0 0 1 3.75 8H4a8 8 0 0 1 8 8v.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V16a6 6 0 0 0-6-6h-.25A.75.75 0 0 1 3 9.25v-.5ZM7 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z' }),
            ]),
          ]),
        ]),
      ]),
      h('div', { class: 'header-block' }, [
        h('div', { class: 'header-block__img' }, [
          h('img', { src: props.podcast?.image, alt: props.podcast?.title, loading: 'lazy' }),
        ]),
        h('div', { class: 'header-block__title' }, [
          h('h1', [props.podcast?.title]),
        ]),
        h('div', { class: 'header-block__description prose' }, [
          h('div', { innerHTML: props.podcast?.description }),
        ]),
        h('a', { class: 'header-block__button', href: props.podcast?.feedUrl }, [
          h('svg', { class: 'header-block__button__icon', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, [
            h('path', { fill: 'currentColor', d: 'M11 22v-8.275q-.45-.275-.725-.712T10 12q0-.825.588-1.413T12 10q.825 0 1.413.588T14 12q0 .575-.275 1.025t-.725.7V22h-2Zm-5.9-2.75q-1.425-1.375-2.262-3.238T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.15-.838 4.025T18.9 19.25l-1.4-1.4q1.15-1.1 1.825-2.613T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 1.725.675 3.225t1.85 2.6L5.1 19.25Zm2.825-2.825q-.875-.825-1.4-1.963T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 1.325-.525 2.475t-1.4 1.95L14.65 15q.625-.575.988-1.35T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 .9.363 1.663T9.35 15l-1.425 1.425Z' }),
          ]),
          h('span', {}, [subscribe[props.podcast?.lang || 'default']]),
        ]),
      ]),
      h('img', { class: 'header-block__bg', src: props.podcast?.image, loading: 'lazy' }),
      h('div', { class: 'header-block__overlay' }),
    ])
  },
}
