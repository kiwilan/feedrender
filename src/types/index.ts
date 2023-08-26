export interface Channel {
  title?: string
  link?: string
  'atom:link'?: {
    '@_href': string
    '@_rel': string
    '@_type': string
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
  webMaster?: string
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
  image?: ChannelImage
  'itunes:image'?: {
    '@_href': string
  }
  'googleplay:image'?: {
    '@_href': string
  }
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

export interface ChannelImage {
  url?: string
  title?: string
  link?: string
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
  'itunes:season'?: string
  'itunes:episode'?: string
  'podcast:season'?: string
  'podcast:episode'?: string
  'itunes:explicit'?: string
  'googleplay:explicit'?: string
}
