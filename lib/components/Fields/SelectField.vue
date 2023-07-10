<script setup lang="ts">
import { v4 as uuid } from 'uuid'

import type { PropType } from 'vue'
import type { DataListItem } from '../../helpers'

defineProps({
  dense: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  dataList: {
    type: Array as PropType<Readonly<DataListItem[]>>,
    required: true
  }
})

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<(event: 'update:modelValue', value: number | string) => void>()

const id = uuid().replace(/^[^a-z]+/, '')

function input (event: any) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

function value (item: DataListItem) {
  return (item as any).value ?? item
}

function text (item: DataListItem) {
  return (item as any).text ?? item
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template>
  <div class="relative" :class="{ 'mt-2': !dense }">
    <select
      v-bind="$attrs"
      :id="id"
      :name="id"
      :placeholder="dense ? label : ' '"
      :value="modelValue"
      class="text-base block border-0 border-b-gray-500 border-b-2 w-full min-w-12 bg-transparent disabled:bg-gray-200 invalid:bg-red-100"
      :class="{
        'p-0': dense,
        'px-0.5': dense,
        'm-0': dense,

        'pt-4': !dense,
        'pb-1': !dense,
        'px-3': !dense
      }"
      @change="input"
    >
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <option selected value></option>
      <option v-for="item of dataList" :key="value(item)" :value="value(item)">
        {{ text(item) }}
      </option>
    </select>
    <label
      v-if="!dense"
      :for="id"
      class="-z-1 absolute top-4 left-3 transition-all text-base text-dark-100 cursor-default"
      :class="{
        'text-xs': !!modelValue,
        'top-0.5': !!modelValue
      }"
    >{{ label }}</label>
  </div>
</template>
