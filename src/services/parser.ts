import { ofetch } from 'ofetch'
import { XMLParser, XMLValidator } from 'fast-xml-parser'
import { Podcast } from '../models/Podcast'
import type { Channel } from '../types'

export class Parser {
  protected constructor(
    protected readonly query: Record<string, string>,
    protected readonly lang: string,
    protected url?: string,
    protected xml?: string,
    protected channel?: Channel,
    protected podcast?: Podcast,
    protected error?: string,
  ) {}

  public static async make(query: any | Record<string, string>, lang: string = 'en-US'): Promise<Parser> {
    lang = lang.toLowerCase()
    if (lang.includes('-'))
      lang = lang.split('-')[0]

    const self = new this(query, lang)
    if (!query.url) {
      self.error = 'Missing url query parameter'
      return self
    }

    self.url = query.url as string

    try {
      const base64 = atob(self.url)
      self.url = base64
    }
    catch (error) {
    }

    const res = await self.fetch()

    self.parseXml(res)

    return self
  }

  public getUrl(): string | undefined {
    return this.url
  }

  public getXml(): string | undefined {
    return this.xml
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

  public async getRender(): Promise<string | undefined> {
    if (!this.podcast)
      this.error = 'No podcast found'

    return await this.podcast?.render()
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

    this.xml = res
    const xml = parser.parse(res)
    this.channel = xml.rss.channel
    if (this.channel)
      this.podcast = Podcast.make(this.url!, this.channel, this.lang)

    return this
  }
}
