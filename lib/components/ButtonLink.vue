<script setup lang="ts">
import TextButton from './TextButton.vue'

defineProps({
  dense: TextButton.props.dense,
  disabled: TextButton.props.disabled,
  selected: TextButton.props.selected,
  color: TextButton.props.color,
  // @ts-expect-error is global
  ...RouterLink.props
})
</script>

<template>
  <router-link v-slot="{ href, navigate, isActive }" v-bind="$props" custom>
    <a :href="href" @click="disabled ? null : navigate()">
      <text-button :dense="dense" :selected="selected" :disabled="disabled">
        <slot :is-active="isActive" />
      </text-button>
    </a>
  </router-link>
</template>
