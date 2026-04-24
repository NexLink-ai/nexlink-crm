import frappe

LOGO_URL = "/assets/crm/images/logo-light.svg"
APP_NAME = "NexLink CRM"


def set_branding():
	"""Apply NexLink branding to Website Settings and System Settings."""
	if frappe.db.exists("Website Settings", "Website Settings"):
		frappe.db.set_single_value(
			"Website Settings",
			{
				"app_logo": LOGO_URL,
				"brand_html": f'<img src="{LOGO_URL}" alt="NexLink CRM" style="height:32px;width:auto;">',
				"footer_logo": LOGO_URL,
			},
		)

	if frappe.db.exists("System Settings", "System Settings"):
		frappe.db.set_single_value(
			"System Settings",
			{
				"app_name": APP_NAME,
			},
		)

	frappe.db.commit()


def lock_branding(doc, method=None):
	"""Prevent anyone from changing logo or brand HTML in Website Settings."""
	doc.app_logo = LOGO_URL
	doc.brand_html = f'<img src="{LOGO_URL}" alt="NexLink CRM" style="height:32px;width:auto;">'
	doc.footer_logo = LOGO_URL
