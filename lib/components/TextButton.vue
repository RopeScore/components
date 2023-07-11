<script setup lang="ts">
import type { PropType } from 'vue'

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
  disabled: {
    type: Boolean,
    default: false
  },
  selected: {
    type: Boolean,
    default: false
  },
  color: {
    type: String as PropType<'blue' | 'green' | 'red' | 'orange'>,
    validator (value: unknown) {
      return (
        typeof value === 'string' &&
        ['blue', 'green', 'red', 'orange'].includes(value)
      ) || typeof value === 'undefined'
    },
    default: undefined
  }
})
</script>

<template>
  <button
    v-bind="$attrs"
    :disabled="disabled || loading"
    class=":uno: px-2 mx-1 transition-colors rounded uppercase font-semibold text-base disabled:text-gray-400 disabled:cursor-default whitespace-nowrap relative"
    :class="{
      'py-1': !dense,
      'border-2': selected,

      'hover:bg-gray-200': !color && !disabled,
      'border-black': !color && selected,
      'disabled:text-gray-400': !selected,

      'text-blue-500': color === 'blue',
      'border-blue-500': color === 'blue' && selected,
      'hover:bg-blue-100': color === 'blue',

      'text-green-500': color === 'green',
      'border-green-500': color === 'green' && selected,
      'hover:bg-green-100': color === 'green',

      'text-red-500': color === 'red',
      'border-red-500': color === 'red' && selected,
      'hover:bg-red-100': color === 'red',

      'text-orange-500': color === 'orange',
      'border-orange-500': color === 'orange' && selected,
      'hover:bg-orange-100': color === 'orange'
    }"
  >
    <icon-loading v-if="loading" class="animate-spin" />
    <slot v-else />
  </button>
</template>
