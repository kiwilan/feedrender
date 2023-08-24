export interface Channel {
  title?: string
  link?: string
  'atom:link'?: {
    '@_href': 'http://app.p1pdd.test/rss/p1pdd?render=1'
    '@_rel': 'self'
    '@_type': 'application/rss+xml'
  }
  'itunes:subtitle'?: string
  description?: string
  'itunes:summary'?: string
  'googleplay:description'?: string
  language?: string
  'spotify:countryOfOrigin'?: string
  copyright?: string
  lastBuildDate?: string
  pubDate?: string
  generator?: string
  'itunes:keywords'?: string
  'dc:creator'?: string
  'itunes:author'?: string
  'itunes:owner'?: {
    'itunes:name'?: string
    'itunes:email'?: string
  }
  'googleplay:author'?: string
  'googleplay:email'?: string
  'itunes:explicit'?: string
  'googleplay:explicit'?: string
  'itunes:type'?: string
  image?: {
    url?: string
    title?: string
    link?: string
  }
  'itunes:image'?: string
  'googleplay:image'?: string
  guid?: string
  category: string[]
  'itunes:category'?: {
    '@_text': string
    'itunes:category'?: {
      '@_text': string
    }
  }[]
  item: ChannelItem[]
}

export interface ChannelItem {
  title?: string
  link?: string
  enclosure?: {
    '@_url': string
    '@_length': string
    '@_type': string
  }
  pubDate?: string
  'dc:creator'?: {
    '#text': string
    '@_xmlns:dc': string
  }
  author?: string
  'itunes:author'?: string
  'googleplay:author'?: string
  'itunes:episodeType'?: string
  description?: string
  'itunes:duration'?: string
  guid?: {
    '#text': string
    '@_isPermaLink': string
  }
  'itunes:image'?: {
    '@_href': string
  }
  'googleplay:image'?: {
    '@_href': string
  }
}
