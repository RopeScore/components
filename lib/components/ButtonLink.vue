<script setup lang="ts">
import TextButton from './TextButton.vue'
import { RouterLink } from 'vue-router'

defineProps({
  ...TextButton.props
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template>
  <router-link v-slot="{ href, navigate, isActive }" :to="to" v-bind="$attrs" custom>
    <a :href="href" @click.prevent="disabled ? null : navigate()">
      <text-button v-bind="$props">
        <slot :is-active="isActive" />
      </text-button>
    </a>
  </router-link>
</template>
