<template>
  <text-button text :dense="dense" :disabled="disabled" @click="open">
    {{ label }}
  </text-button>
  <teleport to="body">
    <dialog ref="dialogRef" class="min-w-[50vw] rounded px-4 py-6 min-h-20">
      <div class="absolute top-2 right-2">
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

<script setup lang="ts">
import { ref } from 'vue'

import TextButton from './TextButton.vue'
import IconClose from 'virtual:icons/mdi/close'

defineProps({
  label: {
    type: String,
    required: true
  },
  dense: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
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
