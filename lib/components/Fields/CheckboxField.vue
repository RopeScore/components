<script setup lang="ts">
import IconCheck from '~icons/mdi/check'
import IconLoading from '~icons/mdi/loading'

defineProps({
  dense: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: null
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<(event: 'update:modelValue', value: boolean) => void>()
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template>
  <label class=":uno: flex gap-2 items-center" :class="{ 'mt-2': !dense, 'cursor-pointer': !disabled }">
    <input
      :value="modelValue"
      v-bind="$attrs"
      type="checkbox"
      class="hidden"
      aria-hidden="false"
      :disabled="disabled || loading"
      @change="emit('update:modelValue', !modelValue)"
    >

    <div
      class=":uno: p-0 border rounded flex justify-center items-center"
      :class="{
        'hover:bg-gray-300': !disabled,

        'bg-green-500': modelValue && !disabled,
        'hover:bg-green-300': modelValue && !disabled,

        'bg-gray-200': disabled && !modelValue,
        'bg-green-300': disabled && modelValue,

        'h-8': !dense,
        'w-8': !dense,

        'h-6': dense,
        'w-6': dense
      }"
    >
      <icon-loading v-if="loading" class="text-white animate-spin" />
      <icon-check v-else class="text-white" />
    </div>

    <span v-if="label">{{ label }}</span>
  </label>
</template>
