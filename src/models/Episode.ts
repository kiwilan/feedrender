import type { ChannelItem } from '../types'

export class Episode {
  protected constructor(
    protected title?: string,
    protected link?: string,
    protected enclosure?: {
      url?: string
      length?: string
      type?: string
    },
    protected pubDate?: string,
    protected description?: string,
    protected author?: string,
    protected episodeType?: string,
    protected duration?: string,
    protected guid?: string,
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
    self.author = item.author
    self.episodeType = item['itunes:episodeType']
    self.duration = item['itunes:duration']
    self.guid = item.guid?.['#text']

    return self
  }

  public getTitle(): string | undefined {
    return this.title
  }

  public getLink(): string | undefined {
    return this.link
  }

  public getEnclosure(): {
    url?: string
    length?: string
    type?: string
  } | undefined {
    return this.enclosure
  }

  public getPubDate(): string | undefined {
    return this.pubDate
  }

  public getDescription(): string | undefined {
    return this.description
  }

  public getAuthor(): string | undefined {
    return this.author
  }

  public getEpisodeType(): string | undefined {
    return this.episodeType
  }

  public getDuration(): string | undefined {
    return this.duration
  }

  public getGuid(): string | undefined {
    return this.guid
  }

  public toArray(): Record<string, string | undefined> {
    return {
      title: this.title,
      link: this.link,
      enclosure: this.enclosure?.url,
      pubDate: this.pubDate,
      description: this.description,
      author: this.author,
      episodeType: this.episodeType,
      duration: this.duration,
      guid: this.guid,
    }
  }
}
