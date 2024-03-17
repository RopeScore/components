import { type Meta, type StoryFn } from '@storybook/vue3'
import { defineComponent, type ExtractPropTypes } from 'vue'
import TextButton from './TextButton.vue'

export default {
  title: 'TextButton',
  component: TextButton,
  argTypes: {
    color: {
      control: 'select',
      options: [undefined, 'blue', 'green', 'red', 'orange']
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button']
    },
    default: {
      control: 'text',
      description: 'Slot content'
    },
    dense: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    selected: {
      control: 'boolean'
    },
    onClick: { action: 'clicked' }
  }
} as Meta

const Template: StoryFn<ExtractPropTypes<typeof TextButton>> = (args) => defineComponent({
  // Components used in your story `template` are defined in the `components` object
  components: { TextButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<text-button v-bind="args" @click="args.onClick">{{ args.default }}</text-button>'
})

export const Default = Template.bind({})
Default.args = {
  default: 'Button',
  type: 'button'
}
