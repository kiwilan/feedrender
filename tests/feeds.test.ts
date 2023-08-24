import { expect, it } from 'vitest'
import { Renderer } from '../src/services'

const feeds = [
  'https://feedpress.me/rdvjeux',
  'https://feedpress.me/positron.xml',
  'https://access.acast.com/rss/632090bb4d259900133e31a5/default',
  'https://leduel.com/podcast_LD.xml',
  'https://soute.vaisseauhypersensas.fr/flux/comicsoutcast.xml',
  'https://soute.vaisseauhypersensas.fr/flux/whisperos.xml',
  'https://www.studiozef.fr/category/le-bar-a-louisette/feed/',
  'https://feeds.acast.com/public/shows/floodcast',
  'https://feeds.soundcloud.com/users/soundcloud:users:274829367/sounds.rss',
  'http://www.zqsd.fr/zqsd.xml',
  'http://feeds.feedburner.com/LaperoDuCaptain',
  'https://feeds.acast.com/public/shows/cabcdc65-9f15-5900-a971-d6d96f16ed31',
  'https://2hdp.fr/2HDP.xml',
  'https://feeds.acast.com/public/shows/b6dda9e2-3ed6-4145-8bcf-3a279a1e1baa',
]

it('can use feeds', async () => {
  await Promise.all(feeds.map(async (feed) => {
    const renderer = await Renderer.make({ url: feed })
    const podcast = renderer.getPodcast()

    expect(podcast).toBeDefined()
    expect(podcast?.title).toBeDefined()
    expect(podcast?.description).toBeDefined()
    expect(podcast?.image).toBeDefined()
    expect(podcast?.link).toBeDefined()
    expect(podcast?.episodes).toBeDefined()

    podcast?.episodes.forEach((episode) => {
      expect(episode.title).toBeDefined()
      expect(episode.enclosure).toBeDefined()
      expect(episode.enclosure?.url).toBeDefined()
      expect(episode.pubDate).toBeDefined()
    })

    const html = renderer.getRender()
    expect(html).toBeDefined()
  }))
})
