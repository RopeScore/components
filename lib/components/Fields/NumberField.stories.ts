import { Meta, Story } from '@storybook/vue3'
import { defineComponent, ref } from 'vue'
import NumberField from './NumberField.vue'

export default {
  title: 'Fields/NumberField',
  component: NumberField,
  argTypes: {
    modelValue: { control: false },
    'update:modelValue': { control: false }
  }
} as Meta

const Template: Story<NumberField> = (args) => defineComponent({
  // Components used in your story `template` are defined in the `components` object
  components: { NumberField },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({
    args,
    value: ref<number | null>()
  }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <number-field v-bind="args" :model-value="value" @update:model-value="value = $event" />
    <br/>
    <div>{{ value }} ({{ typeof value }})</div>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Input Label'
}

export const Step = Template.bind({})
Step.args = {
  label: 'Input Label',
  min: 0,
  max: 10,
  step: 1
}
