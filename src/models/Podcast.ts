import { renderToString } from 'react-dom/server'
import { PodcastRenderer } from '../react'
import type { Channel } from '../types'
import { Episode } from './Episode'

export class Podcast {
  protected constructor(
    public title?: string,
    public description?: string,
    public image?: string,
    public link?: string,
    public rss?: string,
    public author?: string,
    public owner?: {
      name?: string
      email?: string
    },
    public language?: string,
    public copyright?: string,
    public lastBuildDate?: string,
    public pubDate?: string,
    public webMaster?: string,
    public guid?: string,
    public categories?: string[],
    public itunesCategories?: {
      category?: string
      subCategory?: string
    }[],
    public episodes?: Episode[],
  ) {}

  public static make(channel: Channel): Podcast {
    const self = new this()

    self.title = channel.title
    self.description = channel.description

    if (channel.image?.url)
      self.image = channel.image.url
    else if (channel['itunes:image']?.['@_href'])
      self.image = channel['itunes:image']?.['@_href']
    else if (channel['googleplay:image']?.['@_href'])
      self.image = channel['googleplay:image']?.['@_href']

    self.link = channel.link
    self.rss = channel['atom:link']?.['@_href']
    self.author = channel['itunes:author']
    self.owner = {
      name: channel['itunes:owner']?.['itunes:name'],
      email: channel['itunes:owner']?.['itunes:email'],
    }
    self.language = channel.language
    self.copyright = channel.copyright
    self.lastBuildDate = channel.lastBuildDate
    self.pubDate = channel.pubDate
    self.webMaster = channel.webMaster
    self.guid = channel.guid
    self.categories = channel.category

    self.itunesCategories = []

    const categories = channel['itunes:category']

    if (Array.isArray(categories)) {
      categories.forEach((category) => {
        self.itunesCategories?.push({
          category: category['@_text'],
          subCategory: category['itunes:category']?.['@_text'],
        })
      })
    }
    else {
      self.itunesCategories?.push({
        category: categories?.['@_text'],
        subCategory: categories?.['itunes:category']?.['@_text'],
      })
    }

    self.episodes = []
    channel.item?.forEach((item) => {
      self.episodes?.push(Episode.make(item))
    })

    return self
  }

  public render(): string {
    const component = PodcastRenderer({ podcast: this })
    return `<!DOCTYPE html>${renderToString(component)}`
  }
}
