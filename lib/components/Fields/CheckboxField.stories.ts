import { type Meta, type StoryFn } from '@storybook/vue3'
import { defineComponent, type ExtractPropTypes, ref } from 'vue'
import CheckboxField from './CheckboxField.vue'

export default {
  title: 'Fields/CheckboxField',
  component: CheckboxField,
  argTypes: {
    modelValue: { control: false },
    'update:modelValue': { control: false }
  }
} as Meta

const Template: StoryFn<ExtractPropTypes<typeof CheckboxField>> = (args) => defineComponent({
  // Components used in your story `template` are defined in the `components` object
  components: { CheckboxField },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({
    args,
    value: ref<boolean | null>((args.modelValue as boolean | undefined) ?? null)
  }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <checkbox-field v-bind="args" :model-value="value" @update:model-value="value = $event" />
    <br/>
    <div>{{ value }} ({{ typeof value }})</div>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Input Label'
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  dense: true
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Select Thing',
  modelValue: true,
  loading: true
}
