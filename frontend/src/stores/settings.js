import { createDocumentResource } from 'frappe-ui'
import { reactive, ref } from 'vue'

const settings = ref({})
const brand = reactive({
  name: 'NexLink CRM',
  logo: '/assets/crm/images/logo-light.svg',
  favicon: '/assets/crm/favicon.png',
})

const _settings = createDocumentResource({
  doctype: 'FCRM Settings',
  name: 'FCRM Settings',
  onSuccess: (data) => {
    settings.value = data
    getSettings().setupBrand()
    return data
  },
})

export function getSettings() {
  function setupBrand() {
    brand.name = 'NexLink CRM'
    brand.logo = '/assets/crm/images/logo-light.svg'
    brand.favicon = '/assets/crm/favicon.png'
  }

  return {
    _settings,
    settings,
    brand,
    setupBrand,
  }
}
