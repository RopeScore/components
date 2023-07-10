<script setup lang="ts">
import { v4 as uuid } from 'uuid'
import { clampNumber } from '../../helpers'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  dense: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Number,
    default: undefined
  },
  min: {
    type: Number,
    default: undefined
  },
  max: {
    type: Number,
    default: undefined
  },
  step: {
    type: Number,
    default: undefined
  }
})

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<(event: 'update:modelValue', value: number) => void>()

const id = uuid().replace(/^[^a-z]+/, '')

function input (event: any) {
  let num = parseInt((event.target as HTMLInputElement).value, 10)
  if (Number.isNaN(num)) { emit('update:modelValue', num); return }

  num = clampNumber(num, { min: props.min, max: props.max, step: props.step })

  emit('update:modelValue', num)
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template>
  <div class="relative" :class="{ 'mt-2': !dense }">
    <input
      v-bind="$attrs"
      :id="id"
      :name="id"
      type="number"
      :min="min"
      :max="max"
      :step="step"
      :placeholder="dense ? label : ' '"
      :value="modelValue"
      class="text-base block border-0 border-b-gray-500 border-b-2 w-full bg-transparent disabled:bg-gray-200 invalid:bg-red-100"
      :class="{
        'p-0': dense,
        'px-0.5': dense,
        'm-0': dense,

        'pt-4': !dense,
        'pb-1': !dense,
        'px-3': !dense
      }"
      @input="input"
    >
    <label
      v-if="!dense"
      :for="id"
      class="absolute top-4 left-3 transition-all text-base text-gray-500 cursor-text whitespace-nowrap overflow-ellipsis"
    >{{ label }}</label>
  </div>
</template>

<style>
input:focus + label,
input:not(:placeholder-shown) + label {
  @apply top-0.5;
  @apply text-xs;
}
</style>
