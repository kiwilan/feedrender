import type { ChannelItem } from '../types'

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
    public author?: string,
    public episodeType?: string,
    public duration?: string,
    public guid?: string,
    public image?: string,
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
    self.description = self.addLazyLoading(item.description)

    if (item.author)
      self.author = item.author
    else if (item['itunes:author'])
      self.author = item['itunes:author']

    self.episodeType = item['itunes:episodeType']
    self.duration = item['itunes:duration']
    self.guid = item.guid?.['#text']
    self.image = item['itunes:image']?.['@_href'] || item['googleplay:image']?.['@_href']

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
}
