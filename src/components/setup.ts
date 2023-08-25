import { h } from 'vue'

export default {
  props: ['message'],
  setup(props: { message: string }) {
    return h('div', [
      // default slot:
      // <div><slot /></div>
      h('div'),

      // named slot:
      // <div><slot name="footer" :text="message" /></div>
      h(
        'div',
        props.message,
      ),
    ])
  },
}
