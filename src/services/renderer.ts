import type { H3Event } from 'h3'
import { getQuery } from 'h3'
import { ofetch } from 'ofetch'
import { XMLParser, XMLValidator } from 'fast-xml-parser'
import { Podcast } from '../models/Podcast'
import type { Channel } from '../types'

export class Renderer {
  protected constructor(
    protected readonly event: H3Event,
    protected readonly query: Record<string, string>,
    protected url?: string,
    protected channel?: Channel,
    protected podcast?: Podcast,
    protected error?: string,
  ) {}

  public static async make(event: H3Event): Promise<Renderer> {
    const query = getQuery(event) as Record<string, string>

    const self = new this(event, query)
    if (!query.url) {
      self.error = 'Missing url query parameter'
      return self
    }

    self.url = query.url as string
    const res = await self.fetch()
    self.parseXml(res)

    return self
  }

  public getUrl(): string | undefined {
    return this.url
  }

  public getChannel(): Channel | undefined {
    return this.channel
  }

  public getPodcast(): Podcast | undefined {
    return this.podcast
  }

  public getError(): string | undefined {
    return this.error
  }

  public getRender(): string | undefined {
    if (!this.podcast)
      this.error = 'No podcast found'

    return this.podcast?.render()
  }

  private async fetch(): Promise<any> {
    return await ofetch(this.url!, { parseResponse: txt => txt })
  }

  private parseXml(res: string): this {
    if (!XMLValidator.validate(res)) {
      this.error = 'Invalid XML'
      return this
    }

    const parser = new XMLParser({
      ignoreAttributes: false,
    })
    const xml = parser.parse(res)
    this.channel = xml.rss.channel
    if (this.channel)
      this.podcast = Podcast.make(this.channel)

    return this
  }
}
