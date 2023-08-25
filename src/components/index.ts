import { readFile } from 'node:fs/promises'
import { cwd } from 'node:process'
import { renderToString } from 'vue/server-renderer'
import renderer from './body'
import type { Podcast } from '~/models/Podcast'

interface Options {
  props: {
    podcast: Podcast
    css?: string
  }
}

async function createDom(options: Options): Promise<string> {
  const css = await readFile(`${cwd()}/src/components/rss.css`, 'utf-8')
  options.props.css = css

  const html = await renderToString(renderer.setup({ ...options.props }))

  return `<!DOCTYPE html>${html}`
}

export {
  createDom,
}
