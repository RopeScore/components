import { type Meta, type Story } from '@storybook/vue3'
import { defineComponent, type ExtractPropTypes, ref } from 'vue'
import SelectField from './SelectField.vue'

export default {
  title: 'Fields/SelectField',
  component: SelectField,
  argTypes: {
    dataList: {
      control: { type: 'array' }
    },
    modelValue: { control: false },
    'update:modelValue': { control: false }
  }
} as Meta

const Template: Story<ExtractPropTypes<typeof SelectField>> = (args) => defineComponent({
  components: { SelectField },
  setup: () => ({
    args,
    value: ref<string | number | null>(null)
  }),
  template: `
    <select-field v-bind="args" :model-value="value" @update:model-value="value = $event" />
    <br/>
    <div>{{ value }} ({{ typeof value }})</div>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Input Label',
  dataList: ['a', 'b']
}

export const DataLabels = Template.bind({})
DataLabels.args = {
  label: 'Input Label',
  dataList: [{ value: 1, text: 'Yes' }, { value: 0, text: 'No' }]
}
