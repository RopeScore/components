<script setup lang="ts">
import TextButton from './TextButton.vue'
import { RouterLink, type RouterLinkProps } from 'vue-router'

const props = defineProps({
  ...TextButton.props
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template>
  <router-link v-slot="{ href, navigate, isActive }" v-bind="$attrs as unknown as RouterLinkProps" custom>
    <a :href="href" @click.prevent="props.disabled ? null : navigate()">
      <text-button v-bind="$props">
        <slot :is-active="isActive" />
      </text-button>
    </a>
  </router-link>
</template>
