import type { ChannelItem } from '@/types'
import sanitizeHtml from 'sanitize-html'

export class Episode {
  protected constructor(
    public title?: string,
    public link?: string,
    public enclosure?: {
      url?: string
      length?: string
      type?: string
    },
    public pubDate?: string,
    public date?: string,
    public description?: string,
    public content?: string,
    public author?: string,
    public episodeType?: string,
    public duration?: string,
    public durationHuman?: string,
    public guid?: string,
    public image?: string,
    public season?: string,
    public episode?: string,
    public isExplicit?: boolean,
  ) {}

  public static make(item: ChannelItem, lang = 'en'): Episode {
    const self = new this()
    self.title = item.title
    self.link = item.link
    self.enclosure = {
      url: item.enclosure?.['@_url'],
      length: item.enclosure?.['@_length'],
      type: item.enclosure?.['@_type'],
    }
    self.pubDate = item.pubDate
    self.date = self.formatDate(item.pubDate, lang)

    let description
      = item.description
      || item['itunes:summary']
      || item['googleplay:description']
      || ''
    description = self.addLazyLoading(description)
    description = sanitizeHtml(description)
    self.description = description

    self.content = item['content:encoded']

    if (item.author)
      self.author = item.author
    else if (item['itunes:author'])
      self.author = item['itunes:author']

    self.episodeType = item['itunes:episodeType']
    self.duration = item['itunes:duration']
    self.durationHuman = self.formatTime(self.duration)
    self.guid = item.guid?.['#text']
    self.image
      = item['itunes:image']?.['@_href'] || item['googleplay:image']?.['@_href']

    self.season = item['itunes:season'] || item['podcast:season']
    self.episode = item['itunes:episode'] || item['podcast:episode']

    self.isExplicit
      = item['itunes:explicit'] === 'yes'
      || item['googleplay:explicit'] === 'yes'

    return self
  }

  private addLazyLoading(html?: string) {
    if (!html)
      return ''

    return html.replace(/<img /g, '<img loading="lazy" ')
  }

  private formatDate(date?: string, lang = 'en') {
    if (!date)
      return ''

    const d = new Date(date)
    return d.toLocaleDateString(lang, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  private formatTime(seconds: number | string | undefined) {
    if (!seconds)
      return ''

    if (typeof seconds === 'string') {
      if (seconds.includes(':')) {
        const split = seconds.split(':')
        if (split.length !== 3)
          split.unshift('0')

        const h = split[0]
        const m = split[1]
        const s = split[2]

        seconds
          = Number.parseInt(h) * 3600
          + Number.parseInt(m) * 60
          + Number.parseInt(s)
      }
      else {
        seconds = Number.parseInt(seconds)
      }
    }

    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }
}
