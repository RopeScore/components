<template>
  <label class="flex gap-2 items-center" :class="{ 'mt-2': !dense, 'cursor-pointer': !disabled }">
    <input
      :value="modelValue"
      type="checkbox"
      class="hidden"
      aria-hidden="false"
      :disabled="disabled || loading"
      :required="required"
      @change="emit('update:modelValue', !modelValue)"
    >

    <div
      class="p-0 border rounded flex justify-center items-center"
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

<script setup lang="ts">
import IconCheck from 'virtual:icons/mdi/check'
import IconLoading from 'virtual:icons/mdi/loading'

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
  },
  required: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])
</script>
