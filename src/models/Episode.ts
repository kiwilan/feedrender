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
    public description?: string,
    public author?: string,
    public episodeType?: string,
    public duration?: string,
    public guid?: string,
  ) {}

  public static make(item: ChannelItem): Episode {
    const self = new this()
    self.title = item.title
    self.link = item.link
    self.enclosure = {
      url: item.enclosure?.['@_url'],
      length: item.enclosure?.['@_length'],
      type: item.enclosure?.['@_type'],
    }
    self.pubDate = item.pubDate
    self.description = item.description

    if (item.author)
      self.author = item.author
    else if (item['itunes:author'])
      self.author = item['itunes:author']

    self.episodeType = item['itunes:episodeType']
    self.duration = item['itunes:duration']
    self.guid = item.guid?.['#text']

    return self
  }
}
