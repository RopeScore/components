import { Meta, Story } from '@storybook/vue3'
import { defineComponent } from 'vue'
import NoteCard from './NoteCard.vue'

export default {
  title: 'NoteCard',
  component: NoteCard,
  argTypes: {
    color: {
      control: 'select',
      options: [undefined, 'blue', 'green', 'red', 'orange']
    },
    default: {
      control: 'text',
      description: 'Slot content'
    }
  }
} as Meta

const Template: Story<NoteCard> = (args) => defineComponent({
  // Components used in your story `template` are defined in the `components` object
  components: { NoteCard },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<note-card v-bind="args">{{ args.default }}</note-card>'
})

export const Default = Template.bind({})
Default.args = {
  default: 'Note content'
}
