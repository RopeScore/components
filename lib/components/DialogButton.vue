<script setup lang="ts">
import { ref } from 'vue'

import TextButton from './TextButton.vue'
import IconClose from '~icons/mdi/close'

defineProps({
  label: {
    type: String,
    required: true
  }
})

defineExpose({
  close
})

const dialogRef = ref()

function open () {
  dialogRef.value?.showModal()
}

function close () {
  dialogRef.value?.close()
}
</script>

<template>
  <text-button v-bind="$attrs" @click="open">
    {{ label }}
  </text-button>
  <teleport to="body">
    <dialog ref="dialogRef" class=":uno: min-w-[50vw] rounded px-4 py-6 min-h-20">
      <div class=":uno: absolute top-2 right-2">
        <text-button
          text
          @click="close"
        >
          <icon-close />
        </text-button>
      </div>
      <slot :close="close" />
    </dialog>
  </teleport>
</template>
