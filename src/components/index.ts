import { readFile } from 'node:fs/promises'
import { cwd } from 'node:process'
import { renderToString } from 'vue/server-renderer'
import podcastRenderer from './podcast-renderer'

type Name = 'podcast-renderer'
interface Options {
  name: Name
  props: any
}

async function createDom(options: Options): Promise<string> {
  const css = await readFile(`${cwd()}/src/components/rss.css`, 'utf-8')
  options.props.css = css

  const html = await renderToString(podcastRenderer.setup({ ...options.props }))

  return `<!DOCTYPE html>${html}`
}

export {
  createDom,
}
