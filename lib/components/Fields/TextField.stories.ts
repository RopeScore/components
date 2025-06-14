import { type Meta, type StoryFn } from '@storybook/vue3-vite'
import { defineComponent, type ExtractPropTypes, ref } from 'vue'
import TextField from './TextField.vue'

export default {
  title: 'Fields/TextField',
  component: TextField,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'number', 'date']
    },
    modelValue: { control: false },
    'update:modelValue': { control: false }
  }
} as Meta

const Template: StoryFn<ExtractPropTypes<typeof TextField>> = (args) => defineComponent({
  // Components used in your story `template` are defined in the `components` object
  components: { TextField },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({
    args,
    value: ref<string | number | null>()
  }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <text-field v-bind="args" :model-value="value" @update:model-value="value = $event" />
    <br/>
    <div>{{ value }} ({{ typeof value }})</div>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Input Label',
  type: 'text'
}

export const DataList = Template.bind({})
DataList.args = {
  label: 'Input Label',
  type: 'text',
  dataList: ['Sweden', 'Denmark']
}
