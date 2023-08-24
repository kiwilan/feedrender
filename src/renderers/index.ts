// import PodcastRenderer from './podcast-renderer'

async function component() {
  const component = await import('./podcast-renderer')
  // console.log(component)

  return 'PodcastRenderer'
}

export {
  component,
  // PodcastRenderer,
}
