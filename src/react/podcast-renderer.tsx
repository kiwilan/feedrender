import type { Podcast } from '../models/Podcast'

function PodcastRenderer(props: { podcast: Podcast }) {
  return <div>
    <div>{props.podcast.getTitle()}</div>
    <div>{props.podcast.getAuthor()}</div>
  </div>
}

export default PodcastRenderer
