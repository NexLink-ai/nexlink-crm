// NexLink CRM — White-label JS overrides
(function () {
  function applyBranding() {
    // Replace "Login to Frappe" heading on login page
    document.querySelectorAll('h4, h3, h2, .page-card-head h4').forEach(function (el) {
      if (el.textContent.includes('Login to Frappe') || el.textContent.includes('Frappe CRM')) {
        el.textContent = el.textContent
          .replace('Login to Frappe', 'Login to NexLink CRM')
          .replace('Frappe CRM', 'NexLink CRM')
      }
    })

    // Replace any remaining "Frappe" text in login page subheadings
    document.querySelectorAll('.login-content p, .page-card-head p').forEach(function (el) {
      if (el.textContent.includes('Frappe')) {
        el.textContent = el.textContent.replace(/Frappe/g, 'NexLink')
      }
    })

    // Fix logo size if too large on login page
    document.querySelectorAll('.login-content img, .page-card img').forEach(function (img) {
      img.style.maxHeight = '48px'
      img.style.maxWidth = '200px'
      img.style.width = 'auto'
    })
  }

  function applyDeskBranding() {
    // Override desk page title
    if (document.title && (document.title === 'Frappe' || document.title.includes('Frappe'))) {
      document.title = 'NexLink CRM'
    }
    if (!document.title || document.title === '') {
      document.title = 'NexLink CRM'
    }

    // Inject meta description if missing
    if (!document.querySelector('meta[name="description"]')) {
      var meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'NexLink CRM — Plataforma de relacionamento com clientes'
      document.head.appendChild(meta)
    }

    // Override favicon to NexLink
    var existingFavicon = document.querySelector('link[rel="icon"]')
    if (existingFavicon && existingFavicon.href.includes('frappe')) {
      existingFavicon.href = '/assets/crm/favicon.png'
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyBranding()
      applyDeskBranding()
    })
  } else {
    applyBranding()
    applyDeskBranding()
  }

  // Run again after a short delay to catch dynamic content
  setTimeout(function () {
    applyBranding()
    applyDeskBranding()
  }, 500)
})()
