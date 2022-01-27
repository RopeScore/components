import { Meta, Story } from '@storybook/vue3'
import { defineComponent } from 'vue'
import DialogButton from './DialogButton.vue'

export default {
  title: 'DialogButton',
  component: DialogButton,
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content'
    }
  }
} as Meta

const Template: Story<DialogButton> = (args) => defineComponent({
  // Components used in your story `template` are defined in the `components` object
  components: { DialogButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dialog-button v-bind="args">{{ args.default }}</dialog-button>'
})

export const Default = Template.bind({})
Default.args = {
  default: 'Note content',
  label: 'Open Dialog'
}
