<template>
  <img :src="logoUrl" alt="NexLink CRM" class="size-full object-contain" />
</template>
<script setup>
import { useTheme } from 'frappe-ui'
import { usePreferredDark } from '@vueuse/core'
import { computed } from 'vue'

const { currentTheme } = useTheme()
const prefersDark = usePreferredDark()

const logoUrl = computed(() => {
  const dark =
    currentTheme.value === 'dark' ||
    (currentTheme.value === 'system' && prefersDark.value)
  return dark
    ? '/assets/crm/images/logo-dark.svg'
    : '/assets/crm/images/logo-light.svg'
})
</script>
