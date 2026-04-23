FROM ghcr.io/frappe/frappe-worker:v15

ARG BRANCH=white-label

# Install NexLink CRM app
RUN install_app crm https://github.com/NexLink-ai/nexlink-crm ${BRANCH}
